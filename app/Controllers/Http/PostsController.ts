import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Post from 'App/Models/Post'

export default class PostsController {
  public async index ({ view }: HttpContextContract) {
    const posts = await Post.all()
    return view.render('posts.index', {posts })
  }

  public create ({ view }: HttpContextContract) {
    return view.render('posts.create')
  }
}
