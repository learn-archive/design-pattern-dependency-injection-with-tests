import { Container } from './container';
import { mockThrowableWeapon, mockWarrior, mockWeapon } from './services/mocks/services.mock';
import { ThrowableWeaponSymbol } from './services/throwable-weapon';
import { WarriorSymbol } from './services/warrior';
import { WeaponSymbol } from './services/weapon';

export const containerTest = new Container();

containerTest.bind(WeaponSymbol, () => mockWeapon());
containerTest.bind(ThrowableWeaponSymbol, () => mockThrowableWeapon());
containerTest.bind(WarriorSymbol, () => mockWarrior());
