import { container } from './container';
import { Warrior, WarriorSymbol } from './services/warrior';

export function main(): string {
  const warrior = container.resolve<Warrior>(WarriorSymbol);
  return warrior.fight();
}

export class MainService {
  constructor(private readonly _warrior: Warrior) {}

  action(): string {
    return this._warrior.sneak();
  }
}
