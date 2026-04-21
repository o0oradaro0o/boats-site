export interface ShipData {
  key: string;
  name: string;
  dbName?: string;
  icon: string;
  tier: number;
  price: number;
  heroImage: string | null;
  hp: number;
  hpRegen: number;
  speed: number;
  turnRate: number;
  bountyGold: number;
  abilities: string[];
}

export interface ShipsJson {
  ships: ShipData[];
}

export interface WeaponData {
  key: string;
  name: string;
  textureName: string;
  cost: number;
  type: string;
  tier: number;
  doubled: boolean;
  isMix: boolean;
  isUlt: boolean;
  dmg: number;
  dps: number;
  fireRate: number;
  range: number;
  aoe: number;
  projectileSpeed: number;
}

export interface HullData {
  key: string;
  name: string;
  textureName: string;
  cost: number;
  tier: number;
  bonusHp: number;
  bonusArmor: number;
}

export interface SailData {
  key: string;
  name: string;
  textureName: string;
  cost: number;
  tier: number;
  bonusMovement: number;
  burstSpeed: number;
}

export interface RepairData {
  key: string;
  name: string;
  textureName: string;
  cost: number;
  tier: number;
  bonusRegenPercent: number;
  healthRegen: number;
}

export interface WoodData {
  key: string;
  name: string;
  textureName: string;
  cost: number;
  tier: number;
  healAmount: number;
}

export interface ItemsJson {
  weapons: WeaponData[];
  hulls: HullData[];
  sails: SailData[];
  repairs: RepairData[];
  woods: WoodData[];
}

export interface AbilityData {
  key: string;
  description: string;
  textureName: string;
  cooldown: string;
  castRange: number;
  values: Record<string, string>;
}

export type AbilitiesJson = Record<string, AbilityData>;
