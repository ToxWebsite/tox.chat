'use strict';

const Schema = use('Schema');

class TokensSchema extends Schema {
  up () {
    this.createIfNotExists('tokens', table => {
      table.increments();
      table.integer('user_id').unsigned().references('id').inTable('users');
      table.string('token', 40).notNullable().unique();
      table.boolean('is_revoked').defaultTo(false);
      table.timestamps();
    })
  }

  down () {
    this.dropIfExists('tokens');
  }
}

module.exports = TokensSchema;
