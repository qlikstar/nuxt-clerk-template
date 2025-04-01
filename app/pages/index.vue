<script setup lang="ts">
import { CARDS } from '~/consts/cards'
</script>

<template>
  <main class="relative grid grid-rows-[auto,1fr,auto] min-h-screen">
    <div
      class="w-full bg-white max-w-[75rem] mx-auto flex flex-col border-l border-r border-[#F2F2F2] row-span-3"
    >
      <div
        class="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-[#F2F2F2]"
      />
      <NuxtImg
        alt="Device"
        class="size-64 bg-transparent absolute left-1/2 -translate-x-[23.75rem] -top-6 h-[51.375rem] object-contain w-[39.0625rem]"
        src="/images/logo.png"
      />

      <!-- Top navigation bar with Sign In button in the top right -->
      <div class="px-12 py-6 border-b border-[#F2F2F4] flex justify-between items-center">
        <div class="bg-[#F4F4F5] px-4 py-3 rounded-full inline-flex gap-4">
          <ClerkLogo />
          <div aria-hidden class="w-px h-6 bg-[#C7C7C8]" />
          <NuxtLogo />
        </div>
        
        <!-- Sign In button in the top right -->
        <SignedOut>
          <SignInButton class="px-4 py-2 rounded-full bg-[#131316] text-white text-sm font-semibold hover:bg-gray-800 transition-colors">
            Sign In
          </SignInButton>
        </SignedOut>
        
        <!-- Show Dashboard link and UserButton if signed in -->
        <SignedIn>
          <div class="flex items-center gap-4">
            <NuxtLink
              href="/dashboard"
              class="px-4 py-2 rounded-full bg-[#131316] text-white text-sm font-semibold hover:bg-gray-800 transition-colors"
            >
              Dashboard
            </NuxtLink>
            <UserButton
              :appearance="{
                elements: {
                  userButtonAvatarBox: 'size-9',
                  userButtonTrigger: 'border border-gray-200 rounded-full p-1 hover:border-gray-300 bg-white shadow-sm',
                  userButtonPopoverCard: 'shadow-lg',
                },
              }"
            />
          </div>
        </SignedIn>
      </div>

      <div class="p-10 border-b border-[#F2F2F2]">
        <h1 class="text-4xl font-bold tracking-tight text-[#131316] relative">
          Modern Web Development Stack
        </h1>

        <p
          class="text-[#5E5F6E] pt-3 pb-6 max-w-[30rem] text-[1.0625rem] relative"
        >
          A powerful tech stack combining Vue.js, Nuxt, and Clerk Authentication for building secure, scalable, and user-friendly web applications.
        </p>
        <div class="relative flex gap-3">
          <NuxtLink
            href="/#features"
            class="px-4 py-2 rounded-full text-[#131316] text-sm font-semibold bg-[#F7F7F8] hover:bg-gray-200 transition-colors"
          >
            Learn more
          </NuxtLink>
        </div>
      </div>

      <!-- Technology Stack Section -->
      <div class="p-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Vue.js Card -->
        <div class="bg-white p-6 rounded-xl shadow-sm border border-[#F2F2F4] hover:shadow-md transition-shadow">
          <div class="flex items-center mb-4">
            <div class="bg-green-100 p-3 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-green-600"><polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon><line x1="12" y1="22" x2="12" y2="15.5"></line><polyline points="22 8.5 12 15.5 2 8.5"></polyline><polyline points="2 15.5 12 8.5 22 15.5"></polyline><line x1="12" y1="2" x2="12" y2="8.5"></line></svg>
            </div>
            <h2 class="text-xl font-semibold ml-3 text-[#131316]">Vue.js</h2>
          </div>
          <p class="text-[#5E5F6E] mb-4">
            A progressive JavaScript framework for building user interfaces. Vue.js is designed to be incrementally adoptable and can easily scale between a library and a full-featured framework.
          </p>
          <ul class="space-y-2 text-[#5E5F6E]">
            <li class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-green-500 mr-2"><polyline points="20 6 9 17 4 12"></polyline></svg>
              Reactive and composable component system
            </li>
            <li class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-green-500 mr-2"><polyline points="20 6 9 17 4 12"></polyline></svg>
              Virtual DOM for efficient updates
            </li>
            <li class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-green-500 mr-2"><polyline points="20 6 9 17 4 12"></polyline></svg>
              Gentle learning curve and excellent documentation
            </li>
          </ul>
        </div>

        <!-- Nuxt Card -->
        <div class="bg-white p-6 rounded-xl shadow-sm border border-[#F2F2F4] hover:shadow-md transition-shadow">
          <div class="flex items-center mb-4">
            <div class="bg-green-100 p-3 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-green-600"><path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path><line x1="16" y1="8" x2="2" y2="22"></line><line x1="17.5" y1="15" x2="9" y2="15"></line></svg>
            </div>
            <h2 class="text-xl font-semibold ml-3 text-[#131316]">Nuxt</h2>
          </div>
          <p class="text-[#5E5F6E] mb-4">
            An intuitive Vue framework that offers server-side rendering, static site generation, and more out of the box. Nuxt simplifies the development of Vue applications with its convention-over-configuration approach.
          </p>
          <ul class="space-y-2 text-[#5E5F6E]">
            <li class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-green-500 mr-2"><polyline points="20 6 9 17 4 12"></polyline></svg>
              Automatic routing based on file structure
            </li>
            <li class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-green-500 mr-2"><polyline points="20 6 9 17 4 12"></polyline></svg>
              Server-side rendering for better SEO
            </li>
            <li class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-green-500 mr-2"><polyline points="20 6 9 17 4 12"></polyline></svg>
              Built-in state management and API fetching
            </li>
          </ul>
        </div>

        <!-- Clerk Authentication Card -->
        <div class="bg-white p-6 rounded-xl shadow-sm border border-[#F2F2F4] hover:shadow-md transition-shadow">
          <div class="flex items-center mb-4">
            <div class="bg-green-100 p-3 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-green-600"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
            </div>
            <h2 class="text-xl font-semibold ml-3 text-[#131316]">Clerk Authentication</h2>
          </div>
          <p class="text-[#5E5F6E] mb-4">
            A complete authentication and user management solution that provides secure, customizable sign-in flows. Clerk handles everything from sign-up to account management.
          </p>
          <ul class="space-y-2 text-[#5E5F6E]">
            <li class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-green-500 mr-2"><polyline points="20 6 9 17 4 12"></polyline></svg>
              Multi-factor authentication
            </li>
            <li class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-green-500 mr-2"><polyline points="20 6 9 17 4 12"></polyline></svg>
              Social login providers
            </li>
            <li class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-green-500 mr-2"><polyline points="20 6 9 17 4 12"></polyline></svg>
              User management dashboard
            </li>
          </ul>
        </div>
      </div>

      <!-- Getting Started Section -->
      <div class="p-10 border-t border-[#F2F2F2]">
        <h2 class="text-2xl font-bold tracking-tight text-[#131316] mb-6">Getting Started</h2>
        <div class="bg-[#F7F7F8] p-6 rounded-lg">
          <pre class="text-sm text-[#131316] overflow-x-auto"><code>
# Clone this repository
git clone https://github.com/your-username/nuxt-clerk-template.git

# Navigate to the project directory
cd nuxt-clerk-template

# Install dependencies
npm install

# Set up your Clerk environment variables
# Create a .env file with your Clerk keys

# Start the development server
npm run dev
          </code></pre>
        </div>
      </div>
    </div>
    <div
      class="absolute left-0 right-0 bottom-0 h-[18.75rem] bg-gradient-to-t from-white"
    />
  </main>
  <LearnMore :cards="CARDS" />
  <Footer />
</template>

<style>
  .gradient {
    position: relative;
    background-image: repeating-linear-gradient(
      to right,
      #63dffa,
      #6c47ff,
      #63dffa
    );
    z-index: 1;
    background-position-x: 0%;
    background-size: 200%;
    animation: gradimate 3s linear infinite;
    background-clip: text;
  }

  @keyframes gradimate {
    0% {
      background-position-x: 0%;
    }
    50% {
      background-position-x: 100%;
    }
    100% {
      background-position-x: 200%;
    }
  }
</style>
