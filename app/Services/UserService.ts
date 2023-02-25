import User from 'App/Models/User'
import { forEach } from 'lodash'

export default class UserService {

  public async findByEmail({ email }): Promise<any> {
    return await User.query().where('email', email).first()
  }

  public async findById({ id }): Promise<any> {
    return await User.query().where('id', id).first()
  }

  public async stored(request): Promise<any> {
    try {
      return await User.create(request)
    } catch (e) {
      return false
    }
  }

  public async updated(id, request): Promise<any> {
    try {
      const user = await User.find(id)
      if (!user) return false
      forEach(request, (e, i) => user[i] = e)
      return await user.save()
    } catch (e) {
      return false
    }
  }

  public async deleted({ id }): Promise<any> {
    const user = await User.find(id)
    if (!user) return false
    return await user.delete()
  }

}

