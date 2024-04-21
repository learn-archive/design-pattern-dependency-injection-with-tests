import { myContainer } from './container';
import { IWarrior } from './interfaces';
import { MainService, main } from './main';
import { TYPES } from './types';

describe('main unit', () => {
  let mainService: MainService;

  beforeEach(() => {
    const warrior = myContainer.get<IWarrior>(TYPES.Warrior);
    mainService = new MainService(warrior);
  });

  test('should cut', async () => {
    // Given
    // When
    const response = main();
    console.log('DEBUG: ', response);

    // Then
    expect(response).toEqual('cut!'); // true
  });

  test('should hit', async () => {
    // Given
    // When
    const response = mainService.hit();
    console.log('DEBUG: ', response);

    // Then
    expect(response).toEqual('hit!'); // true
  });
});
