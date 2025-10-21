import { getUtcStringDate } from 'tasks/task3';
import { setupMockDate, MockDateSetup } from './testUtils';

describe('task3', () => {
  let mockDate: MockDateSetup;

  beforeEach(() => {
    mockDate = setupMockDate();
  });

  afterEach(() => {
    mockDate.reset();
  });

  // write your tests here
});
