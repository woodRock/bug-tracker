export interface Project {
  id? : string
  name? : string;
  description? : string;
  collaborators? : string[];
  private?: boolean;
  time?: Date;
}
