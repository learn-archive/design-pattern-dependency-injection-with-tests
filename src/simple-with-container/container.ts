import { MainServiceSymbol } from '@src/simple-InversifyJS/main-service';
import { MainService } from './main';
import { ThrowableWeapon, ThrowableWeaponSymbol } from './services/throwable-weapon';
import { Warrior, WarriorSymbol } from './services/warrior';
import { Weapon, WeaponSymbol } from './services/weapon';

export type ServiceIdentifier = string | symbol;

export class Container {
  private factories = new Map<ServiceIdentifier, () => any>();
  private singletons = new Map<ServiceIdentifier, any>();

  bind<T>(serviceIdentifier: ServiceIdentifier, factory: () => T) {
    this.factories.set(serviceIdentifier, factory);
  }

  bindSingleton<T>(serviceIdentifier: ServiceIdentifier, factory: () => T) {
    this.factories.set(serviceIdentifier, () => {
      if (!this.singletons.has(serviceIdentifier)) {
        this.singletons.set(serviceIdentifier, factory());
      }
      return this.singletons.get(serviceIdentifier);
    });
  }

  resolve<T>(serviceIdentifier: ServiceIdentifier): T {
    const factory = this.factories.get(serviceIdentifier);
    if (!factory) {
      throw new Error(`No provider registered for key: ${serviceIdentifier.toString()}`);
    }
    return factory();
  }
}

export const container = new Container();

container.bind(WeaponSymbol, () => new Weapon());
container.bind(ThrowableWeaponSymbol, () => new ThrowableWeapon());
container.bind(
  WarriorSymbol,
  () => new Warrior(container.resolve<Weapon>(WeaponSymbol), container.resolve<ThrowableWeapon>(ThrowableWeaponSymbol)),
);
container.bind(MainServiceSymbol, () => new MainService(container.resolve<Warrior>(WarriorSymbol)));
