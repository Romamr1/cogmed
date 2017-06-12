
export class MainServices {
  private users:{name: string, password: string}[] = [
    {
      name: 'name',
      password: 'password'
    },
    {
      name: 'user',
      password: 'user'
    }
  ];

  getUsers() {
    return this.users.slice();
  }
}
