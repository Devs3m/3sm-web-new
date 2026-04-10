/**
 * Bundled offline Docker installer: browser talks to API on host port 3002, UI served from nginx :8080.
 */
export const environment = {
  production: true,
  apiUrl: 'http://localhost:3002',
  provisionOnlineBaseUrl: '' as string,
  apiHost: 'http://localhost:8080/',
  vcardApiUrl: 'http://localhost:8080/' as string,
  authHeaderFormat: 'Bearer' as 'Bearer' | 'token',
};
