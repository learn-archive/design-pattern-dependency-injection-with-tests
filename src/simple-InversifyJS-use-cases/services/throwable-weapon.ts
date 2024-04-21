import { injectable } from 'inversify';
import 'reflect-metadata';

export const ThrowableWeaponSymbol = Symbol.for('ThrowableWeapon');

@injectable()
export class ThrowableWeapon {
  throw() {
    return 'hit!';
  }
}
