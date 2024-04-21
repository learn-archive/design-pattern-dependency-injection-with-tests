export interface IThrowableWeapon {
  cut: () => string;
}

export const ThrowableWeapon: IThrowableWeapon = { cut };

function cut(): string {
  return 'cut!';
}
