import express from 'express';
import cors from 'cors';
import { TypedEnv } from './environment/typed-env';
const app = express();
const port = TypedEnv.PORT;

app.use(cors());

const started = new Date();
const instanceId = `id-${Math.floor(Math.random() * 1e13)}`;

app.get('/', (req, res) => {
  const elapsed = Date.now() - started.getTime();
  res.send({ elapsed, started: started.toJSON(), instanceId });
});

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});
