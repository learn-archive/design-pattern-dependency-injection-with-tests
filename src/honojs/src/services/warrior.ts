import { inject, injectable } from 'tsyringe';
import { ThrowableWeapon } from './throwable-weapon.js';
import { Weapon } from './weapon.js';

@injectable()
export class Warrior {
  constructor(
    @inject(Weapon) private readonly _weapon: Weapon,
    @inject(ThrowableWeapon) private readonly _throwableWeapon: ThrowableWeapon,
  ) {}

  public fight() {
    return this._weapon.hit();
  }
  public sneak() {
    return this._throwableWeapon.throw();
  }
}
