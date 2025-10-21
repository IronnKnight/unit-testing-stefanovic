import { ApiService, UserService, User } from './index';

/** Manual stub class for ApiService */
class StubApiService implements Partial<ApiService> {
  async fetchUser(userId: string) {
    // TODO: implement this stub method
    throw new Error('Method not implemented.');
  }
}

describe('UserService - getUserName', () => {
  it('should return full name from stubbed ApiService', async () => {
    // TODO: implement test
  });

  it('should handle different userIds correctly', async () => {
    // TODO: implement test
  });
});
