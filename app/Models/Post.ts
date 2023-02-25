import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import User from 'App/Models/User'
import PostTranslation from 'App/Models/PostTranslation'

export default class Post extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public userId: number
  @belongsTo(() => User)
  public user: BelongsTo<typeof User>

  @column()
  public status: string

  @column()
  public view: string | null

  @column()
  public image: string | null

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => PostTranslation, {
    foreignKey: 'postId',
  })
  public translations: HasMany<typeof PostTranslation>

}
