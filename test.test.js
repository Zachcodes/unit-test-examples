const massive = require('massive');
const { getData } = require('./controller');
const express = require('express');

const mockRequest = app => {
  return {
    app
  };
};

const mockResponse = () => {
  const res = {};
  res.status = jest.fn().mockReturnValue(res);
  res.send = jest.fn().mockReturnValue(res);
  return res;
};

describe('connect', () => {
  let db, app;
  beforeAll(async () => {
    app = express();

    db = await massive({
      host: 'localhost',
      port: 5432,
      database: 'developer',
      user: 'developer',
      password: '',
      ssl: false,
      poolSize: 10
    });
    app.set('db', db);
  });
  test('can get user data', async () => {
    const req = mockRequest(app);
    const res = mockResponse();
    await getData(req, res);
    expect(res.send).toHaveBeenCalledWith({ id: 1, name: 'zach' });
  });
});
