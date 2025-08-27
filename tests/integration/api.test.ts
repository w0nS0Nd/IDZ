import request from 'supertest';
import express from 'express';
import path from 'path';
import { calculate, Op } from '../../src/calc';

function createApp(){
  const app = express();
  app.use(express.json());
  app.use(express.static(path.join(__dirname, '..', '..', 'public')));
  app.get('/api/calc', (req, res) => {
    try {
      const a = parseFloat(String(req.query.a ?? ''));
      const b = parseFloat(String(req.query.b ?? ''));
      const op = String(req.query.op ?? '') as Op;
      const result = calculate(a, op, b);
      res.json({ ok: true, result });
    } catch (e: any) {
      res.status(400).json({ ok: false, error: e.message });
    }
  });
  return app;
}

describe('API /api/calc', () => {
  const app = createApp();

  it('adds 2+3=5', async () => {
    const r = await request(app).get('/api/calc?a=2&op=%2B&b=3');
    expect(r.status).toBe(200);
    expect(r.body).toEqual({ ok: true, result: 5 });
  });

  it('division by zero', async () => {
    const r = await request(app).get('/api/calc?a=8&op=/&b=0');
    expect(r.status).toBe(400);
    expect(r.body.ok).toBe(false);
    expect(r.body.error).toBe('DivisionByZero');
  });

  it('invalid number', async () => {
  const r = await request(app).get('/api/calc?a=2&op=%2B&b=abc'); // замість числа - текст
  expect(r.status).toBe(400);
  expect(r.body.error).toBe('InvalidNumber');
});
});