export class Weapon {
  public hit() {
    return 'cut!';
  }
}

export class ThrowableWeapon {
  public throw() {
    return 'hit!';
  }
}

export class Warrior {
  constructor(
    private _weapon: Weapon,
    private _throwableWeapon: ThrowableWeapon,
  ) {}

  public fight() {
    return this._weapon.hit();
  }
  public sneak() {
    return this._throwableWeapon.throw();
  }
}
