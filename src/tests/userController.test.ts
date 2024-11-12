import request from 'supertest';
import app from '../app';

describe('GET /api/users', () => {
  it('should return paginated user data', async () => {
    const response = await request(app).get('/api/users?limit=2&page=1');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('total');
    expect(response.body.items.length).toBeLessThanOrEqual(2);
  });
});
