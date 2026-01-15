import { MockProxy, mock } from 'jest-mock-extended';
import { DeepPartial } from 'ts-essentials';

export function createMock<T>(mockImplementation?: DeepPartial<T>): MockProxy<T> {
  return mock<T>(mockImplementation as DeepPartial<T>);
}
