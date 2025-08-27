import express from 'express';
import path from 'path';
import { calculate, Op } from './calc';

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

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

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server http://localhost:${port}`));
