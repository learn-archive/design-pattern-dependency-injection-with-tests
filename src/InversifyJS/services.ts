import { inject, injectable } from 'inversify';
import 'reflect-metadata';
import { IThrowableWeapon, IWarrior, IWeapon } from './interfaces';
import { TYPES } from './types';

@injectable()
export class Weapon implements IWeapon {
  public hit() {
    return 'cut!';
  }
}

@injectable()
export class ThrowableWeapon implements IThrowableWeapon {
  public throw() {
    return 'hit!';
  }
}

@injectable()
export class Warrior implements IWarrior {
  private _weapon: IWeapon;
  private _throwableWeapon: IThrowableWeapon;

  public constructor(@inject(TYPES.Weapon) weapon: IWeapon, @inject(TYPES.ThrowableWeapon) throwableWeapon: IThrowableWeapon) {
    this._weapon = weapon;
    this._throwableWeapon = throwableWeapon;
  }

  public fight() {
    return this._weapon.hit();
  }
  public sneak() {
    return this._throwableWeapon.throw();
  }
}
