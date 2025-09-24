import type { Schema, Attribute } from '@strapi/strapi';

export interface AdminPermission extends Schema.CollectionType {
  collectionName: 'admin_permissions';
  info: {
    name: 'Permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    actionParameters: Attribute.JSON & Attribute.DefaultTo<{}>;
    subject: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    properties: Attribute.JSON & Attribute.DefaultTo<{}>;
    conditions: Attribute.JSON & Attribute.DefaultTo<[]>;
    role: Attribute.Relation<'admin::permission', 'manyToOne', 'admin::role'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminUser extends Schema.CollectionType {
  collectionName: 'admin_users';
  info: {
    name: 'User';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    firstname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    username: Attribute.String;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.Private &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    registrationToken: Attribute.String & Attribute.Private;
    isActive: Attribute.Boolean &
      Attribute.Private &
      Attribute.DefaultTo<false>;
    roles: Attribute.Relation<'admin::user', 'manyToMany', 'admin::role'> &
      Attribute.Private;
    blocked: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>;
    preferedLanguage: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminRole extends Schema.CollectionType {
  collectionName: 'admin_roles';
  info: {
    name: 'Role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    code: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String;
    users: Attribute.Relation<'admin::role', 'manyToMany', 'admin::user'>;
    permissions: Attribute.Relation<
      'admin::role',
      'oneToMany',
      'admin::permission'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminApiToken extends Schema.CollectionType {
  collectionName: 'strapi_api_tokens';
  info: {
    name: 'Api Token';
    singularName: 'api-token';
    pluralName: 'api-tokens';
    displayName: 'Api Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    type: Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Attribute.Required &
      Attribute.DefaultTo<'read-only'>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::api-token',
      'oneToMany',
      'admin::api-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminApiTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_api_token_permissions';
  info: {
    name: 'API Token Permission';
    description: '';
    singularName: 'api-token-permission';
    pluralName: 'api-token-permissions';
    displayName: 'API Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::api-token-permission',
      'manyToOne',
      'admin::api-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferToken extends Schema.CollectionType {
  collectionName: 'strapi_transfer_tokens';
  info: {
    name: 'Transfer Token';
    singularName: 'transfer-token';
    pluralName: 'transfer-tokens';
    displayName: 'Transfer Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::transfer-token',
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_transfer_token_permissions';
  info: {
    name: 'Transfer Token Permission';
    description: '';
    singularName: 'transfer-token-permission';
    pluralName: 'transfer-token-permissions';
    displayName: 'Transfer Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::transfer-token-permission',
      'manyToOne',
      'admin::transfer-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFile extends Schema.CollectionType {
  collectionName: 'files';
  info: {
    singularName: 'file';
    pluralName: 'files';
    displayName: 'File';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    alternativeText: Attribute.String;
    caption: Attribute.String;
    width: Attribute.Integer;
    height: Attribute.Integer;
    formats: Attribute.JSON;
    hash: Attribute.String & Attribute.Required;
    ext: Attribute.String;
    mime: Attribute.String & Attribute.Required;
    size: Attribute.Decimal & Attribute.Required;
    url: Attribute.String & Attribute.Required;
    previewUrl: Attribute.String;
    provider: Attribute.String & Attribute.Required;
    provider_metadata: Attribute.JSON;
    related: Attribute.Relation<'plugin::upload.file', 'morphToMany'>;
    folder: Attribute.Relation<
      'plugin::upload.file',
      'manyToOne',
      'plugin::upload.folder'
    > &
      Attribute.Private;
    folderPath: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFolder extends Schema.CollectionType {
  collectionName: 'upload_folders';
  info: {
    singularName: 'folder';
    pluralName: 'folders';
    displayName: 'Folder';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    pathId: Attribute.Integer & Attribute.Required & Attribute.Unique;
    parent: Attribute.Relation<
      'plugin::upload.folder',
      'manyToOne',
      'plugin::upload.folder'
    >;
    children: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.folder'
    >;
    files: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.file'
    >;
    path: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginContentReleasesRelease extends Schema.CollectionType {
  collectionName: 'strapi_releases';
  info: {
    singularName: 'release';
    pluralName: 'releases';
    displayName: 'Release';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    releasedAt: Attribute.DateTime;
    scheduledAt: Attribute.DateTime;
    timezone: Attribute.String;
    status: Attribute.Enumeration<
      ['ready', 'blocked', 'failed', 'done', 'empty']
    > &
      Attribute.Required;
    actions: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToMany',
      'plugin::content-releases.release-action'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginContentReleasesReleaseAction
  extends Schema.CollectionType {
  collectionName: 'strapi_release_actions';
  info: {
    singularName: 'release-action';
    pluralName: 'release-actions';
    displayName: 'Release Action';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    type: Attribute.Enumeration<['publish', 'unpublish']> & Attribute.Required;
    entry: Attribute.Relation<
      'plugin::content-releases.release-action',
      'morphToOne'
    >;
    contentType: Attribute.String & Attribute.Required;
    locale: Attribute.String;
    release: Attribute.Relation<
      'plugin::content-releases.release-action',
      'manyToOne',
      'plugin::content-releases.release'
    >;
    isEntryValid: Attribute.Boolean;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginI18NLocale extends Schema.CollectionType {
  collectionName: 'i18n_locale';
  info: {
    singularName: 'locale';
    pluralName: 'locales';
    collectionName: 'locales';
    displayName: 'Locale';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.SetMinMax<
        {
          min: 1;
          max: 50;
        },
        number
      >;
    code: Attribute.String & Attribute.Unique;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsPermission
  extends Schema.CollectionType {
  collectionName: 'up_permissions';
  info: {
    name: 'permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String & Attribute.Required;
    role: Attribute.Relation<
      'plugin::users-permissions.permission',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsRole extends Schema.CollectionType {
  collectionName: 'up_roles';
  info: {
    name: 'role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    description: Attribute.String;
    type: Attribute.String & Attribute.Unique;
    permissions: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    users: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.user'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsUser extends Schema.CollectionType {
  collectionName: 'up_users';
  info: {
    name: 'user';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  options: {
    draftAndPublish: false;
    timestamps: true;
  };
  attributes: {
    username: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Attribute.String;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    confirmationToken: Attribute.String & Attribute.Private;
    confirmed: Attribute.Boolean & Attribute.DefaultTo<false>;
    blocked: Attribute.Boolean & Attribute.DefaultTo<false>;
    role: Attribute.Relation<
      'plugin::users-permissions.user',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginNavigationAudience extends Schema.CollectionType {
  collectionName: 'audience';
  info: {
    singularName: 'audience';
    pluralName: 'audiences';
    displayName: 'Audience';
    name: 'audience';
  };
  options: {
    increments: true;
    comment: 'Audience';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    key: Attribute.UID<'plugin::navigation.audience', 'name'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::navigation.audience',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::navigation.audience',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginNavigationNavigation extends Schema.CollectionType {
  collectionName: 'navigations';
  info: {
    singularName: 'navigation';
    pluralName: 'navigations';
    displayName: 'Navigation';
    name: 'navigation';
  };
  options: {
    increments: true;
    comment: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.Text & Attribute.Required;
    slug: Attribute.UID & Attribute.Required;
    visible: Attribute.Boolean & Attribute.DefaultTo<false>;
    items: Attribute.Relation<
      'plugin::navigation.navigation',
      'oneToMany',
      'plugin::navigation.navigation-item'
    >;
    localizations: Attribute.Relation<
      'plugin::navigation.navigation',
      'oneToMany',
      'plugin::navigation.navigation'
    >;
    localeCode: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::navigation.navigation',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::navigation.navigation',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginNavigationNavigationItem extends Schema.CollectionType {
  collectionName: 'navigations_items';
  info: {
    singularName: 'navigation-item';
    pluralName: 'navigation-items';
    displayName: 'Navigation Item';
    name: 'navigation-item';
  };
  options: {
    increments: true;
    timestamps: true;
    comment: 'Navigation Item';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
    i18n: {
      localized: false;
    };
  };
  attributes: {
    title: Attribute.Text &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    type: Attribute.Enumeration<['INTERNAL', 'EXTERNAL', 'WRAPPER']> &
      Attribute.DefaultTo<'INTERNAL'>;
    path: Attribute.Text;
    externalPath: Attribute.Text;
    uiRouterKey: Attribute.String;
    menuAttached: Attribute.Boolean & Attribute.DefaultTo<false>;
    order: Attribute.Integer & Attribute.DefaultTo<0>;
    collapsed: Attribute.Boolean & Attribute.DefaultTo<false>;
    related: Attribute.Relation<
      'plugin::navigation.navigation-item',
      'oneToOne',
      'plugin::navigation.navigations-items-related'
    >;
    parent: Attribute.Relation<
      'plugin::navigation.navigation-item',
      'oneToOne',
      'plugin::navigation.navigation-item'
    >;
    master: Attribute.Relation<
      'plugin::navigation.navigation-item',
      'manyToOne',
      'plugin::navigation.navigation'
    >;
    audience: Attribute.Relation<
      'plugin::navigation.navigation-item',
      'oneToMany',
      'plugin::navigation.audience'
    >;
    additionalFields: Attribute.JSON & Attribute.DefaultTo<{}>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::navigation.navigation-item',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::navigation.navigation-item',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginNavigationNavigationsItemsRelated
  extends Schema.CollectionType {
  collectionName: 'navigations_items_related';
  info: {
    singularName: 'navigations-items-related';
    pluralName: 'navigations-items-relateds';
    displayName: 'Navigations Items Related';
    name: 'navigations_items_related';
  };
  options: {
    increments: true;
    timestamps: false;
    populateCreatorFields: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
    i18n: {
      localized: false;
    };
  };
  attributes: {
    related_id: Attribute.String & Attribute.Required;
    related_type: Attribute.String & Attribute.Required;
    field: Attribute.String & Attribute.Required;
    order: Attribute.Integer & Attribute.Required;
    master: Attribute.String & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::navigation.navigations-items-related',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::navigation.navigations-items-related',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiExperienceExperience extends Schema.SingleType {
  collectionName: 'experiences';
  info: {
    singularName: 'experience';
    pluralName: 'experiences';
    displayName: 'Experience';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    Title: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Experience: Attribute.DynamicZone<
      ['experience.experience-item', 'experience.experience']
    > &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Seo: Attribute.Component<'seo.seo'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::experience.experience',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::experience.experience',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::experience.experience',
      'oneToMany',
      'api::experience.experience'
    >;
    locale: Attribute.String;
  };
}

export interface ApiFeedBackFeedBack extends Schema.SingleType {
  collectionName: 'feed_backs';
  info: {
    singularName: 'feed-back';
    pluralName: 'feed-backs';
    displayName: 'FeedBack';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    Title: Attribute.String;
    FeedBackItems: Attribute.DynamicZone<['experience.feed-back']>;
    Seo: Attribute.Component<'seo.seo'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::feed-back.feed-back',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::feed-back.feed-back',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::feed-back.feed-back',
      'oneToMany',
      'api::feed-back.feed-back'
    >;
    locale: Attribute.String;
  };
}

export interface ApiFooterFooter extends Schema.SingleType {
  collectionName: 'footers';
  info: {
    singularName: 'footer';
    pluralName: 'footers';
    displayName: 'Footer';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    SocialBloc: Attribute.Component<'social.social-item', true> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::footer.footer',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::footer.footer',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::footer.footer',
      'oneToMany',
      'api::footer.footer'
    >;
    locale: Attribute.String;
  };
}

export interface ApiHomeHome extends Schema.SingleType {
  collectionName: 'homes';
  info: {
    singularName: 'home';
    pluralName: 'homes';
    displayName: 'home';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    Presentation: Attribute.Component<'home.presentation'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Components: Attribute.DynamicZone<['home.figure-card-bloc', 'home.bloc']> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Seo: Attribute.Component<'seo.seo'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::home.home', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::home.home', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::home.home',
      'oneToMany',
      'api::home.home'
    >;
    locale: Attribute.String;
  };
}

export interface ApiMeMe extends Schema.SingleType {
  collectionName: 'us';
  info: {
    singularName: 'me';
    pluralName: 'us';
    displayName: 'Me';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Name: Attribute.String;
    Address: Attribute.String;
    PostalCode: Attribute.String;
    City: Attribute.String;
    Phone: Attribute.String;
    Email: Attribute.Email;
    photo: Attribute.Media;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::me.me', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::me.me', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiProjectProject extends Schema.CollectionType {
  collectionName: 'projects';
  info: {
    singularName: 'project';
    pluralName: 'projects';
    displayName: 'Project';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    Title: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    slug: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    media: Attribute.Media &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    summary: Attribute.RichText &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    status: Attribute.Enumeration<
      ['PROJECT', 'TASKS_WRITING', 'IN_PROGRESS', 'FINISH']
    > &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    detail: Attribute.RichText &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    webservices: Attribute.Relation<
      'api::project.project',
      'oneToMany',
      'api::webservice.webservice'
    >;
    stack_items: Attribute.Relation<
      'api::project.project',
      'oneToMany',
      'api::stack-item.stack-item'
    >;
    Link: Attribute.Component<'link.link', true> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Seo: Attribute.Component<'seo.seo'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    slider: Attribute.Component<'slider.slider'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::project.project',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::project.project',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::project.project',
      'oneToMany',
      'api::project.project'
    >;
    locale: Attribute.String;
  };
}

export interface ApiProjectListProjectList extends Schema.SingleType {
  collectionName: 'project_lists';
  info: {
    singularName: 'project-list';
    pluralName: 'project-lists';
    displayName: 'ProjectList';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    Title: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    seo: Attribute.Component<'seo.seo'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::project-list.project-list',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::project-list.project-list',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::project-list.project-list',
      'oneToMany',
      'api::project-list.project-list'
    >;
    locale: Attribute.String;
  };
}

export interface ApiSkillSkill extends Schema.SingleType {
  collectionName: 'skills';
  info: {
    singularName: 'skill';
    pluralName: 'skills';
    displayName: 'Skill';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    Title: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Skills: Attribute.DynamicZone<
      [
        'skills.soft-skill',
        'skills.character-trait',
        'skills.skill',
        'skills.skills-list'
      ]
    > &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Seo: Attribute.Component<'seo.seo'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::skill.skill',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::skill.skill',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::skill.skill',
      'oneToMany',
      'api::skill.skill'
    >;
    locale: Attribute.String;
  };
}

export interface ApiStackItemStackItem extends Schema.CollectionType {
  collectionName: 'stack_items';
  info: {
    singularName: 'stack-item';
    pluralName: 'stack-items';
    displayName: 'StackItem';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Name: Attribute.String;
    Logo: Attribute.Media;
    Info: Attribute.String;
    project: Attribute.Relation<
      'api::stack-item.stack-item',
      'manyToOne',
      'api::project.project'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::stack-item.stack-item',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::stack-item.stack-item',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiTrainingTraining extends Schema.SingleType {
  collectionName: 'trainings';
  info: {
    singularName: 'training';
    pluralName: 'trainings';
    displayName: 'Training';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    Title: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Trainings: Attribute.DynamicZone<['experience.experience']> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Seo: Attribute.Component<'seo.seo'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::training.training',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::training.training',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::training.training',
      'oneToMany',
      'api::training.training'
    >;
    locale: Attribute.String;
  };
}

export interface ApiWebserviceWebservice extends Schema.CollectionType {
  collectionName: 'webservices';
  info: {
    singularName: 'webservice';
    pluralName: 'webservices';
    displayName: 'Webservice';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    Name: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Logo: Attribute.Media &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    Info: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    project: Attribute.Relation<
      'api::webservice.webservice',
      'manyToOne',
      'api::project.project'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::webservice.webservice',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::webservice.webservice',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    localizations: Attribute.Relation<
      'api::webservice.webservice',
      'oneToMany',
      'api::webservice.webservice'
    >;
    locale: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface ContentTypes {
      'admin::permission': AdminPermission;
      'admin::user': AdminUser;
      'admin::role': AdminRole;
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::content-releases.release': PluginContentReleasesRelease;
      'plugin::content-releases.release-action': PluginContentReleasesReleaseAction;
      'plugin::i18n.locale': PluginI18NLocale;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
      'plugin::navigation.audience': PluginNavigationAudience;
      'plugin::navigation.navigation': PluginNavigationNavigation;
      'plugin::navigation.navigation-item': PluginNavigationNavigationItem;
      'plugin::navigation.navigations-items-related': PluginNavigationNavigationsItemsRelated;
      'api::experience.experience': ApiExperienceExperience;
      'api::feed-back.feed-back': ApiFeedBackFeedBack;
      'api::footer.footer': ApiFooterFooter;
      'api::home.home': ApiHomeHome;
      'api::me.me': ApiMeMe;
      'api::project.project': ApiProjectProject;
      'api::project-list.project-list': ApiProjectListProjectList;
      'api::skill.skill': ApiSkillSkill;
      'api::stack-item.stack-item': ApiStackItemStackItem;
      'api::training.training': ApiTrainingTraining;
      'api::webservice.webservice': ApiWebserviceWebservice;
    }
  }
}
