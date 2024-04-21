import { module } from './module';
import { Warrior, WarriorSymbol } from './services/warrior';

export function main(): string {
  const warrior = module.get<Warrior>(WarriorSymbol);
  return warrior.fight();
}
