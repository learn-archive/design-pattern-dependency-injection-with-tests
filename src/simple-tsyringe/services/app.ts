import { inject, injectable } from 'tsyringe';
import { Database } from './database';
import { Logger } from './logger';

@injectable()
export class App {
  constructor(
    @inject(Database) private readonly _database: Database,
    @inject(Logger) private readonly _logger: Logger,
  ) {}

  public execute() {
    this._logger.info('Hello world !')
    this._database.connect();
  }
}
