import {Entity} from './entity.model';

export interface Project extends Entity {
  name?: string;
  description?: string;
  collaborators?: string[];
  private?: boolean;
  time?: Date;
}
