<script setup lang="ts">
import { useUser, useSession, useOrganization } from '@clerk/vue'

const { user } = useUser()
const { session } = useSession()
const { organization } = useOrganization()

// Helper functions
function formatDate(date: Date | null | undefined) {
  if (!date) return 'N/A'
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}

function formatDateWithNumbers(date: Date | null | undefined): string {
  if (!date) return 'N/A'
  return date.toLocaleString('en-US', {
    month: 'numeric',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  })
}
</script>

<template>
  <div v-if="user && session" class="p-16 rounded-lg border border-[#EDEDED] bg-[#F1F1F2] background relative">
    <div class="p-8 rounded-xl bg-white shadow-[0_5px_15px_rgba(0,0,0,0.08),0_15px_35px_-5px_rgba(25,28,33,0.2)] ring-1 ring-gray-950/5 max-w-[25rem]">
      <div class="flex flex-col items-center gap-2 mb-6">
        <div class="w-full relative flex justify-center">
          <img :src="user.imageUrl" class="size-20 rounded-full" />
          <div class="absolute w-fit flex items-center gap-5 top-1/2 -translate-x-2.5 -translate-y-1/2 left-full">
            <div class="relative">
              <div class="h-px bg-[#BFBFC4] w-[6.5rem]" />
              <div class="size-1 bg-[#BFBFC4] rotate-45 absolute right-0 top-1/2 -translate-y-1/2" />
            </div>
            <div class="font-mono text-xs bg-black px-1.5 py-1 rounded-md text-white">
              user.imageUrl
            </div>
          </div>
        </div>
        
        <template v-if="user.firstName && user.lastName">
          <h1 class="text-[1.0625rem] font-semibold relative w-full text-center">
            {{ user.firstName }} {{ user.lastName }}
            <div class="absolute w-fit flex items-center gap-5 top-1/2 -translate-x-2.5 -translate-y-1/2 left-full">
              <div class="relative">
                <div class="h-px bg-[#BFBFC4] w-[6.5rem]" />
                <div class="size-1 bg-[#BFBFC4] rotate-45 absolute right-0 top-1/2 -translate-y-1/2" />
              </div>
              <div class="font-mono text-xs bg-black px-1.5 py-1 rounded-md text-white">
                user.firstName
              </div>
              <div class="font-mono text-xs bg-black px-1.5 py-1 rounded-md text-white -translate-x-3">
                user.lastName
              </div>
            </div>
          </h1>
        </template>
        <div v-else class="h-4" />
      </div>

      <div class="px-2.5 bg-[#FAFAFB] rounded-lg divide-y divide-[#EEEEF0]">
        <!-- Row component for Email -->
        <div class="h-[2.125rem] grid grid-cols-2 items-center relative">
          <span class="text-xs font-semibold block flex-shrink-0">Email</span>
          <span class="text-xs text-[#7D7D7E] font-mono block relative">
            <span class="block truncate w-full">{{ user.emailAddresses && user.emailAddresses.length > 0 ? user.emailAddresses[0].emailAddress : 'N/A' }}</span>
            <!-- PointerC component -->
            <div class="absolute w-fit flex items-center gap-5 top-1/2 -translate-y-1/2 left-full">
              <div class="relative">
                <div class="h-px bg-[#BFBFC4] w-[6.5rem]" />
                <div class="size-1 bg-[#BFBFC4] rotate-45 absolute right-0 top-1/2 -translate-y-1/2" />
              </div>
              <div class="font-mono text-xs bg-black px-1.5 py-1 rounded-md text-white">
                user.emailAddresses[0].emailAddress
              </div>
            </div>
          </span>
        </div>

        <!-- Row component for Last signed in -->
        <div class="h-[2.125rem] grid grid-cols-2 items-center relative">
          <span class="text-xs font-semibold block flex-shrink-0">Last signed in</span>
          <span class="text-xs text-[#7D7D7E] font-mono block relative">
            <span class="block truncate w-full">{{ formatDate(user.lastSignInAt) }}</span>
            <!-- PointerC component -->
            <div class="absolute w-fit flex items-center gap-5 top-1/2 -translate-y-1/2 left-full">
              <div class="relative">
                <div class="h-px bg-[#BFBFC4] w-[6.5rem]" />
                <div class="size-1 bg-[#BFBFC4] rotate-45 absolute right-0 top-1/2 -translate-y-1/2" />
              </div>
              <div class="font-mono text-xs bg-black px-1.5 py-1 rounded-md text-white">
                user.lastSignInAt
              </div>
            </div>
          </span>
        </div>

        <!-- Row component for Joined on -->
        <div class="h-[2.125rem] grid grid-cols-2 items-center relative">
          <span class="text-xs font-semibold block flex-shrink-0">Joined on</span>
          <span class="text-xs text-[#7D7D7E] font-mono block relative">
            <span class="block truncate w-full">{{ formatDate(user.createdAt) }}</span>
            <!-- PointerC component -->
            <div class="absolute w-fit flex items-center gap-5 top-1/2 -translate-y-1/2 left-full">
              <div class="relative">
                <div class="h-px bg-[#BFBFC4] w-[6.5rem]" />
                <div class="size-1 bg-[#BFBFC4] rotate-45 absolute right-0 top-1/2 -translate-y-1/2" />
              </div>
              <div class="font-mono text-xs bg-black px-1.5 py-1 rounded-md text-white">
                user.createdAt
              </div>
            </div>
          </span>
        </div>

        <!-- Row component for User ID -->
        <div class="h-[2.125rem] grid grid-cols-2 items-center relative">
          <span class="text-xs font-semibold block flex-shrink-0">User ID</span>
          <span class="text-xs text-[#7D7D7E] font-mono block relative">
            <span class="block truncate w-full">{{ user.id }}</span>
            <!-- PointerC component -->
            <div class="absolute w-fit flex items-center gap-5 top-1/2 -translate-y-1/2 left-full">
              <div class="relative">
                <div class="h-px bg-[#BFBFC4] w-[6.5rem]" />
                <div class="size-1 bg-[#BFBFC4] rotate-45 absolute right-0 top-1/2 -translate-y-1/2" />
              </div>
              <div class="font-mono text-xs bg-black px-1.5 py-1 rounded-md text-white">
                user.user.id
              </div>
            </div>
          </span>
        </div>
      </div>

      <h2 class="mt-6 mb-4 text-[0.9375rem] font-semibold">
        Session details
      </h2>
      <div class="px-2.5 bg-[#FAFAFB] rounded-lg divide-y divide-[#EEEEF0]">
        <!-- Row component for Session ID -->
        <div class="h-[2.125rem] grid grid-cols-2 items-center relative">
          <span class="text-xs font-semibold block flex-shrink-0">Session ID</span>
          <span class="text-xs text-[#7D7D7E] font-mono block relative">
            <span class="block truncate w-full">{{ session.id }}</span>
            <!-- PointerC component -->
            <div class="absolute w-fit flex items-center gap-5 top-1/2 -translate-y-1/2 left-full">
              <div class="relative">
                <div class="h-px bg-[#BFBFC4] w-[6.5rem]" />
                <div class="size-1 bg-[#BFBFC4] rotate-45 absolute right-0 top-1/2 -translate-y-1/2" />
              </div>
              <div class="font-mono text-xs bg-black px-1.5 py-1 rounded-md text-white">
                session.id
              </div>
            </div>
          </span>
        </div>

        <!-- Row component for Status -->
        <div class="h-[2.125rem] grid grid-cols-2 items-center relative">
          <span class="text-xs font-semibold block flex-shrink-0">Status</span>
          <span class="text-xs text-[#7D7D7E] font-mono block relative">
            <span class="block truncate w-full">{{ session.status }}</span>
            <!-- PointerC component -->
            <div class="absolute w-fit flex items-center gap-5 top-1/2 -translate-y-1/2 left-full">
              <div class="relative">
                <div class="h-px bg-[#BFBFC4] w-[6.5rem]" />
                <div class="size-1 bg-[#BFBFC4] rotate-45 absolute right-0 top-1/2 -translate-y-1/2" />
              </div>
              <div class="font-mono text-xs bg-black px-1.5 py-1 rounded-md text-white">
                session.status
              </div>
            </div>
          </span>
        </div>

        <!-- Row component for Last active -->
        <div class="h-[2.125rem] grid grid-cols-2 items-center relative">
          <span class="text-xs font-semibold block flex-shrink-0">Last active</span>
          <span class="text-xs text-[#7D7D7E] font-mono block relative">
            <span class="block truncate w-full">{{ formatDateWithNumbers(session.lastActiveAt) }}</span>
            <!-- PointerC component -->
            <div class="absolute w-fit flex items-center gap-5 top-1/2 -translate-y-1/2 left-full">
              <div class="relative">
                <div class="h-px bg-[#BFBFC4] w-[6.5rem]" />
                <div class="size-1 bg-[#BFBFC4] rotate-45 absolute right-0 top-1/2 -translate-y-1/2" />
              </div>
              <div class="font-mono text-xs bg-black px-1.5 py-1 rounded-md text-white">
                session.lastActiveAt
              </div>
            </div>
          </span>
        </div>

        <!-- Row component for Session expiration -->
        <div class="h-[2.125rem] grid grid-cols-2 items-center relative">
          <span class="text-xs font-semibold block flex-shrink-0">Session expiration</span>
          <span class="text-xs text-[#7D7D7E] font-mono block relative">
            <span class="block truncate w-full">{{ formatDateWithNumbers(session.expireAt) }}</span>
            <!-- PointerC component -->
            <div class="absolute w-fit flex items-center gap-5 top-1/2 -translate-y-1/2 left-full">
              <div class="relative">
                <div class="h-px bg-[#BFBFC4] w-[6.5rem]" />
                <div class="size-1 bg-[#BFBFC4] rotate-45 absolute right-0 top-1/2 -translate-y-1/2" />
              </div>
              <div class="font-mono text-xs bg-black px-1.5 py-1 rounded-md text-white">
                session.expireAt
              </div>
            </div>
          </span>
        </div>
      </div>

      <!-- Organization details section -->
      <template v-if="organization">
        <h2 class="mt-6 mb-4 text-[0.9375rem] font-semibold">
          Organization detail
        </h2>
        <div class="px-2.5 bg-[#FAFAFB] rounded-lg divide-y divide-[#EEEEF0]">
          <!-- Row component for Organization ID -->
          <div class="h-[2.125rem] grid grid-cols-2 items-center relative">
            <span class="text-xs font-semibold block flex-shrink-0">Organization ID</span>
            <span class="text-xs text-[#7D7D7E] font-mono block relative">
              <span class="block truncate w-full">{{ organization.id }}</span>
              <!-- PointerC component -->
              <div class="absolute w-fit flex items-center gap-5 top-1/2 -translate-y-1/2 left-full">
                <div class="relative">
                  <div class="h-px bg-[#BFBFC4] w-[6.5rem]" />
                  <div class="size-1 bg-[#BFBFC4] rotate-45 absolute right-0 top-1/2 -translate-y-1/2" />
                </div>
                <div class="font-mono text-xs bg-black px-1.5 py-1 rounded-md text-white">
                  organization.id
                </div>
              </div>
            </span>
          </div>

          <!-- Row component for Name -->
          <div class="h-[2.125rem] grid grid-cols-2 items-center relative">
            <span class="text-xs font-semibold block flex-shrink-0">Name</span>
            <span class="text-xs text-[#7D7D7E] font-mono block relative">
              <span class="block truncate w-full">{{ organization.name }}</span>
              <!-- PointerC component -->
              <div class="absolute w-fit flex items-center gap-5 top-1/2 -translate-y-1/2 left-full">
                <div class="relative">
                  <div class="h-px bg-[#BFBFC4] w-[6.5rem]" />
                  <div class="size-1 bg-[#BFBFC4] rotate-45 absolute right-0 top-1/2 -translate-y-1/2" />
                </div>
                <div class="font-mono text-xs bg-black px-1.5 py-1 rounded-md text-white">
                  organization.name
                </div>
              </div>
            </span>
          </div>

          <!-- Row component for Members -->
          <div class="h-[2.125rem] grid grid-cols-2 items-center relative">
            <span class="text-xs font-semibold block flex-shrink-0">Members</span>
            <span class="text-xs text-[#7D7D7E] font-mono block relative">
              <span class="block truncate w-full">{{ organization.membersCount }}</span>
              <!-- PointerC component -->
              <div class="absolute w-fit flex items-center gap-5 top-1/2 -translate-y-1/2 left-full">
                <div class="relative">
                  <div class="h-px bg-[#BFBFC4] w-[6.5rem]" />
                  <div class="size-1 bg-[#BFBFC4] rotate-45 absolute right-0 top-1/2 -translate-y-1/2" />
                </div>
                <div class="font-mono text-xs bg-black px-1.5 py-1 rounded-md text-white">
                  organization.membersCount
                </div>
              </div>
            </span>
          </div>

          <!-- Row component for Pending invitations -->
          <div class="h-[2.125rem] grid grid-cols-2 items-center relative">
            <span class="text-xs font-semibold block flex-shrink-0">Pending invitations</span>
            <span class="text-xs text-[#7D7D7E] font-mono block relative">
              <span class="block truncate w-full">{{ organization.pendingInvitationsCount }}</span>
              <!-- PointerC component -->
              <div class="absolute w-fit flex items-center gap-5 top-1/2 -translate-y-1/2 left-full">
                <div class="relative">
                  <div class="h-px bg-[#BFBFC4] w-[6.5rem]" />
                  <div class="size-1 bg-[#BFBFC4] rotate-45 absolute right-0 top-1/2 -translate-y-1/2" />
                </div>
                <div class="font-mono text-xs bg-black px-1.5 py-1 rounded-md text-white">
                  organization.pendingInvitationsCount
                </div>
              </div>
            </span>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<style scoped>
.background {
  overflow: hidden;
  background: #f8f8f8;
  background-image: repeating-linear-gradient(
      0deg,
      transparent,
      transparent 11px,
      #f2f2f2 11px,
      #f2f2f2 12px
    ),
    repeating-linear-gradient(
      90deg,
      transparent,
      transparent 11px,
      #f2f2f2 11px,
      #f2f2f2 12px
    );
}
</style>
