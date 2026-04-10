// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  /**apiUrl: 'https://api.connectsite.in',*/
   apiUrl: 'http://localhost:3002',
  /**
   * Online API base URL (no trailing slash) shown on /setup for download links and curl.
   * Leave empty to type it on the page; set when building an “online admin” UI.
   */
  provisionOnlineBaseUrl: '' as string,
  apiHost: 'https://connectsite.in/',
  /** Base URL for V Card API (VCardMaster). Falls back to apiHost if not set. */
  vcardApiUrl: 'https://connectsite.in/' as string,
  authHeaderFormat: 'Bearer' as 'Bearer' | 'token'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
