import pino from 'pino';
import { singleton } from 'tsyringe';

@singleton()
export class Logger {
  private readonly logger: pino.Logger;

  constructor() {
    this.logger = pino({ level: 'info' });
  }

  public info(message: string | object): void {
    this.logger.info(message);
  }

  public error(message: string | object | Error): void {
    this.logger.error(message);
  }
}
