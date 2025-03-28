<script setup lang="ts">
import { DASHBOARD_CARDS } from '~/consts/cards'
import { OrganizationSwitcher, UserButton } from '@clerk/vue'
import ClerkLogo from '~/components/ClerkLogo.vue'
import NuxtLogo from '~/components/NuxtLogo.vue'
import UserDetails from '~/components/UserDetails.vue'
import CodeSwitcher from '~/components/CodeSwitcher.vue'
import LearnMore from '~/components/LearnMore.vue'
import Footer from '~/components/Footer.vue'
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
