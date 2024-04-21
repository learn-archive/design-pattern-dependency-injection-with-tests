import { inject, injectable } from 'inversify';
import 'reflect-metadata';
import { ThrowableWeapon, ThrowableWeaponSymbol } from './throwable-weapon';
import { Weapon, WeaponSymbol } from './weapon';

export const WarriorSymbol = Symbol.for('Warrior');

@injectable()
export class Warrior {
  constructor(
    @inject(WeaponSymbol) private _weapon: Weapon,
    @inject(ThrowableWeaponSymbol) private _throwableWeapon: ThrowableWeapon,
  ) {}

  fight() {
    return this._weapon.hit();
  }

  sneak() {
    return this._throwableWeapon.throw();
  }
}
