import { inject, injectable } from 'inversify';
import { module } from './module';
import { JsonService, JsonServicePersonSymbol, JsonServiceSymbol, Person } from './services/json-service';
import { Warrior, WarriorSymbol } from './services/warrior';

export function main(): string {
  const warrior = module.get<Warrior>(WarriorSymbol);
  return warrior.fight();
}

export const MainServiceSymbol = Symbol.for('MainService');

@injectable()
export class MainService {
  constructor(
    @inject(WarriorSymbol) private _warrior: Warrior,
    @inject(JsonServiceSymbol) private _jsonService: JsonService,
    // @inject(JsonServicePersonSymbol) private _person: Person,
  ) {}

  hit(): string {
    return this._warrior.sneak();
  }

  hitPerson() {
    return this._jsonService.getPersonName();
  }
}
