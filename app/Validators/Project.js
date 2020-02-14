'use strict'

class Project {
  get validateAll() {
    return true
  }

  get rules() {
    return {
      title: 'required',
      description: 'required'
    }
  }

  get messages() {
    return {
      'title.required': 'You must provide a title.',
      'description.required': 'You must provide a description.'
    }
  }
}

module.exports = Project
