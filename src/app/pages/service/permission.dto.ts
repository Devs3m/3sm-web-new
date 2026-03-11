/**
 * Unified permission shape for the frontend.
 * Every permission the user has is returned in this shape.
 * key is the unique id (permissioncode with : replaced by .).
 * module is derived from the first part of the code (e.g. account → "Account").
 */
export interface PermissionDto {
  /** Unique id; use for checks (e.g. "account.create") */
  key: string;
  /** Grouping for menus, sections (e.g. "Account") */
  module: string;
  /** Label in UI (e.g. "Create account") */
  name: string;
  /** User has this permission */
  allowed: boolean;
  /** Optional: view / create / edit / delete */
  action?: string;
}

/**
 * Single endpoint response – GET /role/user/permissions (unified format).
 * Example for Administrator role:
 * {
 *   "success": true,
 *   "userId": 21,
 *   "permissions": [
 *     { "key": "account.view", "module": "Account", "name": "View account list", "allowed": true, "action": "view" },
 *     { "key": "product.view", "module": "Product", "name": "View products", "allowed": true, "action": "view" },
 *     ...
 *   ],
 *   "byKey": { "account.view": true, "product.view": true, "user.view": true, ... },
 *   "count": 7,
 *   "roleName": "Administrator"  // optional; fallback from user if omitted
 * }
 */
export interface UserPermissionsResponse {
  success: boolean;
  userId: number;
  permissions: PermissionDto[];
  byKey: Record<string, boolean>;
  count?: number;
  roleName?: string;
}

/**
 * Normalize legacy permissioncode to key format (e.g. "account:create" → "account.create").
 */
export function permissionCodeToKey(code: string | undefined): string {
  if (!code || typeof code !== 'string') return '';
  return code.trim().toLowerCase().replace(/:/g, '.');
}

/**
 * Build key from resource/action/field (legacy shape).
 */
export function resourceActionToKey(resource: string, action: string, field?: string | null): string {
  const r = (resource || '').trim().toLowerCase();
  const a = (action || '').trim().toLowerCase();
  if (!r || !a) return '';
  return field ? `${r}.${a}.${String(field).trim().toLowerCase()}` : `${r}.${a}`;
}

/**
 * Derive key from a display name like "Account Create" or "account:create".
 */
function keyFromName(name: string | undefined): string {
  if (!name || typeof name !== 'string') return '';
  return name
    .trim()
    .toLowerCase()
    .replace(/\s*[:\-–—]\s*/g, '.')
    .replace(/\s+/g, '.')
    .replace(/[^a-z0-9._]/g, '');
}

/**
 * Normalize any permission-like object to PermissionDto.
 * Handles unified shape (key, module, name), legacy (resource, action, permissioncode), and name-only (permissionname).
 */
export function toPermissionDto(p: any): PermissionDto | null {
  if (!p) return null;
  const allowed = p.allowed !== false;
  if (p.key && typeof p.key === 'string') {
    return {
      key: p.key.trim().toLowerCase(),
      module: typeof p.module === 'string' ? p.module : (p.module || ''),
      name: typeof p.name === 'string' ? p.name : (p.name || p.key),
      allowed,
      action: p.action
    };
  }
  const resource = p.resource ?? p.resourceName ?? '';
  const action = p.action ?? '';
  if (resource && action) {
    const key = resourceActionToKey(resource, action, p.field);
    if (key) {
      const moduleName = String(resource).trim();
      return {
        key,
        module: moduleName ? moduleName.charAt(0).toUpperCase() + moduleName.slice(1).toLowerCase() : '',
        name: p.name ?? p.permissionname ?? `${resource} ${action}`,
        allowed,
        action: String(action).toLowerCase()
      };
    }
  }
  const code = p.permissioncode ?? p.permissionCode ?? p.permission_code;
  if (code) {
    const key = permissionCodeToKey(code);
    if (key) {
      const moduleName = key.split('.')[0];
      return {
        key,
        module: moduleName ? moduleName.charAt(0).toUpperCase() + moduleName.slice(1) : '',
        name: p.name ?? p.permissionname ?? key,
        allowed,
        action: action || undefined
      };
    }
  }
  const name = p.name ?? p.permissionname ?? p.permissionName;
  if (name && typeof name === 'string') {
    const key = keyFromName(name);
    if (key) {
      const parts = key.split('.');
      const moduleName = parts[0] ? parts[0].charAt(0).toUpperCase() + parts[0].slice(1) : '';
      return {
        key,
        module: moduleName,
        name: String(name).trim(),
        allowed,
        action: parts[1] || undefined
      };
    }
  }
  return null;
}

/**
 * Build byKey map from permissions list (only allowed: true).
 * Keys are stored in lowercase for case-insensitive checks.
 */
export function buildByKey(permissions: PermissionDto[]): Record<string, boolean> {
  const byKey: Record<string, boolean> = {};
  if (!Array.isArray(permissions)) return byKey;
  permissions.forEach(p => {
    if (p.key && p.allowed) byKey[p.key.trim().toLowerCase()] = true;
  });
  return byKey;
}

/**
 * Normalize byKey from API so all keys are lowercase (backend may send "Product.view").
 */
export function normalizeByKeyToLower(byKey: Record<string, boolean>): Record<string, boolean> {
  if (!byKey || typeof byKey !== 'object') return {};
  const out: Record<string, boolean> = {};
  Object.keys(byKey).forEach(k => {
    if (byKey[k]) out[k.trim().toLowerCase()] = true;
  });
  return out;
}
