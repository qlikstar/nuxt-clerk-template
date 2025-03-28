// Simple client-side plugin to log authentication events
export default defineNuxtPlugin({
  name: 'auth-logger',
  setup() {
    // Only run on client side
    if (!process.client) return;
    
    console.log('🔐 Auth Logger Plugin: Initialized');
    
    // Get Clerk hooks
    const { isSignedIn, userId } = useAuth();
    const { isLoaded, user } = useUser();
    const { session } = useSession();
    
    // Function to log auth events
    function logAuthEvent(eventType, details = {}) {
      const timestamp = new Date().toISOString();
      console.log(`🔐 AUTH EVENT [${eventType.toUpperCase()}]:`, {
        event: eventType,
        timestamp,
        ...details
      });
    }
    
    // Function to get token
    async function getToken() {
      try {
        if (session.value) {
          return await session.value.getToken();
        }
      } catch (error) {
        console.error('Error getting token:', error);
      }
      return undefined;
    }
    
    // Watch for sign-in state changes
    let previousSignedIn = isSignedIn.value;
    
    // Log initial state
    if (isSignedIn.value && isLoaded.value && user.value) {
      getToken().then(token => {
        logAuthEvent('initial-auth', {
          userId: userId.value,
          username: user.value?.fullName || user.value?.username || 'Unknown',
          tokenPreview: token ? `${token.substring(0, 10)}...` : undefined
        });
      });
    }
    
    // Watch for changes
    watch(isSignedIn, async (newValue) => {
      // Sign in detected
      if (newValue && !previousSignedIn && isLoaded.value && user.value) {
        const token = await getToken();
        logAuthEvent('sign-in', {
          userId: userId.value,
          username: user.value?.fullName || user.value?.username || 'Unknown',
          tokenPreview: token ? `${token.substring(0, 10)}...` : undefined
        });
      } 
      // Sign out detected
      else if (!newValue && previousSignedIn) {
        logAuthEvent('sign-out', {
          userId: userId.value
        });
      }
      
      previousSignedIn = newValue;
    });
    
    // Add click listener for sign-out button
    onMounted(() => {
      document.addEventListener('click', (event) => {
        const target = event.target;
        if (target && target.textContent) {
          const text = target.textContent.toLowerCase();
          if (text.includes('sign out') || text.includes('logout')) {
            logAuthEvent('sign-out-button-clicked');
          }
        }
      });
    });
  }
});
