import { Container } from 'inversify';
import { JsonService, JsonServicePersonSymbol, JsonServiceSymbol, Person } from './services/json-service';
import { ThrowableWeapon, ThrowableWeaponSymbol } from './services/throwable-weapon';
import { Warrior, WarriorSymbol } from './services/warrior';
import { Weapon, WeaponSymbol } from './services/weapon';

export const module = new Container();
module.bind<Warrior>(WarriorSymbol).to(Warrior);
module.bind<Weapon>(WeaponSymbol).to(Weapon);
module.bind<ThrowableWeapon>(ThrowableWeaponSymbol).to(ThrowableWeapon);
module.bind<JsonService>(JsonServiceSymbol).to(JsonService);
module.bind<Person>(JsonServicePersonSymbol);
// module.bind<MainService>(MainServiceSymbol).to(MainService);
