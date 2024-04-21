import { Container } from 'inversify';
import { MainService, MainServiceSymbol } from './main-service';
import { ThrowableWeapon, ThrowableWeaponSymbol } from './services/throwable-weapon';
import { Warrior, WarriorSymbol } from './services/warrior';
import { Weapon, WeaponSymbol } from './services/weapon';

export const module = new Container();
module.bind<Warrior>(WarriorSymbol).to(Warrior);
module.bind<Weapon>(WeaponSymbol).to(Weapon);
module.bind<ThrowableWeapon>(ThrowableWeaponSymbol).to(ThrowableWeapon);
module.bind<MainService>(MainServiceSymbol).to(MainService);
