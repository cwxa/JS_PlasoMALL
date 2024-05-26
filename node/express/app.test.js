const request = require('supertest');
const app = require('../app');

describe('GET /home', () => {
  test('should return "首页" text', async () => {
    const response = await request(app).get('/home');
    expect(response.text).toBe('首页');
  });
});

describe('POST /login', () => {
  test('should return "登录" text', async () => {
    const response = await request(app).post('/login');
    expect(response.text).toBe('登录');
  });
});

describe('Error handling middleware', () => {
  test('should return 500 status and "Something broke!" text', async () => {
    const response = await request(app).get('/not-found');
    expect(response.status).toBe(500);
    expect(response.text).toBe('Something broke!');
  });
});