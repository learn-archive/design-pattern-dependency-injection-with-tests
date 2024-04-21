import { IThrowableWeapon } from './services/throwable-weapon';
import { IWarrior } from './services/warrior';

// interface IMainService {
//   special: () => string;
// }

export const MainService = { special };

function special(inject: { Warrior: IWarrior; ThrowableWeapon: IThrowableWeapon }): string {
  // TODO: Should not import ThrowableWeapon
  return inject.Warrior.sneak(inject);
}
