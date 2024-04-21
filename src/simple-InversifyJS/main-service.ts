import { inject, injectable } from 'inversify';
import { Warrior, WarriorSymbol } from './services/warrior';

export const MainServiceSymbol = Symbol.for('MainService');

@injectable()
export class MainService {
  constructor(@inject(WarriorSymbol) private _warrior: Warrior) {}

  hit(): string {
    return this._warrior.sneak();
  }
}
