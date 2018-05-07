export class User {
  public email: string;
  public password: string | Int32Array;
  public status: string;

  constructor( email: string, password: string | Int32Array, status: string) {
    this.email = email;
    this.password = password;
    this.status = status;
  }
}

