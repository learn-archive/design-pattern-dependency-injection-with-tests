import { MainService, main } from './main';
import { mockWarrior } from './services/mocks/services.mock';

describe('main unit', () => {
  let mainService: MainService;

  beforeEach(() => {
    mainService = new MainService(mockWarrior());
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
