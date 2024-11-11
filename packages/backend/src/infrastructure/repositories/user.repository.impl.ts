import { Injectable } from '@nestjs/common';
import { UserRepository } from '../../core/repositories/user.repository';
import { User } from '../../core/entities/User';

@Injectable()
export class UserRepositoryImpl implements UserRepository {
  private users: User[] = [
    {
      id: '1',
      name: 'Afaq Javed',
      email: 'admin@test.com',
      password: 'admin',
      role: 'ADMIN',
    },
    {
      id: '2',
      name: 'Asad Javed',
      email: 'employee@test.com',
      password: 'employee',
      role: 'EMPLOYEE',
    },
  ];

  findById(id: string): Promise<User | null> {
    const user = this.users.find((user) => user.id === id);
    return user ? Promise.resolve(user) : Promise.resolve(null);
  }

  findByEmail(email: string): Promise<User | null> {
    const userFound = this.users.find((user) => user.email === email);
    return Promise.resolve(userFound);
  }
}
