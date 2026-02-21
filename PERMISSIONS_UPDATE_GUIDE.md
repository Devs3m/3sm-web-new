# How to Update Permissions for Existing Users

## Overview
In this system, permissions are managed at the **Role level**, not directly at the User level. Users inherit permissions from their assigned role. This means:

- **To update permissions for existing users**, you need to update the permissions of the **role** they belong to
- **OR** change the user's role assignment to a different role

## Method 1: Update Role Permissions (Affects All Users with That Role)

This is the recommended method when you want to update permissions for multiple users who share the same role.

### Steps:

1. **Navigate to User Role Management**
   - Go to the **User Role** page in your application
   - You'll see a list of all roles

2. **Configure Permissions for a Role**
   - Find the role you want to update in the data grid
   - Click the **Settings icon** (⚙️) in the Actions column for that role
   - This opens the "Configure Permissions" panel

3. **Select/Deselect Permissions**
   - You'll see permissions organized by resource (Account, Instance, User, User Role, etc.)
   - Check/uncheck the permissions you want to grant/revoke
   - Use "Select All" or "Deselect All" buttons for quick selection
   - Available permissions include:
     - **View** - Read/view access
     - **Create** - Add new records
     - **Update** - Edit existing records
     - **Delete** - Remove records
     - **Export** - Export data (for some resources)

4. **Save Permissions**
   - Click the **"Save Permissions"** button
   - Permissions are saved to the database
   - The permission cache is cleared and reloaded

5. **Users Will See Changes**
   - All users with that role will immediately have the updated permissions
   - Users may need to refresh the page or log out and log back in to see changes

### Example:
If you want to give all "Manager" role users the ability to add and edit accounts:
1. Go to User Role page
2. Click settings icon for "Manager" role
3. Check "Account Create" and "Account Update" permissions
4. Click "Save Permissions"
5. All users with "Manager" role can now add and edit accounts

---

## Method 2: Change User's Role Assignment

This method is useful when you want to give a specific user different permissions without affecting other users.

### Steps:

1. **Navigate to User Management**
   - Go to the **User** page in your application

2. **Edit User**
   - Find the user you want to update in the data grid
   - Click the **Edit icon** (✏️) in the Actions column

3. **Update User Role**
   - In the edit form, find the "User Role" or "User Role ID" field
   - Change it to the desired role ID or role name
   - Save the user

4. **User Gets New Permissions**
   - The user will inherit all permissions from the new role
   - User may need to log out and log back in to see changes

### Example:
If you want to promote a user to "Super Admin":
1. Go to User page
2. Edit the user
3. Change their "User Role ID" to the Super Admin role ID
4. Save
5. User now has Super Admin permissions

---

## Method 3: Create a New Role with Specific Permissions

If you need to give specific permissions to a group of users without affecting existing roles:

1. **Create New Role**
   - Go to User Role page
   - Click the "+" button to add a new role
   - Enter role name (e.g., "Account Manager")
   - Set Active status
   - Save

2. **Configure Permissions**
   - Click settings icon for the new role
   - Select the permissions you want
   - Save permissions

3. **Assign Users to New Role**
   - Go to User page
   - Edit each user you want to assign
   - Change their "User Role ID" to the new role ID
   - Save

---

## Important Notes

### Super Admin Role
- Users with role name "Super Admin" (case-insensitive) automatically get access to:
  - `account:create` (Add Account)
  - `account:update` (Edit Account)
- This works even if the permissions table is empty
- The super admin check is based on the role name from the database

### Permission Caching
- Permissions are cached for performance
- After updating role permissions, the cache is automatically cleared
- If users don't see changes immediately, they may need to:
  - Refresh the page
  - Log out and log back in
  - Clear browser cache

### API Endpoints Used
- **Get Role Permissions**: `GET /api/role/{roleId}/permissions`
- **Save Role Permissions**: `POST /api/role/{roleId}/permissions`
- **Get Role Details**: `GET /api/userrole/{roleId}` or `GET /api/userrole/list`
- **Update User**: `PUT /api/user/userupdate` (to change user's role)

### Database Tables
- **userrole** - Stores role information (role name, active status)
- **permission** - Stores available permissions (if used)
- **rolepermission** - Links roles to permissions (if used)
- **user** - Stores user information and their `userroleid` assignment

---

## Troubleshooting

### Permissions Not Updating
1. Check browser console for errors
2. Verify the API endpoint is working
3. Ensure the role ID is correct
4. Check if permissions were saved successfully (check database)

### User Still Has Old Permissions
1. Ask user to log out and log back in
2. Clear browser cache
3. Verify user's role assignment is correct
4. Check if role permissions were saved correctly

### Super Admin Not Working
1. Verify role name in database is exactly "Super Admin" (case-insensitive)
2. Check console logs for role name being fetched
3. Ensure role name is being loaded from database correctly

---

## Quick Reference

| Action | Location | Steps |
|--------|----------|-------|
| Update role permissions | User Role page → Settings icon | Configure → Save |
| Change user's role | User page → Edit icon | Update User Role ID → Save |
| Create new role | User Role page → + button | Add role → Configure permissions |
| Check user's current role | User page → View user details | Look at `userroleid` field |
