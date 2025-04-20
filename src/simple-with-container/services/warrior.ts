import { ThrowableWeapon } from './throwable-weapon';
import { Weapon } from './weapon';

export const WarriorSymbol = Symbol.for('warrior');

export class Warrior {
  constructor(
    private readonly _weapon: Weapon,
    private readonly _throwableWeapon: ThrowableWeapon,
  ) {}

  public fight() {
    return this._weapon.hit();
  }
  public sneak() {
    return this._throwableWeapon.throw();
  }
}
