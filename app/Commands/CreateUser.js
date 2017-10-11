'use strict'

const { Command } = require('@adonisjs/ace');
const User = use('App/Models/User');

class CreateUser extends Command {
  static get signature () {
    return 'create:user'
  }

  static get description () {
    return 'Tell something helpful about this command'
  }

  async handle (args, options) {
    this.info('Create a new user:');

    const user = new User();

    user.username = await this.ask('Username:');
    user.password = await this.secure('Password:');
    user.email    = await this.ask('Email address:');

    await user.save();
    this.completed('create:user', `Created ${user.username} row successfuly!`);
    return;
  }
}

module.exports = CreateUser
