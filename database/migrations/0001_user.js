'use strict';

const Schema = use('Schema');

class UserSchema extends Schema {
  up () {
    this.createTableIfNotExists('users', table => {
      table.increments();
      table.string('username', 80).notNullable().unique();
      table.string('email', 254).notNullable().unique();
      table.string('password', 60).notNullable();
      table.string('avatar_url', 255);
      table.string('bio', 150);
      table.timestamps();
    });
  }

  down () {
    this.dropIfExists('users');
  }
}

module.exports = UserSchema;
