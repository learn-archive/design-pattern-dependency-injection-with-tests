import { inject } from 'inversify';
import { myContainer } from './container';
import { IWarrior } from './interfaces';
import { TYPES } from './types';

export function main(): string {
  const warrior = myContainer.get<IWarrior>(TYPES.Warrior);
  return warrior.fight();
}

export class MainService {
  private _warrior: IWarrior;

  constructor(@inject(TYPES.Warrior) warrior: IWarrior) {
    this._warrior = warrior;
  }

  hit(): string {
    return this._warrior.sneak();
  }
}
