export const WeaponSymbol = Symbol.for('Weapon');

export class Weapon {
  public hit() {
    return 'hit !';
  }
}
