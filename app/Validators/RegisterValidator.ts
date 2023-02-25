import { CustomMessages, rules, schema } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class RegisterValidator {
  constructor(protected ctx: HttpContextContract) {
  }

  public schema = schema.create({
    email: schema.string([
      rules.required(),
      rules.email(),
      // rules.unique({ table: 'users', column: 'email' }),
      rules.maxLength(255),
    ]),
    password: schema.string([
      rules.required(),
      rules.minLength(6),
      rules.maxLength(180),
      rules.confirmed(),
    ]),
    username: schema.string([
      rules.required(),
      rules.maxLength(255),
    ]),
  })

  public messages: CustomMessages = {}
}
