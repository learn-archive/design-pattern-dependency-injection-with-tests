import { MainService } from './main';
import { ThrowableWeapon } from './services/throwable-weapon';
import { Warrior } from './services/warrior';

describe('main unit', () => {
  // let mainService: MainService;

  // beforeEach(() => {
  //   mainService = module.get<MainService>(MainServiceSymbol);
  // });

  test('should cut', async () => {
    // Given
    // When
    const response = MainService.special({ Warrior, ThrowableWeapon });
    console.log('DEBUG: ', response);

    // Then
    expect(response).toEqual('cut!'); // true
  });

  // test('should mock', async () => {
  //   // Given
  //   const mainServiceSpy = jest.spyOn(mainService, 'hit').mockImplementation();

  //   // When
  //   const response = mainService.hit();
  //   console.log('DEBUG: ', response);

  //   // Then
  //   expect(mainServiceSpy).toHaveBeenCalled();
  //   expect(response).toBeUndefined();
  // });
});
