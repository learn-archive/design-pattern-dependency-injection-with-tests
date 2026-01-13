import 'reflect-metadata';

import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import { container } from 'tsyringe';
import { Warrior } from './services/warrior';

const app = new Hono();

app.get('/', (c) => {
  const warrior = container.resolve(Warrior);
  return c.text(warrior.fight());
});

serve(
  {
    fetch: app.fetch,
    port: 3000,
  },
  (info) => {
    console.log(`Server is running on http://localhost:${info.port}`);
  },
);
