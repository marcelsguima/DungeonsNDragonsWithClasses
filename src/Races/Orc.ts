import Race from './Race';

export default class Orc extends Race {
  private _maxLifePoints: number;
  private static _allOrc = 0;

  constructor(
    name: string,
    dexterity: number,
  ) {
    super(name, dexterity);
    this._maxLifePoints = 74;
    Orc._allOrc += 1;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public static createdRacesInstances(): number {
    return Orc._allOrc;
  }
}