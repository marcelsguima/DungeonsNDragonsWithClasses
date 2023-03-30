import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Ranger extends Archetype {
  private static _allRanger = 0;
  private _energyType: EnergyType;

  constructor(
    name: string,
  ) {
    super(name);
    Ranger._allRanger += 1;
    this._energyType = 'stamina';
  }

  public get energyType(): EnergyType {
    return this._energyType;
  }

  public static createdArchetypeInstances(): number {
    return Ranger._allRanger;
  }
}