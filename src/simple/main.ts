import { ThrowableWeapon, Warrior, Weapon } from './services';

export function main(): string {
  const warrior = new Warrior(new Weapon(), new ThrowableWeapon());
  return warrior.fight();
}

export class MainService {
  constructor(private _warrior: Warrior) {}

  hit(): string {
    return this._warrior.sneak();
  }
}
