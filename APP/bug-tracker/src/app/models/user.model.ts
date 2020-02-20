import { Entity } from './entity.model'

export interface User extends Entity {
    uid? : string,
    email?: string,
    photoURL?: string,
    displayName?: string,
    password?: string;
}
