import dotenv from 'dotenv';
import path from 'path';
import { test } from '@playwright/test';

// Force dotenv to read .env from project root
dotenv.config({
  path: path.resolve(process.cwd(), '.env'),
});

test('show env', async () => {
  console.log('CWD=', process.cwd());
  console.log('URL=', process.env.DIFY_API_URL);
  console.log('KEY=', process.env.DIFY_API_KEY);
});