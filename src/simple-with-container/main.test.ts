import { container } from './container';
import { containerTest } from './container-test';
import { main, MainService } from './main';
import { Warrior, WarriorSymbol } from './services/warrior';

describe('main unit', () => {
  let mainService: MainService;

  beforeEach(() => {
    mainService = new MainService(containerTest.resolve<Warrior>(WarriorSymbol));
    // TODO: Can't mock a resolver
    jest.spyOn(container.resolve<Warrior>(WarriorSymbol), 'fight').mockImplementation(() => 'fake fight !');
    jest.spyOn(container.resolve<Warrior>(WarriorSymbol), 'sneak').mockImplementation(() => 'fake sneak !');
  });

  test('should cut', async () => {
    // Given
    // When
    const response = main();
    console.log('DEBUG: ', response);

    // Then
    expect(response).toEqual('fake fight !'); // true
  });

  test('should hit', async () => {
    // Given
    // When
    const response = mainService.action();
    console.log('DEBUG: ', response);

    // Then
    expect(response).toEqual('fake sneak !'); // true
  });
});
