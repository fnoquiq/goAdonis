'use strict'

class Task {
  get validateAll() {
    return true
  }

  get rules() {
    return {
      title: 'required',
      due_date: 'date'
    }
  }

  get messages() {
    return {
      'title.required': 'You must provide a title.',
      'due_date.date': 'You must provide a valid date.'
    }
  }
}

module.exports = Task
