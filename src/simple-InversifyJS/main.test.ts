import { main } from './main';
import { MainService, MainServiceSymbol } from './main-service';
import { module } from './module';

describe('main unit', () => {
  let mainService: MainService;

  beforeEach(() => {
    mainService = module.get<MainService>(MainServiceSymbol);
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

  test('should mock', async () => {
    // Given
    const mainServiceSpy = jest.spyOn(mainService, 'hit').mockImplementation();

    // When
    const response = mainService.hit();
    console.log('DEBUG: ', response);

    // Then
    expect(mainServiceSpy).toHaveBeenCalled();
    expect(response).toBeUndefined();
  });
});
