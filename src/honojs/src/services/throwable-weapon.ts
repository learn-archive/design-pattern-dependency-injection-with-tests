import { injectable } from 'tsyringe';

@injectable()
export class ThrowableWeapon {
  public throw() {
    return 'throw !';
  }
}
