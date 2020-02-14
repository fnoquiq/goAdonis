'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */

const Route = use('Route')

Route.post('/users', 'UserController.store').validator('User')
Route.post('/sessions', 'SessionController.store').validator('Session')

Route.post('/passwords', 'ForgotPasswordController.store').validator(
  'ForgotPassword'
)
Route.put('/passwords', 'ForgotPasswordController.update').validator(
  'ResetPassword'
)

Route.get('/files/:id', 'FileController.show')

Route.group(() => {
  Route.post('/files', 'FileController.store')

  Route.resource('/projects', 'ProjectController').apiOnly()
  Route.resource('/projects.tasks', 'TaskController').apiOnly()
}).middleware(['auth'])
