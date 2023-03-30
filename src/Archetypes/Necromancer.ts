import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Necromancer extends Archetype {
  private static _allNecromancer = 0;
  private _energyType: EnergyType;

  constructor(
    name: string,
  ) {
    super(name);
    Necromancer._allNecromancer += 1;
    this._energyType = 'mana';
  }

  public get energyType(): EnergyType {
    return this._energyType;
  }

  public static createdArchetypeInstances(): number {
    return Necromancer._allNecromancer;
  }
}