'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Project = use('App/Models/Project')

class ProjectController {
  async index({ request }) {
    const { page } = request.get()

    const projects = await Project.query()
      .with('user')
      .paginate(page)

    return projects
  }

  async store({ request, auth }) {
    const data = request.only(['title', 'description'])

    const project = await Project.create({
      user_id: auth.user.id,
      ...data
    })

    return project
  }

  async show({ params, response }) {
    try {
      const project = await Project.findOrFail(params.id)

      await project.load('user')
      await project.load('tasks')

      return project
    } catch (err) {
      return response
        .status(err.status)
        .send({ error: { message: 'Erro ao buscar projeto' } })
    }
  }

  async update({ params, request }) {
    const project = await Project.findOrFail(params.id)
    const data = request.only(['title', 'description'])

    project.merge(data)

    await project.save()

    return project
  }

  async destroy({ params }) {
    const project = await Project.findOrFail(params.id)

    await project.delete()
  }
}

module.exports = ProjectController
