/**
 * Offline / local installer build.
 * All API calls use relative URLs so they hit the bundled NestJS server
 * on the same origin (http://localhost:3000/api/*).
 * Features that require external connectivity (vCard, digiCard) will not work offline.
 */
export const environment = {
  production: true,
  apiUrl: '/api',
  provisionOnlineBaseUrl: '/api',
  apiHost: '',
  vcardApiUrl: '' as string,
  authHeaderFormat: 'Bearer' as 'Bearer' | 'token',
};
