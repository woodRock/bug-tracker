import { Entity } from './entity.model'
import { User } from './user.model'

export interface Project extends Entity {
  name? : string,
  description? : string,
  collaborators? : string[],
  private?: boolean,
  time?: Date,
}
