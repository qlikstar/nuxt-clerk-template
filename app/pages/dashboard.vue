<script setup lang="ts">
import { onMounted, watch, ref, onUnmounted } from 'vue'
import { DASHBOARD_CARDS } from '~/consts/cards'
import { OrganizationSwitcher, UserButton, useAuth, useUser, useSession } from '@clerk/vue'
import ClerkLogo from '~/components/ClerkLogo.vue'
import NuxtLogo from '~/components/NuxtLogo.vue'
import UserDetails from '~/components/UserDetails.vue'
import CodeSwitcher from '~/components/CodeSwitcher.vue'
import LearnMore from '~/components/LearnMore.vue'
import Footer from '~/components/Footer.vue'
import { logAuthEvent } from '~/services/auth-logger'

console.log('Dashboard page loaded successfully at: ', new Date().toISOString())

// DIRECT CONSOLE LOGS FOR AUTHENTICATION EVENTS
console.log('🔐 DIRECT AUTH LOG: Starting authentication monitoring')

// Get authentication information from Clerk
const { isSignedIn, userId } = useAuth()
const { isLoaded, user } = useUser()
const { session } = useSession()

// Log initial auth state
console.log('🔐 DIRECT AUTH LOG: Initial auth state', { 
  isSignedIn: isSignedIn.value, 
  userId: userId.value,
  isLoaded: isLoaded.value,
  hasUser: !!user.value,
  hasSession: !!session.value
})

// Track previous auth state to detect changes
let wasSignedIn = ref(false)

// Function to safely get the token
async function getAuthToken(): Promise<string | undefined> {
  try {
    if (session.value) {
      // Get the session token
      const token = await session.value.getToken()
      return token || undefined
    }
  } catch (error) {
    console.error('Error getting token:', error)
  }
  return undefined
}

// Log user information when the component is mounted
onMounted(async () => {
  console.log('🔐 DIRECT AUTH LOG: Component mounted')
  
  // If user is already signed in when component mounts, log it
  if (isSignedIn.value && isLoaded.value && user.value) {
    console.log('🔐 DIRECT AUTH LOG: User authenticated', {
      id: userId.value,
      name: user.value.fullName || user.value.username || 'Unknown'
    })
    
    // Try to get token
    const token = await getAuthToken()
    console.log('🔐 DIRECT AUTH LOG: Token retrieved', {
      tokenPreview: token ? `${token.substring(0, 10)}...` : 'No token'
    })
    
    // Log sign-in event
    logAuthEvent(
      'sign-in',
      userId.value || undefined,
      user.value.fullName || user.value.username || 'Unknown',
      token
    )
    
    wasSignedIn.value = true
  }
})

// Watch for sign-in state changes
watch(isSignedIn, async (newValue, oldValue) => {
  console.log('🔐 DIRECT AUTH LOG: Auth state changed', { 
    newValue, 
    wasSignedIn: wasSignedIn.value 
  })
  
  // Sign in detected
  if (newValue && !wasSignedIn.value && isLoaded.value && user.value) {
    console.log('🔐 DIRECT AUTH LOG: User signed in', {
      id: userId.value,
      name: user.value.fullName || user.value.username || 'Unknown'
    })
    
    const token = await getAuthToken()
    // Log sign-in event
    logAuthEvent(
      'sign-in',
      userId.value || undefined,
      user.value.fullName || user.value.username || 'Unknown',
      token
    )
    
    wasSignedIn.value = true
  } 
  // Sign out detected
  else if (!newValue && wasSignedIn.value) {
    console.log('🔐 DIRECT AUTH LOG: User signed out')
    
    // Log sign-out event (token likely not available at this point)
    logAuthEvent(
      'sign-out',
      userId.value || undefined,
      undefined,
      undefined
    )
    
    wasSignedIn.value = false
  }
})

// Add a simple click handler for sign-out button
onMounted(() => {
  document.addEventListener('click', (event) => {
    const target = event.target as HTMLElement
    if (target && target.textContent) {
      const text = target.textContent.toLowerCase()
      if (text.includes('sign out') || text.includes('logout')) {
        console.log('🔐 DIRECT AUTH LOG: Sign out button clicked')
      }
    }
  })
})
</script>

<template>
  <div class="relative">
    <!-- Top-right UserButton -->
    <div class="fixed top-4 right-4 z-50">
      <UserButton
        :appearance="{
          elements: {
            userButtonAvatarBox: 'size-10',
            userButtonTrigger: 'border border-gray-200 rounded-full p-1 hover:border-gray-300 bg-white shadow-md',
            userButtonPopoverCard: 'shadow-lg',
          },
        }"
      />
    </div>
    
    <main class="max-w-[75rem] w-full mx-auto">
      <div class="grid grid-cols-[1fr_20.5rem] gap-10 pb-10">
        <div>
          <header class="flex items-center justify-between w-full h-16 gap-4">
            <div class="flex gap-4">
              <ClerkLogo />
              <div aria-hidden class="w-px h-6 bg-[#C7C7C8]" />
              <NuxtLogo />
            </div>
            <div class="flex items-center gap-2">
              <OrganizationSwitcher
                :appearance="{
                  elements: {
                    organizationPreviewAvatarBox: 'size-6',
                  },
                }"
              />
            </div>
          </header>
          <UserDetails />
        </div>
        <div class="pt-[3.5rem]">
          <CodeSwitcher />
        </div>
      </div>
    </main>
    <LearnMore :cards="DASHBOARD_CARDS" />
    <Footer />
  </div>
</template>
