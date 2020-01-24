import { User } from './user.model'
import { Entity } from './entity.model'

export interface Project extends Entity {
  name? : string,
  description? : string,
  collaborators? : User[],
  private?: boolean,
  time?: Date,
}
