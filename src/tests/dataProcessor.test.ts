import { fetchBatchData, saveData } from '../services/dataProcessor';
import UserModel from '../models/UserModel';

describe('Data Processor Service', () => {
  it('should fetch the correct number of users', async () => {
    const users = await fetchBatchData(300);
    expect(users.length).toBeGreaterThan(0);
  });

  it('should save users to the database', async () => {
    const mockUsers = [
      { id: '123', gender: 'male', name: 'John Doe', address: { city: 'New York', state: 'NY', country: 'USA', street: '5th Ave' }, email: 'john@example.com', age: 25, picture: 'url', createdAt: new Date() }
    ];
    await saveData(mockUsers);
    const user = await UserModel.findOne({ id: '123' });
    expect(user).not.toBeNull();
  });
});
