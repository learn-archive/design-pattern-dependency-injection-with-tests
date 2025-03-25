export interface IThrowableWeapon {
  cut: () => string;
}

export const ThrowableWeapon: IThrowableWeapon = {
  cut: (): string => {
    return 'cut!';
  },
};
