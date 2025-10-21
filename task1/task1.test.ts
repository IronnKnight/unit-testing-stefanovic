import { validateUserName } from 'tasks/task1/index';
import { fetchIsUserNameAvailable } from 'tasks/task1/fetchIsUserNameValid';

jest.mock('task2/fetchIsUserNameValid', 
  // write your mock here
);

describe('task2', () => {
  it('returns false if name has length less than 3 symbols', () => {
    // write your first unit test here
  });

  // ...and add more test cases
});