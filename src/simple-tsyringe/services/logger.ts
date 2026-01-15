import { injectable } from 'tsyringe';

@injectable()
export class Logger {
  public info(message: string) {
    console.log(message);
  }
}
