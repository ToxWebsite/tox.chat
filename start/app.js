'use strict';

const providers = [
  '@adonisjs/framework/providers/AppProvider',
  '@adonisjs/antl/providers/AntlProvider',
  '@adonisjs/framework/providers/ViewProvider',
  '@adonisjs/lucid/providers/LucidProvider',
  '@adonisjs/bodyparser/providers/BodyParserProvider',
  '@adonisjs/cors/providers/CorsProvider',
  '@adonisjs/shield/providers/ShieldProvider',
  '@adonisjs/session/providers/SessionProvider',
  '@adonisjs/auth/providers/AuthProvider',
];

const aceProviders = [
  '@adonisjs/lucid/providers/MigrationsProvider'
];

const aliases = {};

const commands = [
  'App/Commands/CreateUser',
  'App/Commands/CreateBlogPost',
  'App/Commands/CreateBlogCategory',
];

module.exports = { providers, aceProviders, aliases, commands };
