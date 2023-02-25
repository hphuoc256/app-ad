import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import LoginValidator from 'App/Validators/LoginValidator'
import RegisterValidator from 'App/Validators/RegisterValidator'
import UserService from 'App/Services/UserService'
import BaseController from 'App/Controllers/BaseController'

export default class AuthController extends BaseController {

  private readonly userService: any

  constructor() {
    super()
    this.userService = new UserService()
  }

  public async login({ auth, request }: HttpContextContract) {
    const { email, password } = await request.validate(LoginValidator)
    try {
      const user = await this.userService.findByEmail({ email })
      if (!user) {
        return this.ApiResponseError('USER_NOT_FOUND', [])
      }

      const token = await auth.use('api').attempt(email, password, {
        expiresIn: 604800,
      })

      return this.ApiResponseSuccess([{
        token: token.toJSON(),
        user,
      }])

    } catch (e) {
      return this.ApiResponseError('FAILED', [])
    }
  }

  public async register({ request }: HttpContextContract) {
    const { email, password, username } = await request.validate(RegisterValidator)
    try {
      const checkEmail = await this.userService.findByEmail({ email })
      if (checkEmail) return this.ApiResponseError('USER_EXIST', [])

      const res = await this.userService.stored({ email, password, username })
      if (!res) return this.ApiResponseError('FAILED', [])
      return this.ApiResponseSuccess([res])
    } catch (e) {
      return this.ApiResponseError('FAILED', [])
    }
  }

  public async me({ request }: HttpContextContract) {
    try {
      return this.ApiResponseSuccess()
    } catch (e) {

    }
  }
}
