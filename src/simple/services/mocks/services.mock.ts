import { MockProxy, mock } from 'jest-mock-extended';
import { DeepPartial, DeepRequired } from 'ts-essentials';
import { ThrowableWeapon } from '../throwable-weapon';
import { Warrior } from '../warrior';
import { Weapon } from '../weapon';

export function createMock<T>(mockImplementation: DeepRequired<T>): MockProxy<T> {
  return mock<T>(mockImplementation as DeepPartial<T>);
}

export function mockWeapon(): MockProxy<Weapon> {
  return createMock<Weapon>({
    hit: jest.fn().mockImplementation(() => 'cut!'),
  });
}

export function mockThrowableWeapon(): MockProxy<ThrowableWeapon> {
  return createMock<ThrowableWeapon>({
    throw: jest.fn().mockImplementation(() => 'hit!'),
  });
}

export function mockWarrior(): MockProxy<Warrior> {
  return createMock<Warrior>({
    fight: jest.fn().mockImplementation(() => 'cut!'),
    sneak: jest.fn().mockImplementation(() => 'hit!'),
  });
}
