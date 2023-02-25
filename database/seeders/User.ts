import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class extends BaseSeeder {
  public async run() {
    await User.createMany([
      {
        username: 'Admin',
        email: 'admin@gmail.com',
        password: '123123',
      },
      {
        username: 'User',
        email: 'user@gmail.com',
        password: '123123',
      },
    ])
  }
}
