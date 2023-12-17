import * as dotenv from 'dotenv';
import * as fs from 'fs';
import { z } from 'zod';

export enum NODE_ENV {
  development = 'development',
  production = 'production',
}

const EnvSchema = z.object({
  NODE_ENV: z.nativeEnum(NODE_ENV),
});

const TypedEnvSchema = EnvSchema.extend({
  // env specific values
  PORT: z.coerce.number(),
});

const beforeDotEnv = EnvSchema.parse(process.env);

const defaultParsed = dotenv.parse(fs.readFileSync('.env'));
const parsed = dotenv.parse(fs.readFileSync(`.env.${beforeDotEnv.NODE_ENV}`));
export const TypedEnv = TypedEnvSchema.parse({
  ...defaultParsed,
  ...parsed,
  ...process.env,
});

export const IS_DEV_ENV = TypedEnv.NODE_ENV === 'development';
export const IS_PROD_ENV = TypedEnv.NODE_ENV === 'production';
