import 'reflect-metadata';

import { container } from 'tsyringe';
import { App } from './services/app';

export function main() {
  const app = container.resolve(App);
  app.execute();
}

main();
