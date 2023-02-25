import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Language from 'App/Models/Language'

export default class extends BaseSeeder {
  public async run() {
    await Language.createMany([
      {
        name: 'Vietnamese',
        code: 'vi',
        description: 'Tiếng Việt',
      },
      {
        name: 'English',
        code: 'en',
        description: 'English',
      },
    ])
  }
}
