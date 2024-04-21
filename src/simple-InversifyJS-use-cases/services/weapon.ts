import { injectable } from 'inversify';
import 'reflect-metadata';

export const WeaponSymbol = Symbol.for('Weapon');

@injectable()
export class Weapon {
  hit() {
    return 'cut!';
  }
}
