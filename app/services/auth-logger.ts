// Simple auth logger service to track sign-in and sign-out events

/**
 * Logs an authentication event with user details and token
 * @param eventType The type of authentication event ('sign-in' or 'sign-out')
 * @param userId User ID if available
 * @param username Username if available
 * @param token JWT token if available
 */
export function logAuthEvent(
  eventType: 'sign-in' | 'sign-out',
  userId?: string,
  username?: string,
  token?: string
) {
  const timestamp = new Date().toISOString();
  
  // Create a structured log object
  const logData = {
    event: eventType,
    timestamp,
    userId,
    username,
    // Only include a preview of the token for security
    tokenPreview: token ? `${token.substring(0, 10)}...` : undefined
  };
  
  // Log to console
  console.log(`🔐 AUTH EVENT [${eventType.toUpperCase()}]:`, logData);
}
