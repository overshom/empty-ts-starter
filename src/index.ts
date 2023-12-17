import express from 'express';
import cors from 'cors';
import { TypedEnv } from './environment/typed-env';
const app = express();
const PORT = TypedEnv.PORT;

app.use(cors());

const started = new Date();
const instanceID = `id-${Math.random().toString(16).slice(2)}`;

app.get('/', (req, res) => {
  const elapsed = Date.now() - started.getTime();
  res.send({ elapsed, started: started.toJSON(), instanceID });
});

app.listen(PORT, () => {
  console.log('instance started with instanceID', instanceID);
  console.log('listening on http://localhost:' + PORT);
});
