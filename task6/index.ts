export interface User {
  id: string;
  firstName: string;
  lastName: string;
}

export class ApiService {
  async fetchUser(userId: string): Promise<User> {
    throw new Error("Not implemented");
  }
}

export class UserService {
  constructor(private apiService: ApiService) {}

  async getUserName(userId: string): Promise<string> {
    const user = await this.apiService.fetchUser(userId);
    return `${user.firstName} ${user.lastName}`;
  }
}
