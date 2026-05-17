/**
 * Server (local) environment.
 * Angular on port 4201, NestJS API on port 3003 (same machine).
 * Proxy forwards /api/* → http://localhost:3003/api/*
 */
export const environment = {
  production: true,
  apiUrl: '/api',
  provisionOnlineBaseUrl: 'https://api-prod.connectsite.in',
  apiHost: 'https://connectsite.in/',
  vcardApiUrl: 'https://connectsite.in/' as string,
  authHeaderFormat: 'Bearer' as 'Bearer' | 'token',
  portalApiKey: '',
  whatsappNumber: '',
  upiId: '9884422526@okbizaxis',
  upiName: 'Sri Sankara Trading',
  upiPhone: '+91 98844 22526'
};
