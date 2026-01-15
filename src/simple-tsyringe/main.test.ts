import { MainService, main } from './main';
import { App } from './services/app';
import { mockWarrior } from './services/services.mock';

describe('main unit', () => {
  let mainService: MainService;

  beforeEach(() => {
    mainService = new MainService(mockWarrior());
    jest.spyOn(App.prototype, 'fight').mockImplementation(() => 'fake fight !');
    jest.spyOn(App.prototype, 'sneak').mockImplementation(() => 'fake throw !');
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
