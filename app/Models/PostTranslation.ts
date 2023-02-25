import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, HasOne, hasOne } from '@ioc:Adonis/Lucid/Orm'
import Post from 'App/Models/Post'
import Language from 'App/Models/Language'

export default class PostTranslation extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public postId: number
  @belongsTo(() => Post)
  public post: BelongsTo<typeof Post>

  @column()
  public langId: number
  @hasOne(() => Language, {
    foreignKey: 'langId',
  })
  public lang: HasOne<typeof Language>

  @column()
  public name: string | null

  @column()
  public description: string | null

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
