export class UsersService {
  users: {
    id: number;
    name: string;
    age: number;
    gender: string;
    isMarried: boolean;
  }[] = [
    { id: 1, name: 'john', age: 28, gender: 'male', isMarried: false },
    { id: 2, name: 'jane', age: 25, gender: 'male', isMarried: true },
    { id: 3, name: 'sumita', age: 30, gender: 'female', isMarried: false },
  ];
  getAllusers() {
    return this.users;
  }
  getUserById(id: number) {
    return this.users.find((x) => x.id === id);
  }
  createUser(user: {
    id: number;
    name: string;
    age: number;
    gender: string;
    isMarried: boolean;
  }) {
    this.users.push(user);
  }
}
