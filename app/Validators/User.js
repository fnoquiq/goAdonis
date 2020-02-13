'use strict'

class User {
  get validateAll() {
    return true
  }

  get rules() {
    return {
      username: 'required|unique:users',
      email: 'required|email|unique:users',
      password: 'required|confirmed'
    }
  }

  get messages() {
    return {
      'username.required': 'You must provide a email address.',
      'username.unique': 'This email is already registered.',
      'email.required': 'You must provide a email address.',
      'email.email': 'You must provide a valid email address.',
      'email.unique': 'This email is already registered.',
      'password.required': 'You must provide a email address.',
      'password.confirmed': 'You must provide a password_confirmed field.'
    }
  }
}

module.exports = User
