'use strict'

class ForgotPassword {
  get validateAll() {
    return true
  }

  get rules() {
    return {
      email: 'required|email',
      redirect_url: 'required|url'
    }
  }

  get messages() {
    return {
      'email.required': 'You must provide a email address.',
      'email.email': 'You must provide a valid email address.',
      'redirect_url.required': 'You must provide a redirect url.',
      'redirect_url.url': 'You must provide a valid url.'
    }
  }
}

module.exports = ForgotPassword
