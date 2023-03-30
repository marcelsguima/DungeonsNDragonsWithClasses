import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Mage extends Archetype {
  private static _allMage = 0;
  private _energyType: EnergyType;

  constructor(
    name: string,
  ) {
    super(name);
    Mage._allMage += 1;
    this._energyType = 'mana';
  }

  public get energyType(): EnergyType {
    return this._energyType;
  }

  public static createdArchetypeInstances(): number {
    return Mage._allMage;
  }
}