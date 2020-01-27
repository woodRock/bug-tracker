import { Entity } from './entity.model'

export interface Bug extends Entity {
  name?: string,
  description?: string,
  priority?: string,
  state?: string,
  contributor?: string
}
