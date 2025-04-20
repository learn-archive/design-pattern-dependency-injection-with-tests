import { ThrowableWeapon } from './services/throwable-weapon';
import { Warrior } from './services/warrior';
import { Weapon } from './services/weapon';

export function main(): string {
  const warrior = new Warrior(new Weapon(), new ThrowableWeapon());
  return warrior.fight();
}

export class MainService {
  constructor(private readonly _warrior: Warrior) {}

  action(): string {
    return this._warrior.sneak();
  }
}
