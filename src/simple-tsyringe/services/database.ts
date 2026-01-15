import { inject, injectable } from 'tsyringe';
import { Logger } from './logger';

@injectable()
export class Database {
  constructor(@inject(Logger) private readonly _logger: Logger) {}

  public connect() {
    this._logger.info('connected to database !');
  }
}
