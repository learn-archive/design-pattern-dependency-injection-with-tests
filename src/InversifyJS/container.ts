import { Container } from 'inversify';
import { ThrowableWeapon, Warrior, Weapon } from './services';
import { IThrowableWeapon, IWarrior, IWeapon } from './interfaces';
import { TYPES } from './types';

const myContainer = new Container();
myContainer.bind<IWarrior>(TYPES.Warrior).to(Warrior);
myContainer.bind<IWeapon>(TYPES.Weapon).to(Weapon);
myContainer.bind<IThrowableWeapon>(TYPES.ThrowableWeapon).to(ThrowableWeapon);

export { myContainer };
