import express from 'express';
import dotenv from 'dotenv';
import analyzerRouter from './router/analyzerrouter.js';

dotenv.config();

const app = express();
const PORT = 3000 || 5000;
app.use(express.json());

app.use('/api/analyze', analyzerRouter);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});