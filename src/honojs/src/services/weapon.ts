import { injectable } from 'tsyringe';

@injectable()
export class Weapon {
  public hit() {
    return 'hit !';
  }
}
