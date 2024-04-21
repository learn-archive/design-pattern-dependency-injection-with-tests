import { inject, injectable } from 'inversify';
import 'reflect-metadata';
import { Weapon, WeaponSymbol } from './weapon';

export const JsonServiceSymbol = Symbol.for('JsonService');
export const JsonServicePersonSymbol = Symbol.for('JsonServicePerson');

export type Person = {
  name: string;
  age: number;
};

@injectable()
export class JsonService {
  // person: Person;

  constructor(
    @inject(WeaponSymbol) private _weapon: Weapon,
    @inject(JsonServicePersonSymbol) private person: Person,
  ) {
    // this.person = person;
  }

  getPersonName() {
    console.log('DEBUG: ', this._weapon.hit());
    return this.person.name;
  }
}
