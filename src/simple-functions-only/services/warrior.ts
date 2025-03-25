import { IThrowableWeapon } from './throwable-weapon';
import { Weapon } from './weapon';

export interface IWarrior {
  fight: () => string;
  sneak: (inject: { ThrowableWeapon: IThrowableWeapon }) => string;
}

export const Warrior: IWarrior = {
  fight: (): string => {
    return Weapon.hit();
  },
  sneak: (inject: { ThrowableWeapon: IThrowableWeapon }): string => {
    return inject.ThrowableWeapon.cut();
  },
};
