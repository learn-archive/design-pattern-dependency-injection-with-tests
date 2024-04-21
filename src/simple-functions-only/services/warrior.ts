import { IThrowableWeapon } from './throwable-weapon';
import { Weapon } from './weapon';

export interface IWarrior {
  fight: () => string;
  sneak: (inject: { ThrowableWeapon: IThrowableWeapon }) => string;
}

export const Warrior: IWarrior = { fight, sneak };

function fight(): string {
  return Weapon.hit();
}

function sneak(inject: { ThrowableWeapon: IThrowableWeapon }): string {
  return inject.ThrowableWeapon.cut();
}
