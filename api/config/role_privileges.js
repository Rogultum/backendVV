module.exports = {
  privGroups: [
    {
      id: "USERS",
      name: "User Permissions",
    },
    {
      id: "ROLES",
      name: "Role Permissions",
    },
    {
      id: "CATEGORIES",
      name: "Category Permissions",
    },
    {
      id: "AUDITLOGS",
      name: "AuditLogs Permissions",
    },
  ],

  priviliges: [
    {
      key: "user_view",
      name: "User View",
      group: "USERS",
      description: "User View",
    },
    {
      key: "user_add",
      name: "User Add",
      group: "USERS",
      description: "User Add",
    },
    {
      key: "user_update",
      name: "User update",
      group: "USERS",
      description: "User update",
    },
    {
      key: "user_delete",
      name: "User delete",
      group: "USERS",
      description: "User delete",
    },

    {
      key: "role_view",
      name: "role View",
      group: "ROLES",
      description: "Role View",
    },
    {
      key: "role_add",
      name: "Role Add",
      group: "ROLES",
      description: "Role Add",
    },
    {
      key: "role_update",
      name: "Role update",
      group: "ROLES",
      description: "User update",
    },
    {
      key: "role_delete",
      name: "role delete",
      group: "ROLES",
      description: "Role delete",
    },

    {
      key: "category_view",
      name: "category View",
      group: "CATEGORIES",
      description: "category View",
    },
    {
      key: "category_add",
      name: "category Add",
      group: "CATEGORIES",
      description: "category Add",
    },
    {
      key: "category_update",
      name: "category update",
      group: "CATEGORIES",
      description: "category update",
    },
    {
      key: "category_delete",
      name: "category delete",
      group: "CATEGORIES",
      description: "User delete",
    },

    {
      key: "category_view",
      name: "category View",
      group: "CATEGORIES",
      description: "category View",
    },
    {
      key: "category_add",
      name: "category Add",
      group: "CATEGORIES",
      description: "category Add",
    },
    {
      key: "category_update",
      name: "category update",
      group: "CATEGORIES",
      description: "category update",
    },
    {
      key: "category_delete",
      name: "category delete",
      group: "CATEGORIES",
      description: "User delete",
    },

    {
      key: "auditlogs_view",
      name: "AuditLogs View",
      group: "AUDITLOG",
      description: "AuditLogs View",
    },
  ],
};
