import { validateUserName } from 'tasks/task1/index';
import { fetchIsUserNameAvailable } from 'tasks/task1/fetchIsUserNameValid';

jest.mock('tasks/task1/fetchIsUserNameValid', () => ({
  fetchIsUserNameAvailable: jest.fn(),
}));

const mockFetchIsUserNameAvailable = fetchIsUserNameAvailable as jest.MockedFunction<typeof fetchIsUserNameAvailable>;

describe('task1', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('returns false if name has length less than 3 characters', async () => {
    const result = await validateUserName('ab');
    expect(result).toBe(false);
    expect(mockFetchIsUserNameAvailable).not.toHaveBeenCalled();
  });

  it('returns false if name contains non-alphanumeric characters', async () => {
    const result = await validateUserName('user@123');
    expect(result).toBe(false);
    expect(mockFetchIsUserNameAvailable).not.toHaveBeenCalled();
  });

  it('returns false if name contains spaces', async () => {
    const result = await validateUserName('user name');
    expect(result).toBe(false);
    expect(mockFetchIsUserNameAvailable).not.toHaveBeenCalled();
  });

  it('returns false if name starts with a number', async () => {
    const result = await validateUserName('1username');
    expect(result).toBe(false);
    expect(mockFetchIsUserNameAvailable).not.toHaveBeenCalled();
  });

  it('returns true if username is available', async () => {
    mockFetchIsUserNameAvailable.mockResolvedValue(true);
    
    const result = await validateUserName('us1');
    expect(result).toBe(true);
    expect(mockFetchIsUserNameAvailable).toHaveBeenCalledWith('us1');
  });

  it('returns false if username is unavailable', async () => {
    mockFetchIsUserNameAvailable.mockResolvedValue(false);
    
    const result = await validateUserName('username');
    expect(result).toBe(false);
    expect(mockFetchIsUserNameAvailable).toHaveBeenCalledWith('username');
  });

  it('returns false if fetchIsUserNameAvailable throws an exception', async () => {
    mockFetchIsUserNameAvailable.mockRejectedValue(new Error('Network error'));
    
    const result = await validateUserName('username');
    expect(result).toBe(false);
    expect(mockFetchIsUserNameAvailable).toHaveBeenCalledWith('username');
  });
});