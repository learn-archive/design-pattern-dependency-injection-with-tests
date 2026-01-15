import 'reflect-metadata';

import { App } from './services/app';
import { Database } from './services/database';
import { Logger } from './services/logger';

export function main() {
  const logger = new Logger();
  const app = new App(new Database(logger), logger);
  app.execute();
}
