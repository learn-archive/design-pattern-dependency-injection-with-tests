import { MainService, main } from './main';
import { ThrowableWeapon, Warrior, Weapon } from './services';

describe('main unit', () => {
  let mainService: MainService;

  beforeEach(() => {
    const warrior = new Warrior(new Weapon(), new ThrowableWeapon());
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
