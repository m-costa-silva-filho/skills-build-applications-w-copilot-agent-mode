import express from 'express';

const app = express();
const PORT = Number(process.env.PORT ?? 8000);

app.use(express.json());

app.get('/', (_req, res) => {
  res.json({ message: 'Octofit Tracker backend is running on port 8000.' });
});

app.listen(PORT, () => {
  console.log(`Backend server listening on http://localhost:${PORT}`);
  console.log('MongoDB should use port 27017 by default.');
});
