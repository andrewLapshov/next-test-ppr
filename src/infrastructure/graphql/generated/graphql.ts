/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Achievement = {
  __typename?: 'Achievement';
  adjustedPlayersCompletedPercent: Maybe<Scalars['Float']['output']>;
  description: Maybe<Scalars['String']['output']>;
  hidden: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  normalizedRarity: Maybe<Scalars['String']['output']>;
  normalizedSide: Maybe<Scalars['String']['output']>;
  playersCompletedPercent: Scalars['Float']['output'];
  rarity: Maybe<Scalars['String']['output']>;
  side: Maybe<Scalars['String']['output']>;
};

export type Ammo = {
  __typename?: 'Ammo';
  /** @deprecated Use accuracyModifier instead. */
  accuracy: Maybe<Scalars['Int']['output']>;
  accuracyModifier: Maybe<Scalars['Float']['output']>;
  ammoType: Scalars['String']['output'];
  armorDamage: Scalars['Int']['output'];
  caliber: Maybe<Scalars['String']['output']>;
  damage: Scalars['Int']['output'];
  fragmentationChance: Scalars['Float']['output'];
  heavyBleedModifier: Scalars['Float']['output'];
  initialSpeed: Maybe<Scalars['Float']['output']>;
  item: Item;
  lightBleedModifier: Scalars['Float']['output'];
  penetrationChance: Scalars['Float']['output'];
  penetrationPower: Scalars['Int']['output'];
  penetrationPowerDeviation: Maybe<Scalars['Float']['output']>;
  projectileCount: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use recoilModifier instead. */
  recoil: Maybe<Scalars['Int']['output']>;
  recoilModifier: Maybe<Scalars['Float']['output']>;
  ricochetChance: Scalars['Float']['output'];
  stackMaxSize: Scalars['Int']['output'];
  staminaBurnPerDamage: Maybe<Scalars['Float']['output']>;
  tracer: Scalars['Boolean']['output'];
  tracerColor: Maybe<Scalars['String']['output']>;
  weight: Scalars['Float']['output'];
};

export type ArmorMaterial = {
  __typename?: 'ArmorMaterial';
  destructibility: Maybe<Scalars['Float']['output']>;
  explosionDestructibility: Maybe<Scalars['Float']['output']>;
  id: Maybe<Scalars['String']['output']>;
  maxRepairDegradation: Maybe<Scalars['Float']['output']>;
  maxRepairKitDegradation: Maybe<Scalars['Float']['output']>;
  minRepairDegradation: Maybe<Scalars['Float']['output']>;
  minRepairKitDegradation: Maybe<Scalars['Float']['output']>;
  name: Maybe<Scalars['String']['output']>;
};

export type AttributeThreshold = {
  __typename?: 'AttributeThreshold';
  name: Scalars['String']['output'];
  requirement: NumberCompare;
};

export type Barter = {
  __typename?: 'Barter';
  buyLimit: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  level: Scalars['Int']['output'];
  requiredItems: Array<Maybe<ContainedItem>>;
  /** @deprecated Use level instead. */
  requirements: Array<Maybe<PriceRequirement>>;
  rewardItems: Array<Maybe<ContainedItem>>;
  /** @deprecated Use trader and level instead. */
  source: Scalars['String']['output'];
  /** @deprecated Use trader instead. */
  sourceName: ItemSourceName;
  taskUnlock: Maybe<Task>;
  trader: Trader;
};

export type BossEscort = {
  __typename?: 'BossEscort';
  amount: Maybe<Array<Maybe<BossEscortAmount>>>;
  boss: MobInfo;
  /** @deprecated Use boss.name instead. */
  name: Scalars['String']['output'];
  /** @deprecated Use boss.normalizedName instead. */
  normalizedName: Scalars['String']['output'];
};

export type BossEscortAmount = {
  __typename?: 'BossEscortAmount';
  chance: Scalars['Float']['output'];
  count: Scalars['Int']['output'];
};

export type BossSpawn = {
  __typename?: 'BossSpawn';
  boss: MobInfo;
  escorts: Array<Maybe<BossEscort>>;
  /** @deprecated Use boss.name instead. */
  name: Scalars['String']['output'];
  /** @deprecated Use boss.normalizedName instead. */
  normalizedName: Scalars['String']['output'];
  spawnChance: Scalars['Float']['output'];
  spawnLocations: Array<Maybe<BossSpawnLocation>>;
  spawnTime: Maybe<Scalars['Int']['output']>;
  spawnTimeRandom: Maybe<Scalars['Boolean']['output']>;
  spawnTrigger: Maybe<Scalars['String']['output']>;
  switch: Maybe<MapSwitch>;
};

/**
 * The chances of spawning in a given location are
 * very rough estimates and may be incaccurate
 */
export type BossSpawnLocation = {
  __typename?: 'BossSpawnLocation';
  chance: Scalars['Float']['output'];
  name: Scalars['String']['output'];
  spawnKey: Scalars['String']['output'];
};

export type ContainedItem = {
  __typename?: 'ContainedItem';
  attributes: Maybe<Array<Maybe<ItemAttribute>>>;
  count: Scalars['Float']['output'];
  item: Item;
  quantity: Scalars['Float']['output'];
};

export type Craft = {
  __typename?: 'Craft';
  duration: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  level: Scalars['Int']['output'];
  requiredItems: Array<Maybe<ContainedItem>>;
  requiredQuestItems: Array<Maybe<QuestItem>>;
  /** @deprecated Use stationLevel instead. */
  requirements: Array<Maybe<PriceRequirement>>;
  rewardItems: Array<Maybe<ContainedItem>>;
  /** @deprecated Use stationLevel instead. */
  source: Scalars['String']['output'];
  /** @deprecated Use stationLevel instead. */
  sourceName: Scalars['String']['output'];
  station: HideoutStation;
  taskUnlock: Maybe<Task>;
};

export type FleaMarket = Vendor & {
  __typename?: 'FleaMarket';
  enabled: Scalars['Boolean']['output'];
  foundInRaidRequired: Maybe<Scalars['Boolean']['output']>;
  minPlayerLevel: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  normalizedName: Scalars['String']['output'];
  reputationLevels: Array<Maybe<FleaMarketReputationLevel>>;
  sellOfferFeeRate: Scalars['Float']['output'];
  sellRequirementFeeRate: Scalars['Float']['output'];
};

export type FleaMarketReputationLevel = {
  __typename?: 'FleaMarketReputationLevel';
  maxRep: Scalars['Float']['output'];
  minRep: Scalars['Float']['output'];
  offers: Scalars['Int']['output'];
  offersSpecialEditions: Scalars['Int']['output'];
};

export type GameMode =
  | 'pve'
  | 'regular';

export type GameProperty = {
  __typename?: 'GameProperty';
  arrayValue: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  key: Scalars['String']['output'];
  numericValue: Maybe<Scalars['Float']['output']>;
  objectValue: Maybe<Scalars['String']['output']>;
  stringValue: Maybe<Scalars['String']['output']>;
};

export type GoonReport = {
  __typename?: 'GoonReport';
  map: Maybe<Map>;
  timestamp: Maybe<Scalars['String']['output']>;
};

export type HandbookCategoryName =
  | 'Ammo'
  | 'AmmoPacks'
  | 'AssaultCarbines'
  | 'AssaultRifles'
  | 'AssaultScopes'
  | 'AuxiliaryParts'
  | 'Backpacks'
  | 'Barrels'
  | 'BarterItems'
  | 'Bipods'
  | 'BodyArmor'
  | 'BoltActionRifles'
  | 'BuildingMaterials'
  | 'ChargingHandles'
  | 'Collimators'
  | 'CompactCollimators'
  | 'Drinks'
  | 'ElectronicKeys'
  | 'Electronics'
  | 'EnergyElements'
  | 'Eyewear'
  | 'Facecovers'
  | 'FlammableMaterials'
  | 'FlashhidersBrakes'
  | 'Flashlights'
  | 'Food'
  | 'Foregrips'
  | 'FunctionalMods'
  | 'GasBlocks'
  | 'Gear'
  | 'GearComponents'
  | 'GearMods'
  | 'GrenadeLaunchers'
  | 'Handguards'
  | 'Headgear'
  | 'Headsets'
  | 'HouseholdMaterials'
  | 'InfoItems'
  | 'Injectors'
  | 'InjuryTreatment'
  | 'IronSights'
  | 'Keys'
  | 'LaserTargetPointers'
  | 'Launchers'
  | 'LightLaserDevices'
  | 'MachineGuns'
  | 'Magazines'
  | 'Maps'
  | 'MarksmanRifles'
  | 'MechanicalKeys'
  | 'MedicalSupplies'
  | 'Medication'
  | 'Medkits'
  | 'MeleeWeapons'
  | 'Money'
  | 'Mounts'
  | 'MuzzleAdapters'
  | 'MuzzleDevices'
  | 'Optics'
  | 'Others'
  | 'Pills'
  | 'PistolGrips'
  | 'Pistols'
  | 'Provisions'
  | 'QuestItems'
  | 'ReceiversSlides'
  | 'Rounds'
  | 'SMGs'
  | 'SecureContainers'
  | 'Shotguns'
  | 'Sights'
  | 'SpecialEquipment'
  | 'SpecialPurposeSights'
  | 'SpecialWeapons'
  | 'StocksChassis'
  | 'StorageContainers'
  | 'Suppressors'
  | 'TacticalComboDevices'
  | 'TacticalRigs'
  | 'Throwables'
  | 'Tools'
  | 'Valuables'
  | 'VitalParts'
  | 'WeaponPartsMods'
  | 'Weapons';

export type HealthEffect = {
  __typename?: 'HealthEffect';
  bodyParts: Array<Maybe<Scalars['String']['output']>>;
  effects: Array<Maybe<Scalars['String']['output']>>;
  time: Maybe<NumberCompare>;
};

export type HealthPart = {
  __typename?: 'HealthPart';
  bodyPart: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  max: Scalars['Int']['output'];
};

/** HideoutModule has been replaced with HideoutStation. */
export type HideoutModule = {
  __typename?: 'HideoutModule';
  /** @deprecated Use HideoutStation type instead. */
  id: Maybe<Scalars['Int']['output']>;
  itemRequirements: Array<Maybe<ContainedItem>>;
  level: Maybe<Scalars['Int']['output']>;
  moduleRequirements: Array<Maybe<HideoutModule>>;
  /** @deprecated Use HideoutStation type instead. */
  name: Maybe<Scalars['String']['output']>;
};

export type HideoutStation = {
  __typename?: 'HideoutStation';
  /** crafts is only available via the hideoutStations query. */
  crafts: Array<Maybe<Craft>>;
  id: Scalars['ID']['output'];
  imageLink: Maybe<Scalars['String']['output']>;
  levels: Array<Maybe<HideoutStationLevel>>;
  name: Scalars['String']['output'];
  normalizedName: Scalars['String']['output'];
  tarkovDataId: Maybe<Scalars['Int']['output']>;
};

export type HideoutStationBonus = {
  __typename?: 'HideoutStationBonus';
  name: Scalars['String']['output'];
  passive: Maybe<Scalars['Boolean']['output']>;
  production: Maybe<Scalars['Boolean']['output']>;
  skillName: Maybe<Scalars['String']['output']>;
  slotItems: Maybe<Array<Maybe<Item>>>;
  type: Scalars['String']['output'];
  value: Maybe<Scalars['Float']['output']>;
};

export type HideoutStationLevel = {
  __typename?: 'HideoutStationLevel';
  bonuses: Maybe<Array<Maybe<HideoutStationBonus>>>;
  constructionTime: Scalars['Int']['output'];
  /** crafts is only available via the hideoutStations query. */
  crafts: Array<Maybe<Craft>>;
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  itemRequirements: Array<Maybe<RequirementItem>>;
  level: Scalars['Int']['output'];
  skillRequirements: Array<Maybe<RequirementSkill>>;
  stationLevelRequirements: Array<Maybe<RequirementHideoutStationLevel>>;
  tarkovDataId: Maybe<Scalars['Int']['output']>;
  traderRequirements: Array<Maybe<RequirementTrader>>;
};

export type Item = {
  __typename?: 'Item';
  accuracyModifier: Maybe<Scalars['Float']['output']>;
  avg24hPrice: Maybe<Scalars['Int']['output']>;
  backgroundColor: Scalars['String']['output'];
  bartersFor: Array<Maybe<Barter>>;
  bartersUsing: Array<Maybe<Barter>>;
  baseImageLink: Maybe<Scalars['String']['output']>;
  basePrice: Scalars['Int']['output'];
  blocksHeadphones: Maybe<Scalars['Boolean']['output']>;
  /** @deprecated Use category instead. */
  bsgCategory: Maybe<ItemCategory>;
  bsgCategoryId: Maybe<Scalars['String']['output']>;
  buyFor: Maybe<Array<ItemPrice>>;
  categories: Array<Maybe<ItemCategory>>;
  category: Maybe<ItemCategory>;
  /** @deprecated No longer meaningful with inclusion of Item category. */
  categoryTop: Maybe<ItemCategory>;
  changeLast48h: Maybe<Scalars['Float']['output']>;
  changeLast48hPercent: Maybe<Scalars['Float']['output']>;
  conflictingItems: Maybe<Array<Maybe<Item>>>;
  conflictingSlotIds: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  containsItems: Maybe<Array<Maybe<ContainedItem>>>;
  craftsFor: Array<Maybe<Craft>>;
  craftsUsing: Array<Maybe<Craft>>;
  description: Maybe<Scalars['String']['output']>;
  ergonomicsModifier: Maybe<Scalars['Float']['output']>;
  fleaMarketFee: Maybe<Scalars['Int']['output']>;
  gridImageLink: Maybe<Scalars['String']['output']>;
  /** @deprecated Fallback handled automatically by gridImageLink. */
  gridImageLinkFallback: Scalars['String']['output'];
  handbookCategories: Array<Maybe<ItemCategory>>;
  hasGrid: Maybe<Scalars['Boolean']['output']>;
  height: Scalars['Int']['output'];
  high24hPrice: Maybe<Scalars['Int']['output']>;
  /** historicalPrices is only available via the item and items queries. */
  historicalPrices: Maybe<Array<Maybe<HistoricalPricePoint>>>;
  iconLink: Maybe<Scalars['String']['output']>;
  /** @deprecated Fallback handled automatically by iconLink. */
  iconLinkFallback: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  image8xLink: Maybe<Scalars['String']['output']>;
  image512pxLink: Maybe<Scalars['String']['output']>;
  /** @deprecated Use inspectImageLink instead. */
  imageLink: Maybe<Scalars['String']['output']>;
  /** @deprecated Fallback handled automatically by inspectImageLink. */
  imageLinkFallback: Scalars['String']['output'];
  inspectImageLink: Maybe<Scalars['String']['output']>;
  lastLowPrice: Maybe<Scalars['Int']['output']>;
  lastOfferCount: Maybe<Scalars['Int']['output']>;
  link: Maybe<Scalars['String']['output']>;
  loudness: Maybe<Scalars['Int']['output']>;
  low24hPrice: Maybe<Scalars['Int']['output']>;
  name: Maybe<Scalars['String']['output']>;
  normalizedName: Maybe<Scalars['String']['output']>;
  properties: Maybe<ItemProperties>;
  receivedFromTasks: Array<Maybe<Task>>;
  recoilModifier: Maybe<Scalars['Float']['output']>;
  sellFor: Maybe<Array<ItemPrice>>;
  shortName: Maybe<Scalars['String']['output']>;
  /** @deprecated Use sellFor instead. */
  traderPrices: Array<Maybe<TraderPrice>>;
  /** @deprecated Use the lang argument on queries instead. */
  translation: Maybe<ItemTranslation>;
  types: Array<Maybe<ItemType>>;
  updated: Maybe<Scalars['String']['output']>;
  usedInTasks: Array<Maybe<Task>>;
  velocity: Maybe<Scalars['Float']['output']>;
  weight: Maybe<Scalars['Float']['output']>;
  width: Scalars['Int']['output'];
  wikiLink: Maybe<Scalars['String']['output']>;
};


export type ItemFleaMarketFeeArgs = {
  count: InputMaybe<Scalars['Int']['input']>;
  hideoutManagementLevel: InputMaybe<Scalars['Int']['input']>;
  intelCenterLevel: InputMaybe<Scalars['Int']['input']>;
  price: InputMaybe<Scalars['Int']['input']>;
  requireAll: InputMaybe<Scalars['Boolean']['input']>;
};


export type ItemTranslationArgs = {
  languageCode: InputMaybe<LanguageCode>;
};

export type ItemArmorSlot = {
  nameId: Maybe<Scalars['String']['output']>;
  zones: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type ItemArmorSlotLocked = ItemArmorSlot & {
  __typename?: 'ItemArmorSlotLocked';
  armorType: Maybe<Scalars['String']['output']>;
  baseValue: Maybe<Scalars['Int']['output']>;
  bluntThroughput: Maybe<Scalars['Float']['output']>;
  class: Maybe<Scalars['Int']['output']>;
  durability: Maybe<Scalars['Int']['output']>;
  ergoPenalty: Maybe<Scalars['Float']['output']>;
  material: Maybe<ArmorMaterial>;
  name: Maybe<Scalars['String']['output']>;
  nameId: Maybe<Scalars['String']['output']>;
  repairCost: Maybe<Scalars['Int']['output']>;
  ricochetX: Maybe<Scalars['Float']['output']>;
  ricochetY: Maybe<Scalars['Float']['output']>;
  ricochetZ: Maybe<Scalars['Float']['output']>;
  speedPenalty: Maybe<Scalars['Float']['output']>;
  turnPenalty: Maybe<Scalars['Float']['output']>;
  zones: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type ItemArmorSlotOpen = ItemArmorSlot & {
  __typename?: 'ItemArmorSlotOpen';
  allowedPlates: Maybe<Array<Maybe<Item>>>;
  name: Maybe<Scalars['String']['output']>;
  nameId: Maybe<Scalars['String']['output']>;
  zones: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type ItemAttribute = {
  __typename?: 'ItemAttribute';
  name: Scalars['String']['output'];
  type: Scalars['String']['output'];
  value: Maybe<Scalars['String']['output']>;
};

export type ItemCategory = {
  __typename?: 'ItemCategory';
  children: Maybe<Array<Maybe<ItemCategory>>>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  normalizedName: Scalars['String']['output'];
  parent: Maybe<ItemCategory>;
};

export type ItemCategoryName =
  | 'Ammo'
  | 'AmmoContainer'
  | 'ArmBand'
  | 'Armor'
  | 'ArmorPlate'
  | 'ArmoredEquipment'
  | 'AssaultCarbine'
  | 'AssaultRifle'
  | 'AssaultScope'
  | 'AuxiliaryMod'
  | 'Backpack'
  | 'Barrel'
  | 'BarterItem'
  | 'Battery'
  | 'Bipod'
  | 'BuildingMaterial'
  | 'ChargingHandle'
  | 'ChestRig'
  | 'CombMuzzleDevice'
  | 'CombTactDevice'
  | 'CommonContainer'
  | 'CompactReflexSight'
  | 'Compass'
  | 'CompoundItem'
  | 'CultistAmulet'
  | 'CylinderMagazine'
  | 'Drink'
  | 'Drug'
  | 'Electronics'
  | 'Equipment'
  | 'EssentialMod'
  | 'FaceCover'
  | 'Flashhider'
  | 'Flashlight'
  | 'Flyer'
  | 'Food'
  | 'FoodAndDrink'
  | 'Foregrip'
  | 'Fuel'
  | 'FunctionalMod'
  | 'GasBlock'
  | 'GearMod'
  | 'GrenadeLauncher'
  | 'Handguard'
  | 'Handgun'
  | 'Headphones'
  | 'Headwear'
  | 'HouseholdGoods'
  | 'Info'
  | 'Ironsight'
  | 'Item'
  | 'Jewelry'
  | 'Key'
  | 'Keycard'
  | 'Knife'
  | 'LockingContainer'
  | 'Lubricant'
  | 'Machinegun'
  | 'Magazine'
  | 'Map'
  | 'MarkOfTheUnheard'
  | 'MarksmanRifle'
  | 'MechanicalKey'
  | 'MedicalItem'
  | 'MedicalSupplies'
  | 'Medikit'
  | 'Meds'
  | 'Money'
  | 'Mount'
  | 'Multitools'
  | 'MuzzleDevice'
  | 'NightVision'
  | 'Other'
  | 'PistolGrip'
  | 'PlantingKits'
  | 'PortContainer'
  | 'PortableRangeFinder'
  | 'RadioTransmitter'
  | 'RandomLootContainer'
  | 'Receiver'
  | 'ReflexSight'
  | 'RepairKits'
  | 'Revolver'
  | 'SMG'
  | 'Scope'
  | 'SearchableItem'
  | 'Shotgun'
  | 'Sights'
  | 'Silencer'
  | 'SniperRifle'
  | 'SpecialItem'
  | 'SpecialScope'
  | 'SpringDrivenCylinder'
  | 'StackableItem'
  | 'Stimulant'
  | 'Stock'
  | 'ThermalVision'
  | 'ThrowableWeapon'
  | 'Tool'
  | 'UBGL'
  | 'VisObservDevice'
  | 'Weapon'
  | 'WeaponMod';

export type ItemFilters = {
  __typename?: 'ItemFilters';
  allowedCategories: Array<Maybe<ItemCategory>>;
  allowedItems: Array<Maybe<Item>>;
  excludedCategories: Array<Maybe<ItemCategory>>;
  excludedItems: Array<Maybe<Item>>;
};

export type ItemPrice = {
  __typename?: 'ItemPrice';
  currency: Maybe<Scalars['String']['output']>;
  currencyItem: Maybe<Item>;
  price: Maybe<Scalars['Int']['output']>;
  priceRUB: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use vendor instead. */
  requirements: Array<Maybe<PriceRequirement>>;
  /** @deprecated Use vendor instead. */
  source: Maybe<ItemSourceName>;
  vendor: Vendor;
};

export type ItemProperties = ItemPropertiesAmmo | ItemPropertiesArmor | ItemPropertiesArmorAttachment | ItemPropertiesBackpack | ItemPropertiesBarrel | ItemPropertiesChestRig | ItemPropertiesContainer | ItemPropertiesFoodDrink | ItemPropertiesGlasses | ItemPropertiesGrenade | ItemPropertiesHeadphone | ItemPropertiesHeadwear | ItemPropertiesHelmet | ItemPropertiesKey | ItemPropertiesMagazine | ItemPropertiesMedKit | ItemPropertiesMedicalItem | ItemPropertiesMelee | ItemPropertiesNightVision | ItemPropertiesPainkiller | ItemPropertiesPreset | ItemPropertiesResource | ItemPropertiesScope | ItemPropertiesStim | ItemPropertiesSurgicalKit | ItemPropertiesWeapon | ItemPropertiesWeaponMod;

export type ItemPropertiesAmmo = {
  __typename?: 'ItemPropertiesAmmo';
  /** @deprecated Use accuracyModifier instead. */
  accuracy: Maybe<Scalars['Int']['output']>;
  accuracyModifier: Maybe<Scalars['Float']['output']>;
  ammoType: Maybe<Scalars['String']['output']>;
  armorDamage: Maybe<Scalars['Int']['output']>;
  ballisticCoeficient: Maybe<Scalars['Float']['output']>;
  bulletDiameterMilimeters: Maybe<Scalars['Float']['output']>;
  bulletMassGrams: Maybe<Scalars['Float']['output']>;
  caliber: Maybe<Scalars['String']['output']>;
  damage: Maybe<Scalars['Int']['output']>;
  durabilityBurnFactor: Maybe<Scalars['Float']['output']>;
  failureToFeedChance: Maybe<Scalars['Float']['output']>;
  fragmentationChance: Maybe<Scalars['Float']['output']>;
  heatFactor: Maybe<Scalars['Float']['output']>;
  heavyBleedModifier: Maybe<Scalars['Float']['output']>;
  initialSpeed: Maybe<Scalars['Float']['output']>;
  lightBleedModifier: Maybe<Scalars['Float']['output']>;
  misfireChance: Maybe<Scalars['Float']['output']>;
  penetrationChance: Maybe<Scalars['Float']['output']>;
  penetrationPower: Maybe<Scalars['Int']['output']>;
  penetrationPowerDeviation: Maybe<Scalars['Float']['output']>;
  projectileCount: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use recoilModifier instead. */
  recoil: Maybe<Scalars['Float']['output']>;
  recoilModifier: Maybe<Scalars['Float']['output']>;
  ricochetChance: Maybe<Scalars['Float']['output']>;
  stackMaxSize: Maybe<Scalars['Int']['output']>;
  staminaBurnPerDamage: Maybe<Scalars['Float']['output']>;
  tracer: Maybe<Scalars['Boolean']['output']>;
  tracerColor: Maybe<Scalars['String']['output']>;
};

export type ItemPropertiesArmor = {
  __typename?: 'ItemPropertiesArmor';
  armorSlots: Maybe<Array<Maybe<ItemArmorSlot>>>;
  armorType: Maybe<Scalars['String']['output']>;
  bluntThroughput: Maybe<Scalars['Float']['output']>;
  class: Maybe<Scalars['Int']['output']>;
  durability: Maybe<Scalars['Int']['output']>;
  ergoPenalty: Maybe<Scalars['Float']['output']>;
  material: Maybe<ArmorMaterial>;
  repairCost: Maybe<Scalars['Int']['output']>;
  speedPenalty: Maybe<Scalars['Float']['output']>;
  turnPenalty: Maybe<Scalars['Float']['output']>;
  zones: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type ItemPropertiesArmorAttachment = {
  __typename?: 'ItemPropertiesArmorAttachment';
  armorType: Maybe<Scalars['String']['output']>;
  blindnessProtection: Maybe<Scalars['Float']['output']>;
  bluntThroughput: Maybe<Scalars['Float']['output']>;
  class: Maybe<Scalars['Int']['output']>;
  durability: Maybe<Scalars['Int']['output']>;
  ergoPenalty: Maybe<Scalars['Float']['output']>;
  /** @deprecated Use zones instead. */
  headZones: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  material: Maybe<ArmorMaterial>;
  repairCost: Maybe<Scalars['Int']['output']>;
  slots: Maybe<Array<Maybe<ItemSlot>>>;
  speedPenalty: Maybe<Scalars['Float']['output']>;
  turnPenalty: Maybe<Scalars['Float']['output']>;
  zones: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type ItemPropertiesBackpack = {
  __typename?: 'ItemPropertiesBackpack';
  capacity: Maybe<Scalars['Int']['output']>;
  ergoPenalty: Maybe<Scalars['Float']['output']>;
  grids: Maybe<Array<Maybe<ItemStorageGrid>>>;
  /** @deprecated Use grids instead. */
  pouches: Maybe<Array<Maybe<ItemStorageGrid>>>;
  speedPenalty: Maybe<Scalars['Float']['output']>;
  turnPenalty: Maybe<Scalars['Float']['output']>;
};

export type ItemPropertiesBarrel = {
  __typename?: 'ItemPropertiesBarrel';
  /** @deprecated Use centerOfImpact, deviationCurve, and deviationMax instead. */
  accuracyModifier: Maybe<Scalars['Float']['output']>;
  centerOfImpact: Maybe<Scalars['Float']['output']>;
  deviationCurve: Maybe<Scalars['Float']['output']>;
  deviationMax: Maybe<Scalars['Float']['output']>;
  ergonomics: Maybe<Scalars['Float']['output']>;
  /** @deprecated Use recoilModifier instead. */
  recoil: Maybe<Scalars['Float']['output']>;
  recoilModifier: Maybe<Scalars['Float']['output']>;
  slots: Maybe<Array<Maybe<ItemSlot>>>;
};

export type ItemPropertiesChestRig = {
  __typename?: 'ItemPropertiesChestRig';
  armorSlots: Maybe<Array<Maybe<ItemArmorSlot>>>;
  armorType: Maybe<Scalars['String']['output']>;
  bluntThroughput: Maybe<Scalars['Float']['output']>;
  capacity: Maybe<Scalars['Int']['output']>;
  class: Maybe<Scalars['Int']['output']>;
  durability: Maybe<Scalars['Int']['output']>;
  ergoPenalty: Maybe<Scalars['Float']['output']>;
  grids: Maybe<Array<Maybe<ItemStorageGrid>>>;
  material: Maybe<ArmorMaterial>;
  /** @deprecated Use grids instead. */
  pouches: Maybe<Array<Maybe<ItemStorageGrid>>>;
  repairCost: Maybe<Scalars['Int']['output']>;
  speedPenalty: Maybe<Scalars['Float']['output']>;
  turnPenalty: Maybe<Scalars['Float']['output']>;
  zones: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type ItemPropertiesContainer = {
  __typename?: 'ItemPropertiesContainer';
  capacity: Maybe<Scalars['Int']['output']>;
  grids: Maybe<Array<Maybe<ItemStorageGrid>>>;
};

export type ItemPropertiesFoodDrink = {
  __typename?: 'ItemPropertiesFoodDrink';
  energy: Maybe<Scalars['Int']['output']>;
  hydration: Maybe<Scalars['Int']['output']>;
  stimEffects: Array<Maybe<StimEffect>>;
  units: Maybe<Scalars['Int']['output']>;
};

export type ItemPropertiesGlasses = {
  __typename?: 'ItemPropertiesGlasses';
  blindnessProtection: Maybe<Scalars['Float']['output']>;
  bluntThroughput: Maybe<Scalars['Float']['output']>;
  class: Maybe<Scalars['Int']['output']>;
  durability: Maybe<Scalars['Int']['output']>;
  material: Maybe<ArmorMaterial>;
  repairCost: Maybe<Scalars['Int']['output']>;
};

export type ItemPropertiesGrenade = {
  __typename?: 'ItemPropertiesGrenade';
  contusionRadius: Maybe<Scalars['Int']['output']>;
  fragments: Maybe<Scalars['Int']['output']>;
  fuse: Maybe<Scalars['Float']['output']>;
  maxExplosionDistance: Maybe<Scalars['Int']['output']>;
  minExplosionDistance: Maybe<Scalars['Int']['output']>;
  type: Maybe<Scalars['String']['output']>;
};

export type ItemPropertiesHeadphone = {
  __typename?: 'ItemPropertiesHeadphone';
  ambientVolume: Maybe<Scalars['Int']['output']>;
  compressorAttack: Maybe<Scalars['Int']['output']>;
  compressorGain: Maybe<Scalars['Int']['output']>;
  compressorRelease: Maybe<Scalars['Int']['output']>;
  compressorThreshold: Maybe<Scalars['Int']['output']>;
  compressorVolume: Maybe<Scalars['Int']['output']>;
  cutoffFrequency: Maybe<Scalars['Int']['output']>;
  distanceModifier: Maybe<Scalars['Float']['output']>;
  distortion: Maybe<Scalars['Float']['output']>;
  dryVolume: Maybe<Scalars['Int']['output']>;
  highFrequencyGain: Maybe<Scalars['Float']['output']>;
  resonance: Maybe<Scalars['Float']['output']>;
};

export type ItemPropertiesHeadwear = {
  __typename?: 'ItemPropertiesHeadwear';
  slots: Maybe<Array<Maybe<ItemSlot>>>;
};

export type ItemPropertiesHelmet = {
  __typename?: 'ItemPropertiesHelmet';
  armorSlots: Maybe<Array<Maybe<ItemArmorSlot>>>;
  armorType: Maybe<Scalars['String']['output']>;
  blindnessProtection: Maybe<Scalars['Float']['output']>;
  blocksHeadset: Maybe<Scalars['Boolean']['output']>;
  bluntThroughput: Maybe<Scalars['Float']['output']>;
  class: Maybe<Scalars['Int']['output']>;
  deafening: Maybe<Scalars['String']['output']>;
  durability: Maybe<Scalars['Int']['output']>;
  ergoPenalty: Maybe<Scalars['Float']['output']>;
  headZones: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  material: Maybe<ArmorMaterial>;
  repairCost: Maybe<Scalars['Int']['output']>;
  ricochetX: Maybe<Scalars['Float']['output']>;
  ricochetY: Maybe<Scalars['Float']['output']>;
  ricochetZ: Maybe<Scalars['Float']['output']>;
  slots: Maybe<Array<Maybe<ItemSlot>>>;
  speedPenalty: Maybe<Scalars['Float']['output']>;
  turnPenalty: Maybe<Scalars['Float']['output']>;
};

export type ItemPropertiesKey = {
  __typename?: 'ItemPropertiesKey';
  uses: Maybe<Scalars['Int']['output']>;
};

export type ItemPropertiesMagazine = {
  __typename?: 'ItemPropertiesMagazine';
  allowedAmmo: Maybe<Array<Maybe<Item>>>;
  ammoCheckModifier: Maybe<Scalars['Float']['output']>;
  capacity: Maybe<Scalars['Int']['output']>;
  ergonomics: Maybe<Scalars['Float']['output']>;
  loadModifier: Maybe<Scalars['Float']['output']>;
  malfunctionChance: Maybe<Scalars['Float']['output']>;
  /** @deprecated Use recoilModifier instead. */
  recoil: Maybe<Scalars['Float']['output']>;
  recoilModifier: Maybe<Scalars['Float']['output']>;
  slots: Maybe<Array<Maybe<ItemSlot>>>;
};

export type ItemPropertiesMedKit = {
  __typename?: 'ItemPropertiesMedKit';
  cures: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  hitpoints: Maybe<Scalars['Int']['output']>;
  hpCostHeavyBleeding: Maybe<Scalars['Int']['output']>;
  hpCostLightBleeding: Maybe<Scalars['Int']['output']>;
  maxHealPerUse: Maybe<Scalars['Int']['output']>;
  useTime: Maybe<Scalars['Int']['output']>;
};

export type ItemPropertiesMedicalItem = {
  __typename?: 'ItemPropertiesMedicalItem';
  cures: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  useTime: Maybe<Scalars['Int']['output']>;
  uses: Maybe<Scalars['Int']['output']>;
};

export type ItemPropertiesMelee = {
  __typename?: 'ItemPropertiesMelee';
  hitRadius: Maybe<Scalars['Float']['output']>;
  slashDamage: Maybe<Scalars['Int']['output']>;
  stabDamage: Maybe<Scalars['Int']['output']>;
};

export type ItemPropertiesNightVision = {
  __typename?: 'ItemPropertiesNightVision';
  diffuseIntensity: Maybe<Scalars['Float']['output']>;
  intensity: Maybe<Scalars['Float']['output']>;
  noiseIntensity: Maybe<Scalars['Float']['output']>;
  noiseScale: Maybe<Scalars['Float']['output']>;
};

export type ItemPropertiesPainkiller = {
  __typename?: 'ItemPropertiesPainkiller';
  cures: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  energyImpact: Maybe<Scalars['Int']['output']>;
  hydrationImpact: Maybe<Scalars['Int']['output']>;
  painkillerDuration: Maybe<Scalars['Int']['output']>;
  useTime: Maybe<Scalars['Int']['output']>;
  uses: Maybe<Scalars['Int']['output']>;
};

export type ItemPropertiesPreset = {
  __typename?: 'ItemPropertiesPreset';
  baseItem: Item;
  default: Maybe<Scalars['Boolean']['output']>;
  ergonomics: Maybe<Scalars['Float']['output']>;
  moa: Maybe<Scalars['Float']['output']>;
  recoilHorizontal: Maybe<Scalars['Int']['output']>;
  recoilVertical: Maybe<Scalars['Int']['output']>;
};

export type ItemPropertiesResource = {
  __typename?: 'ItemPropertiesResource';
  units: Maybe<Scalars['Int']['output']>;
};

export type ItemPropertiesScope = {
  __typename?: 'ItemPropertiesScope';
  ergonomics: Maybe<Scalars['Float']['output']>;
  /** @deprecated Use recoilModifier instead. */
  recoil: Maybe<Scalars['Float']['output']>;
  recoilModifier: Maybe<Scalars['Float']['output']>;
  sightModes: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  sightingRange: Maybe<Scalars['Int']['output']>;
  slots: Maybe<Array<Maybe<ItemSlot>>>;
  zoomLevels: Maybe<Array<Maybe<Array<Maybe<Scalars['Float']['output']>>>>>;
};

export type ItemPropertiesStim = {
  __typename?: 'ItemPropertiesStim';
  cures: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  stimEffects: Array<Maybe<StimEffect>>;
  useTime: Maybe<Scalars['Int']['output']>;
};

export type ItemPropertiesSurgicalKit = {
  __typename?: 'ItemPropertiesSurgicalKit';
  cures: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  maxLimbHealth: Maybe<Scalars['Float']['output']>;
  minLimbHealth: Maybe<Scalars['Float']['output']>;
  useTime: Maybe<Scalars['Int']['output']>;
  uses: Maybe<Scalars['Int']['output']>;
};

export type ItemPropertiesWeapon = {
  __typename?: 'ItemPropertiesWeapon';
  allowedAmmo: Maybe<Array<Maybe<Item>>>;
  caliber: Maybe<Scalars['String']['output']>;
  cameraRecoil: Maybe<Scalars['Float']['output']>;
  cameraSnap: Maybe<Scalars['Float']['output']>;
  centerOfImpact: Maybe<Scalars['Float']['output']>;
  convergence: Maybe<Scalars['Float']['output']>;
  defaultAmmo: Maybe<Item>;
  defaultErgonomics: Maybe<Scalars['Float']['output']>;
  defaultHeight: Maybe<Scalars['Int']['output']>;
  defaultPreset: Maybe<Item>;
  defaultRecoilHorizontal: Maybe<Scalars['Int']['output']>;
  defaultRecoilVertical: Maybe<Scalars['Int']['output']>;
  defaultWeight: Maybe<Scalars['Float']['output']>;
  defaultWidth: Maybe<Scalars['Int']['output']>;
  deviationCurve: Maybe<Scalars['Float']['output']>;
  deviationMax: Maybe<Scalars['Float']['output']>;
  effectiveDistance: Maybe<Scalars['Int']['output']>;
  ergonomics: Maybe<Scalars['Float']['output']>;
  fireModes: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  fireRate: Maybe<Scalars['Int']['output']>;
  maxDurability: Maybe<Scalars['Int']['output']>;
  presets: Maybe<Array<Maybe<Item>>>;
  recoilAngle: Maybe<Scalars['Int']['output']>;
  recoilDispersion: Maybe<Scalars['Int']['output']>;
  recoilHorizontal: Maybe<Scalars['Int']['output']>;
  recoilVertical: Maybe<Scalars['Int']['output']>;
  repairCost: Maybe<Scalars['Int']['output']>;
  sightingRange: Maybe<Scalars['Int']['output']>;
  slots: Maybe<Array<Maybe<ItemSlot>>>;
};

export type ItemPropertiesWeaponMod = {
  __typename?: 'ItemPropertiesWeaponMod';
  accuracyModifier: Maybe<Scalars['Float']['output']>;
  ergonomics: Maybe<Scalars['Float']['output']>;
  /** @deprecated Use recoilModifier instead. */
  recoil: Maybe<Scalars['Float']['output']>;
  recoilModifier: Maybe<Scalars['Float']['output']>;
  slots: Maybe<Array<Maybe<ItemSlot>>>;
};

export type ItemSlot = {
  __typename?: 'ItemSlot';
  filters: Maybe<ItemFilters>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  nameId: Scalars['String']['output'];
  required: Maybe<Scalars['Boolean']['output']>;
};

export type ItemSourceName =
  | 'fence'
  | 'fleaMarket'
  | 'jaeger'
  | 'mechanic'
  | 'peacekeeper'
  | 'prapor'
  | 'ragman'
  | 'ref'
  | 'skier'
  | 'therapist';

export type ItemStorageGrid = {
  __typename?: 'ItemStorageGrid';
  filters: ItemFilters;
  height: Scalars['Int']['output'];
  width: Scalars['Int']['output'];
};

/**
 * The below types are all deprecated and may not return current data.
 * ItemTranslation has been replaced with the lang argument on all queries
 */
export type ItemTranslation = {
  __typename?: 'ItemTranslation';
  /** @deprecated Use the lang argument on queries instead. */
  description: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the lang argument on queries instead. */
  name: Maybe<Scalars['String']['output']>;
  /** @deprecated Use the lang argument on queries instead. */
  shortName: Maybe<Scalars['String']['output']>;
};

export type ItemType =
  | 'ammo'
  | 'ammoBox'
  | 'any'
  | 'armor'
  | 'armorPlate'
  | 'backpack'
  | 'barter'
  | 'container'
  | 'glasses'
  | 'grenade'
  | 'gun'
  | 'headphones'
  | 'helmet'
  | 'injectors'
  | 'keys'
  | 'markedOnly'
  | 'meds'
  | 'mods'
  | 'noFlea'
  | 'pistolGrip'
  | 'preset'
  | 'provisions'
  | 'rig'
  | 'suppressor'
  | 'wearable';

export type LanguageCode =
  | 'cs'
  | 'de'
  | 'en'
  | 'es'
  | 'fr'
  | 'hu'
  | 'it'
  | 'ja'
  | 'ko'
  | 'pl'
  | 'pt'
  | 'ro'
  | 'ru'
  | 'sk'
  | 'tr'
  | 'zh';

export type Lock = {
  __typename?: 'Lock';
  bottom: Maybe<Scalars['Float']['output']>;
  key: Maybe<Item>;
  lockType: Maybe<Scalars['String']['output']>;
  needsPower: Maybe<Scalars['Boolean']['output']>;
  outline: Maybe<Array<Maybe<MapPosition>>>;
  position: Maybe<MapPosition>;
  top: Maybe<Scalars['Float']['output']>;
};

export type LootContainer = {
  __typename?: 'LootContainer';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  normalizedName: Scalars['String']['output'];
};

export type LootContainerPosition = {
  __typename?: 'LootContainerPosition';
  lootContainer: Maybe<LootContainer>;
  position: Maybe<MapPosition>;
};

export type LootLoosePosition = {
  __typename?: 'LootLoosePosition';
  items: Maybe<Array<Maybe<Item>>>;
  position: Maybe<MapPosition>;
};

export type Map = {
  __typename?: 'Map';
  accessKeys: Array<Maybe<Item>>;
  accessKeysMinPlayerLevel: Maybe<Scalars['Int']['output']>;
  artillery: Maybe<MapArtillerySettings>;
  bosses: Array<Maybe<BossSpawn>>;
  description: Maybe<Scalars['String']['output']>;
  enemies: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  extracts: Maybe<Array<Maybe<MapExtract>>>;
  hazards: Maybe<Array<Maybe<MapHazard>>>;
  id: Scalars['ID']['output'];
  locks: Maybe<Array<Maybe<Lock>>>;
  lootContainers: Maybe<Array<Maybe<LootContainerPosition>>>;
  lootLoose: Maybe<Array<Maybe<LootLoosePosition>>>;
  maxPlayerLevel: Maybe<Scalars['Int']['output']>;
  minPlayerLevel: Maybe<Scalars['Int']['output']>;
  name: Scalars['String']['output'];
  nameId: Maybe<Scalars['String']['output']>;
  normalizedName: Scalars['String']['output'];
  players: Maybe<Scalars['String']['output']>;
  raidDuration: Maybe<Scalars['Int']['output']>;
  spawns: Maybe<Array<Maybe<MapSpawn>>>;
  stationaryWeapons: Maybe<Array<Maybe<StationaryWeaponPosition>>>;
  switches: Maybe<Array<Maybe<MapSwitch>>>;
  tarkovDataId: Maybe<Scalars['ID']['output']>;
  transits: Maybe<Array<Maybe<MapTransit>>>;
  wiki: Maybe<Scalars['String']['output']>;
};

export type MapArtillerySettings = {
  __typename?: 'MapArtillerySettings';
  zones: Maybe<Array<Maybe<MapArtilleryZone>>>;
};

export type MapArtilleryZone = {
  __typename?: 'MapArtilleryZone';
  bottom: Maybe<Scalars['Float']['output']>;
  outline: Maybe<Array<Maybe<MapPosition>>>;
  position: Maybe<MapPosition>;
  /** @deprecated Use outline instead. */
  radius: Maybe<Scalars['Float']['output']>;
  top: Maybe<Scalars['Float']['output']>;
};

export type MapExtract = {
  __typename?: 'MapExtract';
  bottom: Maybe<Scalars['Float']['output']>;
  faction: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Maybe<Scalars['String']['output']>;
  outline: Maybe<Array<Maybe<MapPosition>>>;
  position: Maybe<MapPosition>;
  switches: Maybe<Array<Maybe<MapSwitch>>>;
  top: Maybe<Scalars['Float']['output']>;
};

export type MapHazard = {
  __typename?: 'MapHazard';
  bottom: Maybe<Scalars['Float']['output']>;
  hazardType: Maybe<Scalars['String']['output']>;
  name: Maybe<Scalars['String']['output']>;
  outline: Maybe<Array<Maybe<MapPosition>>>;
  position: Maybe<MapPosition>;
  top: Maybe<Scalars['Float']['output']>;
};

export type MapPosition = {
  __typename?: 'MapPosition';
  x: Scalars['Float']['output'];
  y: Scalars['Float']['output'];
  z: Scalars['Float']['output'];
};

export type MapSpawn = {
  __typename?: 'MapSpawn';
  categories: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  position: MapPosition;
  sides: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  zoneName: Maybe<Scalars['String']['output']>;
};

export type MapSwitch = {
  __typename?: 'MapSwitch';
  activatedBy: Maybe<MapSwitch>;
  activates: Maybe<Array<Maybe<MapSwitchOperation>>>;
  id: Scalars['ID']['output'];
  name: Maybe<Scalars['String']['output']>;
  position: Maybe<MapPosition>;
  switchType: Maybe<Scalars['String']['output']>;
};

export type MapSwitchOperation = {
  __typename?: 'MapSwitchOperation';
  operation: Maybe<Scalars['String']['output']>;
  target: Maybe<MapSwitchTarget>;
};

export type MapSwitchTarget = MapExtract | MapSwitch;

export type MapTransit = {
  __typename?: 'MapTransit';
  bottom: Maybe<Scalars['Float']['output']>;
  conditions: Maybe<Scalars['String']['output']>;
  description: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  map: Maybe<Map>;
  outline: Maybe<Array<Maybe<MapPosition>>>;
  position: Maybe<MapPosition>;
  top: Maybe<Scalars['Float']['output']>;
};

export type MapWithPosition = {
  __typename?: 'MapWithPosition';
  map: Maybe<Map>;
  positions: Maybe<Array<Maybe<MapPosition>>>;
};

export type Mastering = {
  __typename?: 'Mastering';
  id: Scalars['ID']['output'];
  level2: Maybe<Scalars['Int']['output']>;
  level3: Maybe<Scalars['Int']['output']>;
  weapons: Array<Maybe<Item>>;
};

export type MobInfo = {
  __typename?: 'MobInfo';
  /** equipment and items are estimates and may be inaccurate. */
  equipment: Array<Maybe<ContainedItem>>;
  health: Maybe<Array<Maybe<HealthPart>>>;
  id: Scalars['ID']['output'];
  imagePortraitLink: Maybe<Scalars['String']['output']>;
  imagePosterLink: Maybe<Scalars['String']['output']>;
  items: Array<Maybe<Item>>;
  name: Scalars['String']['output'];
  normalizedName: Scalars['String']['output'];
};

export type NumberCompare = {
  __typename?: 'NumberCompare';
  compareMethod: Scalars['String']['output'];
  value: Scalars['Float']['output'];
};

export type OfferUnlock = {
  __typename?: 'OfferUnlock';
  id: Scalars['ID']['output'];
  item: Item;
  level: Scalars['Int']['output'];
  trader: Trader;
};

export type PlayerLevel = {
  __typename?: 'PlayerLevel';
  exp: Scalars['Int']['output'];
  level: Scalars['Int']['output'];
};

export type PriceRequirement = {
  __typename?: 'PriceRequirement';
  stringValue: Maybe<Scalars['String']['output']>;
  type: RequirementType;
  value: Maybe<Scalars['Int']['output']>;
};

export type Query = {
  __typename?: 'Query';
  achievements: Array<Maybe<Achievement>>;
  ammo: Maybe<Array<Maybe<Ammo>>>;
  archivedItemPrices: Array<Maybe<HistoricalPricePoint>>;
  armorMaterials: Array<Maybe<ArmorMaterial>>;
  barters: Maybe<Array<Maybe<Barter>>>;
  bosses: Maybe<Array<Maybe<MobInfo>>>;
  crafts: Maybe<Array<Maybe<Craft>>>;
  fleaMarket: FleaMarket;
  goonReports: Array<Maybe<GoonReport>>;
  handbookCategories: Array<Maybe<ItemCategory>>;
  /** @deprecated Use hideoutStations instead. */
  hideoutModules: Maybe<Array<Maybe<HideoutModule>>>;
  hideoutStations: Array<Maybe<HideoutStation>>;
  historicalItemPrices: Array<Maybe<HistoricalPricePoint>>;
  item: Maybe<Item>;
  /** @deprecated Use item instead. */
  itemByNormalizedName: Maybe<Item>;
  itemCategories: Array<Maybe<ItemCategory>>;
  itemPrices: Array<Maybe<HistoricalPricePoint>>;
  items: Array<Maybe<Item>>;
  /** @deprecated Use items instead. */
  itemsByBsgCategoryId: Array<Maybe<Item>>;
  /** @deprecated Use items instead. */
  itemsByIDs: Maybe<Array<Maybe<Item>>>;
  /** @deprecated Use items instead. */
  itemsByName: Array<Maybe<Item>>;
  /** @deprecated Use items instead. */
  itemsByType: Array<Maybe<Item>>;
  lootContainers: Maybe<Array<Maybe<LootContainer>>>;
  maps: Array<Maybe<Map>>;
  mastering: Array<Maybe<Mastering>>;
  playerLevels: Array<Maybe<PlayerLevel>>;
  questItems: Maybe<Array<Maybe<QuestItem>>>;
  /** @deprecated Use tasks instead. */
  quests: Maybe<Array<Maybe<Quest>>>;
  skills: Array<Maybe<Skill>>;
  stationaryWeapons: Maybe<Array<Maybe<StationaryWeapon>>>;
  status: ServerStatus;
  task: Maybe<Task>;
  tasks: Array<Maybe<Task>>;
  /** @deprecated Use traders instead. */
  traderResetTimes: Maybe<Array<Maybe<TraderResetTime>>>;
  traders: Array<Maybe<Trader>>;
};


export type QueryAchievementsArgs = {
  lang: InputMaybe<LanguageCode>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
};


export type QueryAmmoArgs = {
  gameMode: InputMaybe<GameMode>;
  lang: InputMaybe<LanguageCode>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
};


export type QueryArchivedItemPricesArgs = {
  id: Scalars['ID']['input'];
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
};


export type QueryArmorMaterialsArgs = {
  lang: InputMaybe<LanguageCode>;
};


export type QueryBartersArgs = {
  gameMode: InputMaybe<GameMode>;
  lang: InputMaybe<LanguageCode>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
};


export type QueryBossesArgs = {
  gameMode: InputMaybe<GameMode>;
  lang: InputMaybe<LanguageCode>;
  limit: InputMaybe<Scalars['Int']['input']>;
  name: InputMaybe<Array<Scalars['String']['input']>>;
  offset: InputMaybe<Scalars['Int']['input']>;
};


export type QueryCraftsArgs = {
  gameMode: InputMaybe<GameMode>;
  lang: InputMaybe<LanguageCode>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
};


export type QueryFleaMarketArgs = {
  gameMode: InputMaybe<GameMode>;
  lang: InputMaybe<LanguageCode>;
};


export type QueryGoonReportsArgs = {
  gameMode: InputMaybe<GameMode>;
  lang: InputMaybe<LanguageCode>;
  limit: InputMaybe<Scalars['Int']['input']>;
  ofset: InputMaybe<Scalars['Int']['input']>;
};


export type QueryHandbookCategoriesArgs = {
  lang: InputMaybe<LanguageCode>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
};


export type QueryHideoutStationsArgs = {
  gameMode: InputMaybe<GameMode>;
  lang: InputMaybe<LanguageCode>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
};


export type QueryHistoricalItemPricesArgs = {
  days: InputMaybe<Scalars['Int']['input']>;
  gameMode: InputMaybe<GameMode>;
  id: Scalars['ID']['input'];
  lang: InputMaybe<LanguageCode>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
};


export type QueryItemArgs = {
  gameMode: InputMaybe<GameMode>;
  id: InputMaybe<Scalars['ID']['input']>;
  lang: InputMaybe<LanguageCode>;
  normalizedName: InputMaybe<Scalars['String']['input']>;
};


export type QueryItemByNormalizedNameArgs = {
  normalizedName: Scalars['String']['input'];
};


export type QueryItemCategoriesArgs = {
  lang: InputMaybe<LanguageCode>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
};


export type QueryItemPricesArgs = {
  gameMode: InputMaybe<GameMode>;
  id: Scalars['ID']['input'];
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
};


export type QueryItemsArgs = {
  bsgCategory: InputMaybe<Scalars['String']['input']>;
  bsgCategoryId: InputMaybe<Scalars['String']['input']>;
  bsgCategoryIds: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  categoryNames: InputMaybe<Array<InputMaybe<ItemCategoryName>>>;
  gameMode: InputMaybe<GameMode>;
  handbookCategoryNames: InputMaybe<Array<InputMaybe<HandbookCategoryName>>>;
  ids: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  lang: InputMaybe<LanguageCode>;
  limit: InputMaybe<Scalars['Int']['input']>;
  name: InputMaybe<Scalars['String']['input']>;
  names: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  offset: InputMaybe<Scalars['Int']['input']>;
  type: InputMaybe<ItemType>;
  types: InputMaybe<Array<InputMaybe<ItemType>>>;
};


export type QueryItemsByBsgCategoryIdArgs = {
  bsgCategoryId: Scalars['String']['input'];
};


export type QueryItemsByIDsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type QueryItemsByNameArgs = {
  name: Scalars['String']['input'];
};


export type QueryItemsByTypeArgs = {
  type: ItemType;
};


export type QueryLootContainersArgs = {
  lang: InputMaybe<LanguageCode>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
};


export type QueryMapsArgs = {
  enemies: InputMaybe<Array<Scalars['String']['input']>>;
  gameMode: InputMaybe<GameMode>;
  lang: InputMaybe<LanguageCode>;
  limit: InputMaybe<Scalars['Int']['input']>;
  name: InputMaybe<Array<Scalars['String']['input']>>;
  offset: InputMaybe<Scalars['Int']['input']>;
};


export type QueryMasteringArgs = {
  lang: InputMaybe<LanguageCode>;
};


export type QueryQuestItemsArgs = {
  lang: InputMaybe<LanguageCode>;
};


export type QuerySkillsArgs = {
  lang: InputMaybe<LanguageCode>;
};


export type QueryStationaryWeaponsArgs = {
  lang: InputMaybe<LanguageCode>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
};


export type QueryTaskArgs = {
  gameMode: InputMaybe<GameMode>;
  id: Scalars['ID']['input'];
  lang: InputMaybe<LanguageCode>;
};


export type QueryTasksArgs = {
  faction: InputMaybe<Scalars['String']['input']>;
  gameMode: InputMaybe<GameMode>;
  lang: InputMaybe<LanguageCode>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
};


export type QueryTradersArgs = {
  gameMode: InputMaybe<GameMode>;
  lang: InputMaybe<LanguageCode>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
};

/** Quest has been replaced with Task. */
export type Quest = {
  __typename?: 'Quest';
  /** @deprecated Use Task type instead. */
  exp: Scalars['Int']['output'];
  /** @deprecated Use Task type instead. */
  giver: Trader;
  /** @deprecated Use Task type instead. */
  id: Scalars['String']['output'];
  /** @deprecated Use Task type instead. */
  objectives: Array<Maybe<QuestObjective>>;
  /** @deprecated Use Task type instead. */
  reputation: Maybe<Array<QuestRewardReputation>>;
  /** @deprecated Use Task type instead. */
  requirements: Maybe<QuestRequirement>;
  /** @deprecated Use Task type instead. */
  title: Scalars['String']['output'];
  /** @deprecated Use Task type instead. */
  turnin: Trader;
  /** @deprecated Use Task type instead. */
  unlocks: Array<Maybe<Scalars['String']['output']>>;
  /** @deprecated Use Task type instead. */
  wikiLink: Scalars['String']['output'];
};

export type QuestItem = {
  __typename?: 'QuestItem';
  baseImageLink: Maybe<Scalars['String']['output']>;
  description: Maybe<Scalars['String']['output']>;
  gridImageLink: Maybe<Scalars['String']['output']>;
  height: Maybe<Scalars['Int']['output']>;
  iconLink: Maybe<Scalars['String']['output']>;
  id: Maybe<Scalars['ID']['output']>;
  image8xLink: Maybe<Scalars['String']['output']>;
  image512pxLink: Maybe<Scalars['String']['output']>;
  inspectImageLink: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  normalizedName: Maybe<Scalars['String']['output']>;
  shortName: Maybe<Scalars['String']['output']>;
  width: Maybe<Scalars['Int']['output']>;
};

/** QuestObjective has been replaced with TaskObjective. */
export type QuestObjective = {
  __typename?: 'QuestObjective';
  /** @deprecated Use Task type instead. */
  id: Maybe<Scalars['String']['output']>;
  /** @deprecated Use Task type instead. */
  location: Maybe<Scalars['String']['output']>;
  /** @deprecated Use Task type instead. */
  number: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use Task type instead. */
  target: Maybe<Array<Scalars['String']['output']>>;
  /** @deprecated Use Task type instead. */
  targetItem: Maybe<Item>;
  /** @deprecated Use Task type instead. */
  type: Scalars['String']['output'];
};

/** QuestRequirement has been replaced with TaskRequirement. */
export type QuestRequirement = {
  __typename?: 'QuestRequirement';
  /** @deprecated Use Task type instead. */
  level: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use Task type instead. */
  prerequisiteQuests: Array<Maybe<Array<Maybe<Quest>>>>;
  /** @deprecated Use Task type instead. */
  quests: Array<Maybe<Array<Maybe<Scalars['Int']['output']>>>>;
};

export type QuestRewardReputation = {
  __typename?: 'QuestRewardReputation';
  /** @deprecated Use Task type instead. */
  amount: Scalars['Float']['output'];
  /** @deprecated Use Task type instead. */
  trader: Trader;
};

export type RequirementHideoutStationLevel = {
  __typename?: 'RequirementHideoutStationLevel';
  id: Maybe<Scalars['ID']['output']>;
  level: Scalars['Int']['output'];
  station: HideoutStation;
};

export type RequirementItem = {
  __typename?: 'RequirementItem';
  attributes: Maybe<Array<Maybe<ItemAttribute>>>;
  count: Scalars['Int']['output'];
  id: Maybe<Scalars['ID']['output']>;
  item: Item;
  quantity: Scalars['Int']['output'];
};

export type RequirementSkill = {
  __typename?: 'RequirementSkill';
  id: Maybe<Scalars['ID']['output']>;
  level: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  skill: Skill;
};

export type RequirementTask = {
  __typename?: 'RequirementTask';
  id: Maybe<Scalars['ID']['output']>;
  task: Task;
};

export type RequirementTrader = {
  __typename?: 'RequirementTrader';
  compareMethod: Maybe<Scalars['String']['output']>;
  id: Maybe<Scalars['ID']['output']>;
  /** @deprecated Use value instead. */
  level: Maybe<Scalars['Int']['output']>;
  requirementType: Maybe<Scalars['String']['output']>;
  trader: Trader;
  value: Maybe<Scalars['Int']['output']>;
};

export type RequirementType =
  | 'loyaltyLevel'
  | 'playerLevel'
  | 'questCompleted'
  | 'stationLevel';

export type ServerStatus = {
  __typename?: 'ServerStatus';
  currentStatuses: Maybe<Array<Maybe<Status>>>;
  generalStatus: Maybe<Status>;
  messages: Maybe<Array<Maybe<StatusMessage>>>;
};

export type Skill = {
  __typename?: 'Skill';
  id: Maybe<Scalars['ID']['output']>;
  name: Maybe<Scalars['String']['output']>;
};

export type SkillLevel = {
  __typename?: 'SkillLevel';
  level: Scalars['Float']['output'];
  name: Scalars['String']['output'];
  skill: Skill;
};

export type StationaryWeapon = {
  __typename?: 'StationaryWeapon';
  id: Maybe<Scalars['ID']['output']>;
  name: Maybe<Scalars['String']['output']>;
  shortName: Maybe<Scalars['String']['output']>;
};

export type StationaryWeaponPosition = {
  __typename?: 'StationaryWeaponPosition';
  position: Maybe<MapPosition>;
  stationaryWeapon: Maybe<StationaryWeapon>;
};

export type Status = {
  __typename?: 'Status';
  message: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  status: Scalars['Int']['output'];
  statusCode: Scalars['String']['output'];
};

export type StatusCode =
  | 'Down'
  | 'OK'
  | 'Unstable'
  | 'Updating';

export type StatusMessage = {
  __typename?: 'StatusMessage';
  content: Scalars['String']['output'];
  solveTime: Maybe<Scalars['String']['output']>;
  statusCode: Scalars['String']['output'];
  time: Scalars['String']['output'];
  type: Scalars['Int']['output'];
};

export type StimEffect = {
  __typename?: 'StimEffect';
  chance: Scalars['Float']['output'];
  delay: Scalars['Int']['output'];
  duration: Scalars['Int']['output'];
  percent: Scalars['Boolean']['output'];
  skill: Maybe<Skill>;
  skillName: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
  value: Scalars['Float']['output'];
};

export type Task = {
  __typename?: 'Task';
  availableDelaySecondsMax: Maybe<Scalars['Int']['output']>;
  availableDelaySecondsMin: Maybe<Scalars['Int']['output']>;
  descriptionMessageId: Maybe<Scalars['String']['output']>;
  experience: Scalars['Int']['output'];
  factionName: Maybe<Scalars['String']['output']>;
  failConditions: Array<Maybe<TaskObjective>>;
  failMessageId: Maybe<Scalars['String']['output']>;
  failureOutcome: Maybe<TaskRewards>;
  finishRewards: Maybe<TaskRewards>;
  id: Maybe<Scalars['ID']['output']>;
  kappaRequired: Maybe<Scalars['Boolean']['output']>;
  lightkeeperRequired: Maybe<Scalars['Boolean']['output']>;
  map: Maybe<Map>;
  minPlayerLevel: Maybe<Scalars['Int']['output']>;
  name: Scalars['String']['output'];
  /** @deprecated Use requiredKeys on objectives instead. */
  neededKeys: Maybe<Array<Maybe<TaskKey>>>;
  normalizedName: Scalars['String']['output'];
  objectives: Array<Maybe<TaskObjective>>;
  restartable: Maybe<Scalars['Boolean']['output']>;
  startMessageId: Maybe<Scalars['String']['output']>;
  startRewards: Maybe<TaskRewards>;
  successMessageId: Maybe<Scalars['String']['output']>;
  tarkovDataId: Maybe<Scalars['Int']['output']>;
  taskImageLink: Maybe<Scalars['String']['output']>;
  taskRequirements: Array<Maybe<TaskStatusRequirement>>;
  trader: Trader;
  /** @deprecated Use traderRequirements instead. */
  traderLevelRequirements: Array<Maybe<RequirementTrader>>;
  traderRequirements: Array<Maybe<RequirementTrader>>;
  wikiLink: Maybe<Scalars['String']['output']>;
};

export type TaskKey = {
  __typename?: 'TaskKey';
  keys: Array<Maybe<Item>>;
  map: Maybe<Map>;
};

export type TaskObjective = {
  description: Scalars['String']['output'];
  id: Maybe<Scalars['ID']['output']>;
  maps: Array<Maybe<Map>>;
  optional: Scalars['Boolean']['output'];
  type: Scalars['String']['output'];
};

export type TaskObjectiveBasic = TaskObjective & {
  __typename?: 'TaskObjectiveBasic';
  description: Scalars['String']['output'];
  id: Maybe<Scalars['ID']['output']>;
  maps: Array<Maybe<Map>>;
  optional: Scalars['Boolean']['output'];
  requiredKeys: Maybe<Array<Maybe<Array<Maybe<Item>>>>>;
  type: Scalars['String']['output'];
  zones: Maybe<Array<Maybe<TaskZone>>>;
};

export type TaskObjectiveBuildItem = TaskObjective & {
  __typename?: 'TaskObjectiveBuildItem';
  attributes: Array<Maybe<AttributeThreshold>>;
  containsAll: Array<Maybe<Item>>;
  containsCategory: Array<Maybe<ItemCategory>>;
  /** @deprecated Use containsCategory instead. */
  containsOne: Array<Maybe<Item>>;
  description: Scalars['String']['output'];
  id: Maybe<Scalars['ID']['output']>;
  item: Item;
  maps: Array<Maybe<Map>>;
  optional: Scalars['Boolean']['output'];
  type: Scalars['String']['output'];
};

export type TaskObjectiveExperience = TaskObjective & {
  __typename?: 'TaskObjectiveExperience';
  count: Scalars['Int']['output'];
  description: Scalars['String']['output'];
  healthEffect: HealthEffect;
  id: Maybe<Scalars['ID']['output']>;
  maps: Array<Maybe<Map>>;
  optional: Scalars['Boolean']['output'];
  type: Scalars['String']['output'];
};

export type TaskObjectiveExtract = TaskObjective & {
  __typename?: 'TaskObjectiveExtract';
  count: Scalars['Int']['output'];
  description: Scalars['String']['output'];
  exitName: Maybe<Scalars['String']['output']>;
  exitStatus: Array<Maybe<Scalars['String']['output']>>;
  id: Maybe<Scalars['ID']['output']>;
  maps: Array<Maybe<Map>>;
  optional: Scalars['Boolean']['output'];
  requiredKeys: Maybe<Array<Maybe<Array<Maybe<Item>>>>>;
  type: Scalars['String']['output'];
  zoneNames: Array<Maybe<Scalars['String']['output']>>;
};

export type TaskObjectiveItem = TaskObjective & {
  __typename?: 'TaskObjectiveItem';
  count: Scalars['Int']['output'];
  description: Scalars['String']['output'];
  dogTagLevel: Maybe<Scalars['Int']['output']>;
  foundInRaid: Scalars['Boolean']['output'];
  id: Maybe<Scalars['ID']['output']>;
  /** @deprecated Use items instead. */
  item: Item;
  items: Array<Maybe<Item>>;
  maps: Array<Maybe<Map>>;
  maxDurability: Maybe<Scalars['Int']['output']>;
  minDurability: Maybe<Scalars['Int']['output']>;
  optional: Scalars['Boolean']['output'];
  requiredKeys: Maybe<Array<Maybe<Array<Maybe<Item>>>>>;
  type: Scalars['String']['output'];
  zones: Maybe<Array<Maybe<TaskZone>>>;
};

export type TaskObjectiveMark = TaskObjective & {
  __typename?: 'TaskObjectiveMark';
  description: Scalars['String']['output'];
  id: Maybe<Scalars['ID']['output']>;
  maps: Array<Maybe<Map>>;
  markerItem: Item;
  optional: Scalars['Boolean']['output'];
  requiredKeys: Maybe<Array<Maybe<Array<Maybe<Item>>>>>;
  type: Scalars['String']['output'];
  zones: Maybe<Array<Maybe<TaskZone>>>;
};

export type TaskObjectivePlayerLevel = TaskObjective & {
  __typename?: 'TaskObjectivePlayerLevel';
  description: Scalars['String']['output'];
  id: Maybe<Scalars['ID']['output']>;
  maps: Array<Maybe<Map>>;
  optional: Scalars['Boolean']['output'];
  playerLevel: Scalars['Int']['output'];
  type: Scalars['String']['output'];
};

export type TaskObjectiveQuestItem = TaskObjective & {
  __typename?: 'TaskObjectiveQuestItem';
  count: Scalars['Int']['output'];
  description: Scalars['String']['output'];
  id: Maybe<Scalars['ID']['output']>;
  maps: Array<Maybe<Map>>;
  optional: Scalars['Boolean']['output'];
  possibleLocations: Maybe<Array<Maybe<MapWithPosition>>>;
  questItem: QuestItem;
  requiredKeys: Maybe<Array<Maybe<Array<Maybe<Item>>>>>;
  type: Scalars['String']['output'];
  zones: Maybe<Array<Maybe<TaskZone>>>;
};

export type TaskObjectiveShoot = TaskObjective & {
  __typename?: 'TaskObjectiveShoot';
  bodyParts: Array<Maybe<Scalars['String']['output']>>;
  count: Scalars['Int']['output'];
  description: Scalars['String']['output'];
  distance: Maybe<NumberCompare>;
  enemyHealthEffect: Maybe<HealthEffect>;
  id: Maybe<Scalars['ID']['output']>;
  maps: Array<Maybe<Map>>;
  notWearing: Maybe<Array<Maybe<Item>>>;
  optional: Scalars['Boolean']['output'];
  playerHealthEffect: Maybe<HealthEffect>;
  requiredKeys: Maybe<Array<Maybe<Array<Maybe<Item>>>>>;
  shotType: Scalars['String']['output'];
  /** @deprecated Use targetNames instead. */
  target: Scalars['String']['output'];
  targetNames: Array<Maybe<Scalars['String']['output']>>;
  timeFromHour: Maybe<Scalars['Int']['output']>;
  timeUntilHour: Maybe<Scalars['Int']['output']>;
  type: Scalars['String']['output'];
  usingWeapon: Maybe<Array<Maybe<Item>>>;
  usingWeaponMods: Maybe<Array<Maybe<Array<Maybe<Item>>>>>;
  wearing: Maybe<Array<Maybe<Array<Maybe<Item>>>>>;
  zoneNames: Array<Maybe<Scalars['String']['output']>>;
  zones: Maybe<Array<Maybe<TaskZone>>>;
};

export type TaskObjectiveSkill = TaskObjective & {
  __typename?: 'TaskObjectiveSkill';
  description: Scalars['String']['output'];
  id: Maybe<Scalars['ID']['output']>;
  maps: Array<Maybe<Map>>;
  optional: Scalars['Boolean']['output'];
  skillLevel: SkillLevel;
  type: Scalars['String']['output'];
};

export type TaskObjectiveTaskStatus = TaskObjective & {
  __typename?: 'TaskObjectiveTaskStatus';
  description: Scalars['String']['output'];
  id: Maybe<Scalars['ID']['output']>;
  maps: Array<Maybe<Map>>;
  optional: Scalars['Boolean']['output'];
  status: Array<Maybe<Scalars['String']['output']>>;
  task: Task;
  type: Scalars['String']['output'];
};

export type TaskObjectiveTraderLevel = TaskObjective & {
  __typename?: 'TaskObjectiveTraderLevel';
  description: Scalars['String']['output'];
  id: Maybe<Scalars['ID']['output']>;
  level: Scalars['Int']['output'];
  maps: Array<Maybe<Map>>;
  optional: Scalars['Boolean']['output'];
  trader: Trader;
  type: Scalars['String']['output'];
};

export type TaskObjectiveTraderStanding = TaskObjective & {
  __typename?: 'TaskObjectiveTraderStanding';
  compareMethod: Scalars['String']['output'];
  description: Scalars['String']['output'];
  id: Maybe<Scalars['ID']['output']>;
  maps: Array<Maybe<Map>>;
  optional: Scalars['Boolean']['output'];
  trader: Trader;
  type: Scalars['String']['output'];
  value: Scalars['Int']['output'];
};

export type TaskObjectiveUseItem = TaskObjective & {
  __typename?: 'TaskObjectiveUseItem';
  compareMethod: Scalars['String']['output'];
  count: Scalars['Int']['output'];
  description: Scalars['String']['output'];
  id: Maybe<Scalars['ID']['output']>;
  maps: Array<Maybe<Map>>;
  optional: Scalars['Boolean']['output'];
  requiredKeys: Maybe<Array<Maybe<Array<Maybe<Item>>>>>;
  type: Scalars['String']['output'];
  useAny: Array<Maybe<Item>>;
  zoneNames: Array<Maybe<Scalars['String']['output']>>;
  zones: Maybe<Array<Maybe<TaskZone>>>;
};

export type TaskRewards = {
  __typename?: 'TaskRewards';
  craftUnlock: Array<Maybe<Craft>>;
  items: Array<Maybe<ContainedItem>>;
  offerUnlock: Array<Maybe<OfferUnlock>>;
  skillLevelReward: Array<Maybe<SkillLevel>>;
  traderStanding: Array<Maybe<TraderStanding>>;
  traderUnlock: Array<Maybe<Trader>>;
};

export type TaskStatusRequirement = {
  __typename?: 'TaskStatusRequirement';
  status: Array<Maybe<Scalars['String']['output']>>;
  task: Task;
};

export type TaskZone = {
  __typename?: 'TaskZone';
  bottom: Maybe<Scalars['Float']['output']>;
  id: Scalars['ID']['output'];
  map: Maybe<Map>;
  outline: Maybe<Array<Maybe<MapPosition>>>;
  position: Maybe<MapPosition>;
  top: Maybe<Scalars['Float']['output']>;
};

export type Trader = {
  __typename?: 'Trader';
  /** barters and cashOffers are only available via the traders query. */
  barters: Array<Maybe<Barter>>;
  cashOffers: Array<Maybe<TraderCashOffer>>;
  currency: Item;
  description: Maybe<Scalars['String']['output']>;
  discount: Scalars['Float']['output'];
  id: Scalars['ID']['output'];
  image4xLink: Maybe<Scalars['String']['output']>;
  imageLink: Maybe<Scalars['String']['output']>;
  levels: Array<TraderLevel>;
  name: Scalars['String']['output'];
  normalizedName: Scalars['String']['output'];
  reputationLevels: Array<Maybe<TraderReputationLevel>>;
  resetTime: Maybe<Scalars['String']['output']>;
  tarkovDataId: Maybe<Scalars['Int']['output']>;
};

export type TraderCashOffer = {
  __typename?: 'TraderCashOffer';
  buyLimit: Maybe<Scalars['Int']['output']>;
  currency: Maybe<Scalars['String']['output']>;
  currencyItem: Maybe<Item>;
  item: Item;
  minTraderLevel: Maybe<Scalars['Int']['output']>;
  price: Maybe<Scalars['Int']['output']>;
  priceRUB: Maybe<Scalars['Int']['output']>;
  taskUnlock: Maybe<Task>;
};

export type TraderLevel = {
  __typename?: 'TraderLevel';
  /** barters and cashOffers are only available via the traders query. */
  barters: Array<Maybe<Barter>>;
  cashOffers: Array<Maybe<TraderCashOffer>>;
  id: Scalars['ID']['output'];
  image4xLink: Maybe<Scalars['String']['output']>;
  imageLink: Maybe<Scalars['String']['output']>;
  insuranceRate: Maybe<Scalars['Float']['output']>;
  level: Scalars['Int']['output'];
  payRate: Scalars['Float']['output'];
  repairCostMultiplier: Maybe<Scalars['Float']['output']>;
  requiredCommerce: Scalars['Int']['output'];
  requiredPlayerLevel: Scalars['Int']['output'];
  requiredReputation: Scalars['Float']['output'];
};

export type TraderName =
  | 'fence'
  | 'jaeger'
  | 'mechanic'
  | 'peacekeeper'
  | 'prapor'
  | 'ragman'
  | 'ref'
  | 'skier'
  | 'therapist';

export type TraderOffer = Vendor & {
  __typename?: 'TraderOffer';
  buyLimit: Maybe<Scalars['Int']['output']>;
  minTraderLevel: Maybe<Scalars['Int']['output']>;
  name: Scalars['String']['output'];
  normalizedName: Scalars['String']['output'];
  taskUnlock: Maybe<Task>;
  trader: Trader;
};

/** TraderPrice is deprecated and replaced with ItemPrice. */
export type TraderPrice = {
  __typename?: 'TraderPrice';
  /** @deprecated Use item.buyFor instead. */
  currency: Scalars['String']['output'];
  /** @deprecated Use item.buyFor instead. */
  price: Scalars['Int']['output'];
  /** @deprecated Use item.buyFor instead. */
  priceRUB: Scalars['Int']['output'];
  /** @deprecated Use item.buyFor instead. */
  trader: Trader;
};

export type TraderReputationLevel = TraderReputationLevelFence;

export type TraderReputationLevelFence = {
  __typename?: 'TraderReputationLevelFence';
  availableScavExtracts: Maybe<Scalars['Int']['output']>;
  btrCoveringFireDiscount: Maybe<Scalars['Int']['output']>;
  btrDeliveryDiscount: Maybe<Scalars['Int']['output']>;
  btrDeliveryGridSize: Maybe<MapPosition>;
  btrEnabled: Maybe<Scalars['Boolean']['output']>;
  btrTaxiDiscount: Maybe<Scalars['Int']['output']>;
  extractPriceModifier: Maybe<Scalars['Float']['output']>;
  hostileBosses: Maybe<Scalars['Boolean']['output']>;
  hostileScavs: Maybe<Scalars['Boolean']['output']>;
  minimumReputation: Scalars['Int']['output'];
  priceModifier: Maybe<Scalars['Float']['output']>;
  scavAttackSupport: Maybe<Scalars['Boolean']['output']>;
  scavCaseTimeModifier: Maybe<Scalars['Float']['output']>;
  scavCooldownModifier: Maybe<Scalars['Float']['output']>;
  scavEquipmentSpawnChanceModifier: Maybe<Scalars['Float']['output']>;
  scavFollowChance: Maybe<Scalars['Float']['output']>;
};

/** TraderResetTime is deprecated and replaced with Trader. */
export type TraderResetTime = {
  __typename?: 'TraderResetTime';
  /** @deprecated Use Trader.name type instead. */
  name: Maybe<Scalars['String']['output']>;
  /** @deprecated Use Trader.resetTime type instead. */
  resetTimestamp: Maybe<Scalars['String']['output']>;
};

export type TraderStanding = {
  __typename?: 'TraderStanding';
  standing: Scalars['Float']['output'];
  trader: Trader;
};

export type Vendor = {
  name: Scalars['String']['output'];
  normalizedName: Scalars['String']['output'];
};

export type HistoricalPricePoint = {
  __typename?: 'historicalPricePoint';
  offerCount: Maybe<Scalars['Int']['output']>;
  offerCountMin: Maybe<Scalars['Int']['output']>;
  price: Maybe<Scalars['Int']['output']>;
  priceMin: Maybe<Scalars['Int']['output']>;
  timestamp: Maybe<Scalars['String']['output']>;
};

export type BaseSearchHideoutFragment = { __typename?: 'HideoutStation', id: string, name: string, normalizedName: string, imageLink: string | null };

export type BaseSearchItemFragment = { __typename?: 'Item', id: string, name: string | null, normalizedName: string | null, iconLink: string | null, categories: Array<{ __typename?: 'ItemCategory', normalizedName: string } | null> };

export type BaseSearchQuestFragment = { __typename?: 'Task', id: string | null, name: string, normalizedName: string, trader: { __typename?: 'Trader', name: string, imageLink: string | null } };

export type BaseHideoutLevelFieldsFragment = { __typename?: 'HideoutStationLevel', id: string, level: number, constructionTime: number, description: string, itemRequirements: Array<{ __typename?: 'RequirementItem', count: number, item: { __typename?: 'Item', id: string, name: string | null, shortName: string | null, normalizedName: string | null, iconLink: string | null, craftsFor: Array<{ __typename?: 'Craft', id: string } | null> } } | null>, stationLevelRequirements: Array<{ __typename?: 'RequirementHideoutStationLevel', id: string | null, level: number, station: { __typename?: 'HideoutStation', name: string, imageLink: string | null, normalizedName: string } } | null>, skillRequirements: Array<{ __typename?: 'RequirementSkill', name: string, level: number } | null>, traderRequirements: Array<{ __typename?: 'RequirementTrader', id: string | null, requirementType: string | null, compareMethod: string | null, value: number | null, trader: { __typename?: 'Trader', name: string, imageLink: string | null } } | null>, bonuses: Array<{ __typename?: 'HideoutStationBonus', name: string, passive: boolean | null, production: boolean | null, skillName: string | null, value: number | null } | null> | null };

export type BaseHideoutModuleFieldsFragment = { __typename?: 'HideoutStation', id: string, imageLink: string | null, name: string, normalizedName: string, levels: Array<{ __typename?: 'HideoutStationLevel', id: string, level: number, constructionTime: number, description: string, itemRequirements: Array<{ __typename?: 'RequirementItem', count: number, item: { __typename?: 'Item', id: string, name: string | null, shortName: string | null, normalizedName: string | null, iconLink: string | null, craftsFor: Array<{ __typename?: 'Craft', id: string } | null> } } | null>, stationLevelRequirements: Array<{ __typename?: 'RequirementHideoutStationLevel', id: string | null, level: number, station: { __typename?: 'HideoutStation', name: string, imageLink: string | null, normalizedName: string } } | null>, skillRequirements: Array<{ __typename?: 'RequirementSkill', name: string, level: number } | null>, traderRequirements: Array<{ __typename?: 'RequirementTrader', id: string | null, requirementType: string | null, compareMethod: string | null, value: number | null, trader: { __typename?: 'Trader', name: string, imageLink: string | null } } | null>, bonuses: Array<{ __typename?: 'HideoutStationBonus', name: string, passive: boolean | null, production: boolean | null, skillName: string | null, value: number | null } | null> | null } | null> };

export type ItemFieldsFragment = { __typename?: 'Item', id: string, name: string | null, normalizedName: string | null, shortName: string | null, description: string | null, inspectImageLink: string | null, iconLink: string | null, wikiLink: string | null, updated: string | null, avg24hPrice: number | null, craftsFor: Array<{ __typename?: 'Craft', id: string, duration: number, level: number, station: { __typename?: 'HideoutStation', normalizedName: string }, requiredItems: Array<{ __typename?: 'ContainedItem', count: number, item: { __typename?: 'Item', gridImageLink: string | null, shortName: string | null, normalizedName: string | null, name: string | null, sellFor: Array<{ __typename?: 'ItemPrice', currency: string | null, price: number | null, priceRUB: number | null, vendor: { __typename?: 'FleaMarket', normalizedName: string } | { __typename?: 'TraderOffer', minTraderLevel: number | null, normalizedName: string } }> | null }, attributes: Array<{ __typename?: 'ItemAttribute', type: string } | null> | null } | null>, rewardItems: Array<{ __typename?: 'ContainedItem', count: number, item: { __typename?: 'Item', gridImageLink: string | null, shortName: string | null, normalizedName: string | null, name: string | null, sellFor: Array<{ __typename?: 'ItemPrice', currency: string | null, price: number | null, priceRUB: number | null, vendor: { __typename?: 'FleaMarket', normalizedName: string } | { __typename?: 'TraderOffer', minTraderLevel: number | null, normalizedName: string } }> | null } } | null> } | null>, craftsUsing: Array<{ __typename?: 'Craft', id: string, duration: number, level: number, station: { __typename?: 'HideoutStation', normalizedName: string }, requiredItems: Array<{ __typename?: 'ContainedItem', count: number, item: { __typename?: 'Item', gridImageLink: string | null, shortName: string | null, normalizedName: string | null, name: string | null, sellFor: Array<{ __typename?: 'ItemPrice', currency: string | null, price: number | null, priceRUB: number | null, vendor: { __typename?: 'FleaMarket', normalizedName: string } | { __typename?: 'TraderOffer', minTraderLevel: number | null, normalizedName: string } }> | null }, attributes: Array<{ __typename?: 'ItemAttribute', type: string } | null> | null } | null>, rewardItems: Array<{ __typename?: 'ContainedItem', count: number, item: { __typename?: 'Item', gridImageLink: string | null, shortName: string | null, normalizedName: string | null, name: string | null, sellFor: Array<{ __typename?: 'ItemPrice', currency: string | null, price: number | null, priceRUB: number | null, vendor: { __typename?: 'FleaMarket', normalizedName: string } | { __typename?: 'TraderOffer', minTraderLevel: number | null, normalizedName: string } }> | null } } | null> } | null>, sellFor: Array<{ __typename?: 'ItemPrice', currency: string | null, price: number | null, priceRUB: number | null, vendor: { __typename?: 'FleaMarket', normalizedName: string } | { __typename?: 'TraderOffer', minTraderLevel: number | null, normalizedName: string } }> | null, buyFor: Array<{ __typename?: 'ItemPrice', currency: string | null, price: number | null, priceRUB: number | null, vendor: { __typename?: 'FleaMarket', normalizedName: string } | { __typename?: 'TraderOffer', minTraderLevel: number | null, normalizedName: string, taskUnlock: { __typename?: 'Task', normalizedName: string, name: string, id: string | null } | null } }> | null, bartersFor: Array<{ __typename?: 'Barter', id: string, level: number, requiredItems: Array<{ __typename?: 'ContainedItem', count: number, item: { __typename?: 'Item', gridImageLink: string | null, shortName: string | null, normalizedName: string | null, name: string | null, sellFor: Array<{ __typename?: 'ItemPrice', currency: string | null, price: number | null, priceRUB: number | null, vendor: { __typename?: 'FleaMarket', normalizedName: string } | { __typename?: 'TraderOffer', minTraderLevel: number | null, normalizedName: string } }> | null } } | null>, rewardItems: Array<{ __typename?: 'ContainedItem', count: number, item: { __typename?: 'Item', gridImageLink: string | null, shortName: string | null, normalizedName: string | null, name: string | null, sellFor: Array<{ __typename?: 'ItemPrice', currency: string | null, price: number | null, priceRUB: number | null, vendor: { __typename?: 'FleaMarket', normalizedName: string } | { __typename?: 'TraderOffer', minTraderLevel: number | null, normalizedName: string } }> | null } } | null>, trader: { __typename?: 'Trader', name: string, normalizedName: string, imageLink: string | null }, taskUnlock: { __typename?: 'Task', normalizedName: string, name: string, id: string | null } | null } | null>, bartersUsing: Array<{ __typename?: 'Barter', id: string, level: number, requiredItems: Array<{ __typename?: 'ContainedItem', count: number, item: { __typename?: 'Item', gridImageLink: string | null, shortName: string | null, normalizedName: string | null, name: string | null, sellFor: Array<{ __typename?: 'ItemPrice', currency: string | null, price: number | null, priceRUB: number | null, vendor: { __typename?: 'FleaMarket', normalizedName: string } | { __typename?: 'TraderOffer', minTraderLevel: number | null, normalizedName: string } }> | null } } | null>, rewardItems: Array<{ __typename?: 'ContainedItem', count: number, item: { __typename?: 'Item', gridImageLink: string | null, shortName: string | null, normalizedName: string | null, name: string | null, sellFor: Array<{ __typename?: 'ItemPrice', currency: string | null, price: number | null, priceRUB: number | null, vendor: { __typename?: 'FleaMarket', normalizedName: string } | { __typename?: 'TraderOffer', minTraderLevel: number | null, normalizedName: string } }> | null } } | null>, trader: { __typename?: 'Trader', name: string, normalizedName: string, imageLink: string | null }, taskUnlock: { __typename?: 'Task', normalizedName: string, name: string, id: string | null } | null } | null> };

export type ItemTrackerFieldsFragment = { __typename?: 'Item', id: string, name: string | null, normalizedName: string | null, shortName: string | null, description: string | null, gridImageLink: string | null, iconLink: string | null, wikiLink: string | null, updated: string | null, avg24hPrice: number | null, craftsFor: Array<{ __typename?: 'Craft', id: string, duration: number, level: number, station: { __typename?: 'HideoutStation', normalizedName: string }, requiredItems: Array<{ __typename?: 'ContainedItem', count: number, item: { __typename?: 'Item', gridImageLink: string | null, shortName: string | null, normalizedName: string | null, name: string | null, sellFor: Array<{ __typename?: 'ItemPrice', currency: string | null, price: number | null, priceRUB: number | null, vendor: { __typename?: 'FleaMarket', normalizedName: string } | { __typename?: 'TraderOffer', minTraderLevel: number | null, normalizedName: string } }> | null }, attributes: Array<{ __typename?: 'ItemAttribute', type: string } | null> | null } | null>, rewardItems: Array<{ __typename?: 'ContainedItem', count: number, item: { __typename?: 'Item', gridImageLink: string | null, shortName: string | null, normalizedName: string | null, name: string | null, sellFor: Array<{ __typename?: 'ItemPrice', currency: string | null, price: number | null, priceRUB: number | null, vendor: { __typename?: 'FleaMarket', normalizedName: string } | { __typename?: 'TraderOffer', minTraderLevel: number | null, normalizedName: string } }> | null } } | null> } | null>, craftsUsing: Array<{ __typename?: 'Craft', id: string, duration: number, level: number, station: { __typename?: 'HideoutStation', normalizedName: string }, requiredItems: Array<{ __typename?: 'ContainedItem', count: number, item: { __typename?: 'Item', gridImageLink: string | null, shortName: string | null, normalizedName: string | null, name: string | null, sellFor: Array<{ __typename?: 'ItemPrice', currency: string | null, price: number | null, priceRUB: number | null, vendor: { __typename?: 'FleaMarket', normalizedName: string } | { __typename?: 'TraderOffer', minTraderLevel: number | null, normalizedName: string } }> | null }, attributes: Array<{ __typename?: 'ItemAttribute', type: string } | null> | null } | null>, rewardItems: Array<{ __typename?: 'ContainedItem', count: number, item: { __typename?: 'Item', gridImageLink: string | null, shortName: string | null, normalizedName: string | null, name: string | null, sellFor: Array<{ __typename?: 'ItemPrice', currency: string | null, price: number | null, priceRUB: number | null, vendor: { __typename?: 'FleaMarket', normalizedName: string } | { __typename?: 'TraderOffer', minTraderLevel: number | null, normalizedName: string } }> | null } } | null> } | null>, sellFor: Array<{ __typename?: 'ItemPrice', currency: string | null, price: number | null, priceRUB: number | null, vendor: { __typename?: 'FleaMarket', normalizedName: string } | { __typename?: 'TraderOffer', minTraderLevel: number | null, normalizedName: string } }> | null, buyFor: Array<{ __typename?: 'ItemPrice', currency: string | null, price: number | null, priceRUB: number | null, vendor: { __typename?: 'FleaMarket', normalizedName: string } | { __typename?: 'TraderOffer', minTraderLevel: number | null, normalizedName: string, taskUnlock: { __typename?: 'Task', normalizedName: string, name: string, id: string | null } | null } }> | null, bartersFor: Array<{ __typename?: 'Barter', id: string, level: number, requiredItems: Array<{ __typename?: 'ContainedItem', count: number, item: { __typename?: 'Item', gridImageLink: string | null, shortName: string | null, normalizedName: string | null, name: string | null, sellFor: Array<{ __typename?: 'ItemPrice', currency: string | null, price: number | null, priceRUB: number | null, vendor: { __typename?: 'FleaMarket', normalizedName: string } | { __typename?: 'TraderOffer', minTraderLevel: number | null, normalizedName: string } }> | null } } | null>, rewardItems: Array<{ __typename?: 'ContainedItem', count: number, item: { __typename?: 'Item', gridImageLink: string | null, shortName: string | null, normalizedName: string | null, name: string | null, sellFor: Array<{ __typename?: 'ItemPrice', currency: string | null, price: number | null, priceRUB: number | null, vendor: { __typename?: 'FleaMarket', normalizedName: string } | { __typename?: 'TraderOffer', minTraderLevel: number | null, normalizedName: string } }> | null } } | null>, trader: { __typename?: 'Trader', name: string, normalizedName: string, imageLink: string | null }, taskUnlock: { __typename?: 'Task', normalizedName: string, name: string, id: string | null } | null } | null>, bartersUsing: Array<{ __typename?: 'Barter', id: string, level: number, requiredItems: Array<{ __typename?: 'ContainedItem', count: number, item: { __typename?: 'Item', gridImageLink: string | null, shortName: string | null, normalizedName: string | null, name: string | null, sellFor: Array<{ __typename?: 'ItemPrice', currency: string | null, price: number | null, priceRUB: number | null, vendor: { __typename?: 'FleaMarket', normalizedName: string } | { __typename?: 'TraderOffer', minTraderLevel: number | null, normalizedName: string } }> | null } } | null>, rewardItems: Array<{ __typename?: 'ContainedItem', count: number, item: { __typename?: 'Item', gridImageLink: string | null, shortName: string | null, normalizedName: string | null, name: string | null, sellFor: Array<{ __typename?: 'ItemPrice', currency: string | null, price: number | null, priceRUB: number | null, vendor: { __typename?: 'FleaMarket', normalizedName: string } | { __typename?: 'TraderOffer', minTraderLevel: number | null, normalizedName: string } }> | null } } | null>, trader: { __typename?: 'Trader', name: string, normalizedName: string, imageLink: string | null }, taskUnlock: { __typename?: 'Task', normalizedName: string, name: string, id: string | null } | null } | null> };

export type QuestRequirementsFragment = { __typename?: 'Task', id: string | null, name: string, normalizedName: string };

export type QuestFieldsFragment = { __typename?: 'Task', id: string | null, name: string, normalizedName: string, taskImageLink: string | null, kappaRequired: boolean | null, minPlayerLevel: number | null, experience: number, trader: { __typename?: 'Trader', imageLink: string | null, name: string, normalizedName: string }, objectives: Array<{ __typename?: 'TaskObjectiveBasic', id: string | null, description: string } | { __typename?: 'TaskObjectiveBuildItem', id: string | null, description: string } | { __typename?: 'TaskObjectiveExperience', id: string | null, description: string } | { __typename?: 'TaskObjectiveExtract', id: string | null, description: string } | { __typename?: 'TaskObjectiveItem', count: number, id: string | null, description: string } | { __typename?: 'TaskObjectiveMark', id: string | null, description: string } | { __typename?: 'TaskObjectivePlayerLevel', id: string | null, description: string } | { __typename?: 'TaskObjectiveQuestItem', id: string | null, description: string } | { __typename?: 'TaskObjectiveShoot', id: string | null, description: string } | { __typename?: 'TaskObjectiveSkill', id: string | null, description: string } | { __typename?: 'TaskObjectiveTaskStatus', id: string | null, description: string } | { __typename?: 'TaskObjectiveTraderLevel', id: string | null, description: string } | { __typename?: 'TaskObjectiveTraderStanding', id: string | null, description: string } | { __typename?: 'TaskObjectiveUseItem', id: string | null, description: string } | null>, taskRequirements: Array<{ __typename?: 'TaskStatusRequirement', status: Array<string | null>, task: { __typename?: 'Task', id: string | null, name: string, normalizedName: string } } | null>, startRewards: { __typename?: 'TaskRewards', craftUnlock: Array<{ __typename?: 'Craft', rewardItems: Array<{ __typename?: 'ContainedItem', item: { __typename?: 'Item', gridImageLink: string | null, shortName: string | null, normalizedName: string | null, name: string | null, sellFor: Array<{ __typename?: 'ItemPrice', currency: string | null, price: number | null, priceRUB: number | null, vendor: { __typename?: 'FleaMarket', normalizedName: string } | { __typename?: 'TraderOffer', minTraderLevel: number | null, normalizedName: string } }> | null } } | null> } | null>, items: Array<{ __typename?: 'ContainedItem', count: number, item: { __typename?: 'Item', gridImageLink: string | null, shortName: string | null, normalizedName: string | null, name: string | null, category: { __typename?: 'ItemCategory', normalizedName: string } | null, sellFor: Array<{ __typename?: 'ItemPrice', currency: string | null, price: number | null, priceRUB: number | null, vendor: { __typename?: 'FleaMarket', normalizedName: string } | { __typename?: 'TraderOffer', minTraderLevel: number | null, normalizedName: string } }> | null } } | null>, offerUnlock: Array<{ __typename?: 'OfferUnlock', id: string, level: number, item: { __typename?: 'Item', gridImageLink: string | null, shortName: string | null, normalizedName: string | null, name: string | null, sellFor: Array<{ __typename?: 'ItemPrice', currency: string | null, price: number | null, priceRUB: number | null, vendor: { __typename?: 'FleaMarket', normalizedName: string } | { __typename?: 'TraderOffer', minTraderLevel: number | null, normalizedName: string } }> | null }, trader: { __typename?: 'Trader', name: string, normalizedName: string, imageLink: string | null } } | null>, skillLevelReward: Array<{ __typename?: 'SkillLevel', level: number, name: string } | null>, traderStanding: Array<{ __typename?: 'TraderStanding', standing: number, trader: { __typename?: 'Trader', name: string, normalizedName: string, imageLink: string | null } } | null>, traderUnlock: Array<{ __typename?: 'Trader', name: string, normalizedName: string, imageLink: string | null } | null> } | null, finishRewards: { __typename?: 'TaskRewards', craftUnlock: Array<{ __typename?: 'Craft', rewardItems: Array<{ __typename?: 'ContainedItem', item: { __typename?: 'Item', gridImageLink: string | null, shortName: string | null, normalizedName: string | null, name: string | null, sellFor: Array<{ __typename?: 'ItemPrice', currency: string | null, price: number | null, priceRUB: number | null, vendor: { __typename?: 'FleaMarket', normalizedName: string } | { __typename?: 'TraderOffer', minTraderLevel: number | null, normalizedName: string } }> | null } } | null> } | null>, items: Array<{ __typename?: 'ContainedItem', count: number, item: { __typename?: 'Item', gridImageLink: string | null, shortName: string | null, normalizedName: string | null, name: string | null, category: { __typename?: 'ItemCategory', normalizedName: string } | null, sellFor: Array<{ __typename?: 'ItemPrice', currency: string | null, price: number | null, priceRUB: number | null, vendor: { __typename?: 'FleaMarket', normalizedName: string } | { __typename?: 'TraderOffer', minTraderLevel: number | null, normalizedName: string } }> | null } } | null>, offerUnlock: Array<{ __typename?: 'OfferUnlock', id: string, level: number, item: { __typename?: 'Item', gridImageLink: string | null, shortName: string | null, normalizedName: string | null, name: string | null, sellFor: Array<{ __typename?: 'ItemPrice', currency: string | null, price: number | null, priceRUB: number | null, vendor: { __typename?: 'FleaMarket', normalizedName: string } | { __typename?: 'TraderOffer', minTraderLevel: number | null, normalizedName: string } }> | null }, trader: { __typename?: 'Trader', name: string, normalizedName: string, imageLink: string | null } } | null>, skillLevelReward: Array<{ __typename?: 'SkillLevel', level: number, name: string } | null>, traderStanding: Array<{ __typename?: 'TraderStanding', standing: number, trader: { __typename?: 'Trader', name: string, normalizedName: string, imageLink: string | null } } | null>, traderUnlock: Array<{ __typename?: 'Trader', name: string, normalizedName: string, imageLink: string | null } | null> } | null, failureOutcome: { __typename?: 'TaskRewards', craftUnlock: Array<{ __typename?: 'Craft', rewardItems: Array<{ __typename?: 'ContainedItem', item: { __typename?: 'Item', gridImageLink: string | null, shortName: string | null, normalizedName: string | null, name: string | null, sellFor: Array<{ __typename?: 'ItemPrice', currency: string | null, price: number | null, priceRUB: number | null, vendor: { __typename?: 'FleaMarket', normalizedName: string } | { __typename?: 'TraderOffer', minTraderLevel: number | null, normalizedName: string } }> | null } } | null> } | null>, items: Array<{ __typename?: 'ContainedItem', count: number, item: { __typename?: 'Item', gridImageLink: string | null, shortName: string | null, normalizedName: string | null, name: string | null, category: { __typename?: 'ItemCategory', normalizedName: string } | null, sellFor: Array<{ __typename?: 'ItemPrice', currency: string | null, price: number | null, priceRUB: number | null, vendor: { __typename?: 'FleaMarket', normalizedName: string } | { __typename?: 'TraderOffer', minTraderLevel: number | null, normalizedName: string } }> | null } } | null>, offerUnlock: Array<{ __typename?: 'OfferUnlock', id: string, level: number, item: { __typename?: 'Item', gridImageLink: string | null, shortName: string | null, normalizedName: string | null, name: string | null, sellFor: Array<{ __typename?: 'ItemPrice', currency: string | null, price: number | null, priceRUB: number | null, vendor: { __typename?: 'FleaMarket', normalizedName: string } | { __typename?: 'TraderOffer', minTraderLevel: number | null, normalizedName: string } }> | null }, trader: { __typename?: 'Trader', name: string, normalizedName: string, imageLink: string | null } } | null>, skillLevelReward: Array<{ __typename?: 'SkillLevel', level: number, name: string } | null>, traderStanding: Array<{ __typename?: 'TraderStanding', standing: number, trader: { __typename?: 'Trader', name: string, normalizedName: string, imageLink: string | null } } | null>, traderUnlock: Array<{ __typename?: 'Trader', name: string, normalizedName: string, imageLink: string | null } | null> } | null };

export type BaseQuestTraderFieldsFragment = { __typename?: 'Trader', name: string, normalizedName: string, imageLink: string | null };

export type BaseQuestRewardsFragment = { __typename?: 'TaskRewards', craftUnlock: Array<{ __typename?: 'Craft', rewardItems: Array<{ __typename?: 'ContainedItem', item: { __typename?: 'Item', gridImageLink: string | null, shortName: string | null, normalizedName: string | null, name: string | null, sellFor: Array<{ __typename?: 'ItemPrice', currency: string | null, price: number | null, priceRUB: number | null, vendor: { __typename?: 'FleaMarket', normalizedName: string } | { __typename?: 'TraderOffer', minTraderLevel: number | null, normalizedName: string } }> | null } } | null> } | null>, items: Array<{ __typename?: 'ContainedItem', count: number, item: { __typename?: 'Item', gridImageLink: string | null, shortName: string | null, normalizedName: string | null, name: string | null, category: { __typename?: 'ItemCategory', normalizedName: string } | null, sellFor: Array<{ __typename?: 'ItemPrice', currency: string | null, price: number | null, priceRUB: number | null, vendor: { __typename?: 'FleaMarket', normalizedName: string } | { __typename?: 'TraderOffer', minTraderLevel: number | null, normalizedName: string } }> | null } } | null>, offerUnlock: Array<{ __typename?: 'OfferUnlock', id: string, level: number, item: { __typename?: 'Item', gridImageLink: string | null, shortName: string | null, normalizedName: string | null, name: string | null, sellFor: Array<{ __typename?: 'ItemPrice', currency: string | null, price: number | null, priceRUB: number | null, vendor: { __typename?: 'FleaMarket', normalizedName: string } | { __typename?: 'TraderOffer', minTraderLevel: number | null, normalizedName: string } }> | null }, trader: { __typename?: 'Trader', name: string, normalizedName: string, imageLink: string | null } } | null>, skillLevelReward: Array<{ __typename?: 'SkillLevel', level: number, name: string } | null>, traderStanding: Array<{ __typename?: 'TraderStanding', standing: number, trader: { __typename?: 'Trader', name: string, normalizedName: string, imageLink: string | null } } | null>, traderUnlock: Array<{ __typename?: 'Trader', name: string, normalizedName: string, imageLink: string | null } | null> };

export type QuestItemFieldsFragment = { __typename?: 'Item', id: string, name: string | null, normalizedName: string | null, shortName: string | null, gridImageLink: string | null, craftsFor: Array<{ __typename?: 'Craft', id: string, duration: number, level: number, station: { __typename?: 'HideoutStation', normalizedName: string }, requiredItems: Array<{ __typename?: 'ContainedItem', count: number, item: { __typename?: 'Item', gridImageLink: string | null, shortName: string | null, normalizedName: string | null, name: string | null, sellFor: Array<{ __typename?: 'ItemPrice', currency: string | null, price: number | null, priceRUB: number | null, vendor: { __typename?: 'FleaMarket', normalizedName: string } | { __typename?: 'TraderOffer', minTraderLevel: number | null, normalizedName: string } }> | null }, attributes: Array<{ __typename?: 'ItemAttribute', type: string } | null> | null } | null>, rewardItems: Array<{ __typename?: 'ContainedItem', count: number, item: { __typename?: 'Item', gridImageLink: string | null, shortName: string | null, normalizedName: string | null, name: string | null, sellFor: Array<{ __typename?: 'ItemPrice', currency: string | null, price: number | null, priceRUB: number | null, vendor: { __typename?: 'FleaMarket', normalizedName: string } | { __typename?: 'TraderOffer', minTraderLevel: number | null, normalizedName: string } }> | null } } | null> } | null> };

export type HideoutQueryQueryVariables = Exact<{
  lang: InputMaybe<LanguageCode>;
}>;


export type HideoutQueryQuery = { __typename?: 'Query', hideoutStations: Array<{ __typename?: 'HideoutStation', id: string, imageLink: string | null, name: string, normalizedName: string, levels: Array<{ __typename?: 'HideoutStationLevel', id: string, level: number, constructionTime: number, description: string, itemRequirements: Array<{ __typename?: 'RequirementItem', count: number, item: { __typename?: 'Item', id: string, name: string | null, shortName: string | null, normalizedName: string | null, iconLink: string | null, craftsFor: Array<{ __typename?: 'Craft', id: string } | null> } } | null>, stationLevelRequirements: Array<{ __typename?: 'RequirementHideoutStationLevel', id: string | null, level: number, station: { __typename?: 'HideoutStation', name: string, imageLink: string | null, normalizedName: string } } | null>, skillRequirements: Array<{ __typename?: 'RequirementSkill', name: string, level: number } | null>, traderRequirements: Array<{ __typename?: 'RequirementTrader', id: string | null, requirementType: string | null, compareMethod: string | null, value: number | null, trader: { __typename?: 'Trader', name: string, imageLink: string | null } } | null>, bonuses: Array<{ __typename?: 'HideoutStationBonus', name: string, passive: boolean | null, production: boolean | null, skillName: string | null, value: number | null } | null> | null } | null> } | null> };

export type BaseHideoutItemFieldsFragment = { __typename?: 'Item', id: string, name: string | null, shortName: string | null, normalizedName: string | null, iconLink: string | null, craftsFor: Array<{ __typename?: 'Craft', id: string } | null> };

export type AllItemsQueryVariables = Exact<{
  lang: InputMaybe<LanguageCode>;
}>;


export type AllItemsQuery = { __typename?: 'Query', items: Array<{ __typename?: 'Item', id: string, name: string | null, normalizedName: string | null, shortName: string | null, description: string | null, inspectImageLink: string | null, gridImageLink: string | null, iconLink: string | null, wikiLink: string | null, updated: string | null, avg24hPrice: number | null, categories: Array<{ __typename?: 'ItemCategory', normalizedName: string } | null>, craftsFor: Array<{ __typename?: 'Craft', id: string, duration: number, level: number, station: { __typename?: 'HideoutStation', normalizedName: string }, requiredItems: Array<{ __typename?: 'ContainedItem', count: number, item: { __typename?: 'Item', gridImageLink: string | null, shortName: string | null, normalizedName: string | null, name: string | null, sellFor: Array<{ __typename?: 'ItemPrice', currency: string | null, price: number | null, priceRUB: number | null, vendor: { __typename?: 'FleaMarket', normalizedName: string } | { __typename?: 'TraderOffer', minTraderLevel: number | null, normalizedName: string } }> | null }, attributes: Array<{ __typename?: 'ItemAttribute', type: string } | null> | null } | null>, rewardItems: Array<{ __typename?: 'ContainedItem', count: number, item: { __typename?: 'Item', gridImageLink: string | null, shortName: string | null, normalizedName: string | null, name: string | null, sellFor: Array<{ __typename?: 'ItemPrice', currency: string | null, price: number | null, priceRUB: number | null, vendor: { __typename?: 'FleaMarket', normalizedName: string } | { __typename?: 'TraderOffer', minTraderLevel: number | null, normalizedName: string } }> | null } } | null> } | null>, craftsUsing: Array<{ __typename?: 'Craft', id: string, duration: number, level: number, station: { __typename?: 'HideoutStation', normalizedName: string }, requiredItems: Array<{ __typename?: 'ContainedItem', count: number, item: { __typename?: 'Item', gridImageLink: string | null, shortName: string | null, normalizedName: string | null, name: string | null, sellFor: Array<{ __typename?: 'ItemPrice', currency: string | null, price: number | null, priceRUB: number | null, vendor: { __typename?: 'FleaMarket', normalizedName: string } | { __typename?: 'TraderOffer', minTraderLevel: number | null, normalizedName: string } }> | null }, attributes: Array<{ __typename?: 'ItemAttribute', type: string } | null> | null } | null>, rewardItems: Array<{ __typename?: 'ContainedItem', count: number, item: { __typename?: 'Item', gridImageLink: string | null, shortName: string | null, normalizedName: string | null, name: string | null, sellFor: Array<{ __typename?: 'ItemPrice', currency: string | null, price: number | null, priceRUB: number | null, vendor: { __typename?: 'FleaMarket', normalizedName: string } | { __typename?: 'TraderOffer', minTraderLevel: number | null, normalizedName: string } }> | null } } | null> } | null>, sellFor: Array<{ __typename?: 'ItemPrice', currency: string | null, price: number | null, priceRUB: number | null, vendor: { __typename?: 'FleaMarket', normalizedName: string } | { __typename?: 'TraderOffer', minTraderLevel: number | null, normalizedName: string } }> | null, buyFor: Array<{ __typename?: 'ItemPrice', currency: string | null, price: number | null, priceRUB: number | null, vendor: { __typename?: 'FleaMarket', normalizedName: string } | { __typename?: 'TraderOffer', minTraderLevel: number | null, normalizedName: string, taskUnlock: { __typename?: 'Task', normalizedName: string, name: string, id: string | null } | null } }> | null, bartersFor: Array<{ __typename?: 'Barter', id: string, level: number, requiredItems: Array<{ __typename?: 'ContainedItem', count: number, item: { __typename?: 'Item', gridImageLink: string | null, shortName: string | null, normalizedName: string | null, name: string | null, sellFor: Array<{ __typename?: 'ItemPrice', currency: string | null, price: number | null, priceRUB: number | null, vendor: { __typename?: 'FleaMarket', normalizedName: string } | { __typename?: 'TraderOffer', minTraderLevel: number | null, normalizedName: string } }> | null } } | null>, rewardItems: Array<{ __typename?: 'ContainedItem', count: number, item: { __typename?: 'Item', gridImageLink: string | null, shortName: string | null, normalizedName: string | null, name: string | null, sellFor: Array<{ __typename?: 'ItemPrice', currency: string | null, price: number | null, priceRUB: number | null, vendor: { __typename?: 'FleaMarket', normalizedName: string } | { __typename?: 'TraderOffer', minTraderLevel: number | null, normalizedName: string } }> | null } } | null>, trader: { __typename?: 'Trader', name: string, normalizedName: string, imageLink: string | null }, taskUnlock: { __typename?: 'Task', normalizedName: string, name: string, id: string | null } | null } | null>, bartersUsing: Array<{ __typename?: 'Barter', id: string, level: number, requiredItems: Array<{ __typename?: 'ContainedItem', count: number, item: { __typename?: 'Item', gridImageLink: string | null, shortName: string | null, normalizedName: string | null, name: string | null, sellFor: Array<{ __typename?: 'ItemPrice', currency: string | null, price: number | null, priceRUB: number | null, vendor: { __typename?: 'FleaMarket', normalizedName: string } | { __typename?: 'TraderOffer', minTraderLevel: number | null, normalizedName: string } }> | null } } | null>, rewardItems: Array<{ __typename?: 'ContainedItem', count: number, item: { __typename?: 'Item', gridImageLink: string | null, shortName: string | null, normalizedName: string | null, name: string | null, sellFor: Array<{ __typename?: 'ItemPrice', currency: string | null, price: number | null, priceRUB: number | null, vendor: { __typename?: 'FleaMarket', normalizedName: string } | { __typename?: 'TraderOffer', minTraderLevel: number | null, normalizedName: string } }> | null } } | null>, trader: { __typename?: 'Trader', name: string, normalizedName: string, imageLink: string | null }, taskUnlock: { __typename?: 'Task', normalizedName: string, name: string, id: string | null } | null } | null>, properties: { __typename?: 'ItemPropertiesAmmo' } | { __typename?: 'ItemPropertiesArmor' } | { __typename?: 'ItemPropertiesArmorAttachment' } | { __typename?: 'ItemPropertiesBackpack' } | { __typename?: 'ItemPropertiesBarrel' } | { __typename?: 'ItemPropertiesChestRig' } | { __typename?: 'ItemPropertiesContainer' } | { __typename?: 'ItemPropertiesFoodDrink' } | { __typename?: 'ItemPropertiesGlasses' } | { __typename?: 'ItemPropertiesGrenade' } | { __typename?: 'ItemPropertiesHeadphone' } | { __typename?: 'ItemPropertiesHeadwear' } | { __typename?: 'ItemPropertiesHelmet' } | { __typename?: 'ItemPropertiesKey' } | { __typename?: 'ItemPropertiesMagazine' } | { __typename?: 'ItemPropertiesMedKit' } | { __typename?: 'ItemPropertiesMedicalItem' } | { __typename?: 'ItemPropertiesMelee' } | { __typename?: 'ItemPropertiesNightVision' } | { __typename?: 'ItemPropertiesPainkiller' } | { __typename?: 'ItemPropertiesPreset', baseItem: { __typename?: 'Item', description: string | null } } | { __typename?: 'ItemPropertiesResource' } | { __typename?: 'ItemPropertiesScope' } | { __typename?: 'ItemPropertiesStim' } | { __typename?: 'ItemPropertiesSurgicalKit' } | { __typename?: 'ItemPropertiesWeapon', defaultPreset: { __typename?: 'Item', id: string, name: string | null, normalizedName: string | null, shortName: string | null, description: string | null, inspectImageLink: string | null, gridImageLink: string | null, iconLink: string | null, wikiLink: string | null, updated: string | null, avg24hPrice: number | null, categories: Array<{ __typename?: 'ItemCategory', normalizedName: string } | null>, craftsFor: Array<{ __typename?: 'Craft', id: string, duration: number, level: number, station: { __typename?: 'HideoutStation', normalizedName: string }, requiredItems: Array<{ __typename?: 'ContainedItem', count: number, item: { __typename?: 'Item', gridImageLink: string | null, shortName: string | null, normalizedName: string | null, name: string | null, sellFor: Array<{ __typename?: 'ItemPrice', currency: string | null, price: number | null, priceRUB: number | null, vendor: { __typename?: 'FleaMarket', normalizedName: string } | { __typename?: 'TraderOffer', minTraderLevel: number | null, normalizedName: string } }> | null }, attributes: Array<{ __typename?: 'ItemAttribute', type: string } | null> | null } | null>, rewardItems: Array<{ __typename?: 'ContainedItem', count: number, item: { __typename?: 'Item', gridImageLink: string | null, shortName: string | null, normalizedName: string | null, name: string | null, sellFor: Array<{ __typename?: 'ItemPrice', currency: string | null, price: number | null, priceRUB: number | null, vendor: { __typename?: 'FleaMarket', normalizedName: string } | { __typename?: 'TraderOffer', minTraderLevel: number | null, normalizedName: string } }> | null } } | null> } | null>, craftsUsing: Array<{ __typename?: 'Craft', id: string, duration: number, level: number, station: { __typename?: 'HideoutStation', normalizedName: string }, requiredItems: Array<{ __typename?: 'ContainedItem', count: number, item: { __typename?: 'Item', gridImageLink: string | null, shortName: string | null, normalizedName: string | null, name: string | null, sellFor: Array<{ __typename?: 'ItemPrice', currency: string | null, price: number | null, priceRUB: number | null, vendor: { __typename?: 'FleaMarket', normalizedName: string } | { __typename?: 'TraderOffer', minTraderLevel: number | null, normalizedName: string } }> | null }, attributes: Array<{ __typename?: 'ItemAttribute', type: string } | null> | null } | null>, rewardItems: Array<{ __typename?: 'ContainedItem', count: number, item: { __typename?: 'Item', gridImageLink: string | null, shortName: string | null, normalizedName: string | null, name: string | null, sellFor: Array<{ __typename?: 'ItemPrice', currency: string | null, price: number | null, priceRUB: number | null, vendor: { __typename?: 'FleaMarket', normalizedName: string } | { __typename?: 'TraderOffer', minTraderLevel: number | null, normalizedName: string } }> | null } } | null> } | null>, sellFor: Array<{ __typename?: 'ItemPrice', currency: string | null, price: number | null, priceRUB: number | null, vendor: { __typename?: 'FleaMarket', normalizedName: string } | { __typename?: 'TraderOffer', minTraderLevel: number | null, normalizedName: string } }> | null, buyFor: Array<{ __typename?: 'ItemPrice', currency: string | null, price: number | null, priceRUB: number | null, vendor: { __typename?: 'FleaMarket', normalizedName: string } | { __typename?: 'TraderOffer', minTraderLevel: number | null, normalizedName: string, taskUnlock: { __typename?: 'Task', normalizedName: string, name: string, id: string | null } | null } }> | null, bartersFor: Array<{ __typename?: 'Barter', id: string, level: number, requiredItems: Array<{ __typename?: 'ContainedItem', count: number, item: { __typename?: 'Item', gridImageLink: string | null, shortName: string | null, normalizedName: string | null, name: string | null, sellFor: Array<{ __typename?: 'ItemPrice', currency: string | null, price: number | null, priceRUB: number | null, vendor: { __typename?: 'FleaMarket', normalizedName: string } | { __typename?: 'TraderOffer', minTraderLevel: number | null, normalizedName: string } }> | null } } | null>, rewardItems: Array<{ __typename?: 'ContainedItem', count: number, item: { __typename?: 'Item', gridImageLink: string | null, shortName: string | null, normalizedName: string | null, name: string | null, sellFor: Array<{ __typename?: 'ItemPrice', currency: string | null, price: number | null, priceRUB: number | null, vendor: { __typename?: 'FleaMarket', normalizedName: string } | { __typename?: 'TraderOffer', minTraderLevel: number | null, normalizedName: string } }> | null } } | null>, trader: { __typename?: 'Trader', name: string, normalizedName: string, imageLink: string | null }, taskUnlock: { __typename?: 'Task', normalizedName: string, name: string, id: string | null } | null } | null>, bartersUsing: Array<{ __typename?: 'Barter', id: string, level: number, requiredItems: Array<{ __typename?: 'ContainedItem', count: number, item: { __typename?: 'Item', gridImageLink: string | null, shortName: string | null, normalizedName: string | null, name: string | null, sellFor: Array<{ __typename?: 'ItemPrice', currency: string | null, price: number | null, priceRUB: number | null, vendor: { __typename?: 'FleaMarket', normalizedName: string } | { __typename?: 'TraderOffer', minTraderLevel: number | null, normalizedName: string } }> | null } } | null>, rewardItems: Array<{ __typename?: 'ContainedItem', count: number, item: { __typename?: 'Item', gridImageLink: string | null, shortName: string | null, normalizedName: string | null, name: string | null, sellFor: Array<{ __typename?: 'ItemPrice', currency: string | null, price: number | null, priceRUB: number | null, vendor: { __typename?: 'FleaMarket', normalizedName: string } | { __typename?: 'TraderOffer', minTraderLevel: number | null, normalizedName: string } }> | null } } | null>, trader: { __typename?: 'Trader', name: string, normalizedName: string, imageLink: string | null }, taskUnlock: { __typename?: 'Task', normalizedName: string, name: string, id: string | null } | null } | null> } | null, presets: Array<{ __typename?: 'Item', craftsFor: Array<{ __typename?: 'Craft', id: string, duration: number, level: number, station: { __typename?: 'HideoutStation', normalizedName: string }, requiredItems: Array<{ __typename?: 'ContainedItem', count: number, item: { __typename?: 'Item', gridImageLink: string | null, shortName: string | null, normalizedName: string | null, name: string | null, sellFor: Array<{ __typename?: 'ItemPrice', currency: string | null, price: number | null, priceRUB: number | null, vendor: { __typename?: 'FleaMarket', normalizedName: string } | { __typename?: 'TraderOffer', minTraderLevel: number | null, normalizedName: string } }> | null }, attributes: Array<{ __typename?: 'ItemAttribute', type: string } | null> | null } | null>, rewardItems: Array<{ __typename?: 'ContainedItem', count: number, item: { __typename?: 'Item', gridImageLink: string | null, shortName: string | null, normalizedName: string | null, name: string | null, sellFor: Array<{ __typename?: 'ItemPrice', currency: string | null, price: number | null, priceRUB: number | null, vendor: { __typename?: 'FleaMarket', normalizedName: string } | { __typename?: 'TraderOffer', minTraderLevel: number | null, normalizedName: string } }> | null } } | null> } | null>, craftsUsing: Array<{ __typename?: 'Craft', id: string, duration: number, level: number, station: { __typename?: 'HideoutStation', normalizedName: string }, requiredItems: Array<{ __typename?: 'ContainedItem', count: number, item: { __typename?: 'Item', gridImageLink: string | null, shortName: string | null, normalizedName: string | null, name: string | null, sellFor: Array<{ __typename?: 'ItemPrice', currency: string | null, price: number | null, priceRUB: number | null, vendor: { __typename?: 'FleaMarket', normalizedName: string } | { __typename?: 'TraderOffer', minTraderLevel: number | null, normalizedName: string } }> | null }, attributes: Array<{ __typename?: 'ItemAttribute', type: string } | null> | null } | null>, rewardItems: Array<{ __typename?: 'ContainedItem', count: number, item: { __typename?: 'Item', gridImageLink: string | null, shortName: string | null, normalizedName: string | null, name: string | null, sellFor: Array<{ __typename?: 'ItemPrice', currency: string | null, price: number | null, priceRUB: number | null, vendor: { __typename?: 'FleaMarket', normalizedName: string } | { __typename?: 'TraderOffer', minTraderLevel: number | null, normalizedName: string } }> | null } } | null> } | null>, bartersFor: Array<{ __typename?: 'Barter', id: string, level: number, requiredItems: Array<{ __typename?: 'ContainedItem', count: number, item: { __typename?: 'Item', gridImageLink: string | null, shortName: string | null, normalizedName: string | null, name: string | null, sellFor: Array<{ __typename?: 'ItemPrice', currency: string | null, price: number | null, priceRUB: number | null, vendor: { __typename?: 'FleaMarket', normalizedName: string } | { __typename?: 'TraderOffer', minTraderLevel: number | null, normalizedName: string } }> | null } } | null>, rewardItems: Array<{ __typename?: 'ContainedItem', count: number, item: { __typename?: 'Item', gridImageLink: string | null, shortName: string | null, normalizedName: string | null, name: string | null, sellFor: Array<{ __typename?: 'ItemPrice', currency: string | null, price: number | null, priceRUB: number | null, vendor: { __typename?: 'FleaMarket', normalizedName: string } | { __typename?: 'TraderOffer', minTraderLevel: number | null, normalizedName: string } }> | null } } | null>, trader: { __typename?: 'Trader', name: string, normalizedName: string, imageLink: string | null }, taskUnlock: { __typename?: 'Task', normalizedName: string, name: string, id: string | null } | null } | null>, bartersUsing: Array<{ __typename?: 'Barter', id: string, level: number, requiredItems: Array<{ __typename?: 'ContainedItem', count: number, item: { __typename?: 'Item', gridImageLink: string | null, shortName: string | null, normalizedName: string | null, name: string | null, sellFor: Array<{ __typename?: 'ItemPrice', currency: string | null, price: number | null, priceRUB: number | null, vendor: { __typename?: 'FleaMarket', normalizedName: string } | { __typename?: 'TraderOffer', minTraderLevel: number | null, normalizedName: string } }> | null } } | null>, rewardItems: Array<{ __typename?: 'ContainedItem', count: number, item: { __typename?: 'Item', gridImageLink: string | null, shortName: string | null, normalizedName: string | null, name: string | null, sellFor: Array<{ __typename?: 'ItemPrice', currency: string | null, price: number | null, priceRUB: number | null, vendor: { __typename?: 'FleaMarket', normalizedName: string } | { __typename?: 'TraderOffer', minTraderLevel: number | null, normalizedName: string } }> | null } } | null>, trader: { __typename?: 'Trader', name: string, normalizedName: string, imageLink: string | null }, taskUnlock: { __typename?: 'Task', normalizedName: string, name: string, id: string | null } | null } | null> } | null> | null } | { __typename?: 'ItemPropertiesWeaponMod' } | null } | null> };

export type BaseVendorItemFragment = { __typename?: 'Item', gridImageLink: string | null, shortName: string | null, normalizedName: string | null, name: string | null, sellFor: Array<{ __typename?: 'ItemPrice', currency: string | null, price: number | null, priceRUB: number | null, vendor: { __typename?: 'FleaMarket', normalizedName: string } | { __typename?: 'TraderOffer', minTraderLevel: number | null, normalizedName: string } }> | null };

export type BaseItemFieldsFragment = { __typename?: 'Item', id: string, name: string | null, normalizedName: string | null, shortName: string | null, description: string | null, inspectImageLink: string | null, gridImageLink: string | null, iconLink: string | null, wikiLink: string | null, updated: string | null, avg24hPrice: number | null, categories: Array<{ __typename?: 'ItemCategory', normalizedName: string } | null>, craftsFor: Array<{ __typename?: 'Craft', id: string, duration: number, level: number, station: { __typename?: 'HideoutStation', normalizedName: string }, requiredItems: Array<{ __typename?: 'ContainedItem', count: number, item: { __typename?: 'Item', gridImageLink: string | null, shortName: string | null, normalizedName: string | null, name: string | null, sellFor: Array<{ __typename?: 'ItemPrice', currency: string | null, price: number | null, priceRUB: number | null, vendor: { __typename?: 'FleaMarket', normalizedName: string } | { __typename?: 'TraderOffer', minTraderLevel: number | null, normalizedName: string } }> | null }, attributes: Array<{ __typename?: 'ItemAttribute', type: string } | null> | null } | null>, rewardItems: Array<{ __typename?: 'ContainedItem', count: number, item: { __typename?: 'Item', gridImageLink: string | null, shortName: string | null, normalizedName: string | null, name: string | null, sellFor: Array<{ __typename?: 'ItemPrice', currency: string | null, price: number | null, priceRUB: number | null, vendor: { __typename?: 'FleaMarket', normalizedName: string } | { __typename?: 'TraderOffer', minTraderLevel: number | null, normalizedName: string } }> | null } } | null> } | null>, craftsUsing: Array<{ __typename?: 'Craft', id: string, duration: number, level: number, station: { __typename?: 'HideoutStation', normalizedName: string }, requiredItems: Array<{ __typename?: 'ContainedItem', count: number, item: { __typename?: 'Item', gridImageLink: string | null, shortName: string | null, normalizedName: string | null, name: string | null, sellFor: Array<{ __typename?: 'ItemPrice', currency: string | null, price: number | null, priceRUB: number | null, vendor: { __typename?: 'FleaMarket', normalizedName: string } | { __typename?: 'TraderOffer', minTraderLevel: number | null, normalizedName: string } }> | null }, attributes: Array<{ __typename?: 'ItemAttribute', type: string } | null> | null } | null>, rewardItems: Array<{ __typename?: 'ContainedItem', count: number, item: { __typename?: 'Item', gridImageLink: string | null, shortName: string | null, normalizedName: string | null, name: string | null, sellFor: Array<{ __typename?: 'ItemPrice', currency: string | null, price: number | null, priceRUB: number | null, vendor: { __typename?: 'FleaMarket', normalizedName: string } | { __typename?: 'TraderOffer', minTraderLevel: number | null, normalizedName: string } }> | null } } | null> } | null>, sellFor: Array<{ __typename?: 'ItemPrice', currency: string | null, price: number | null, priceRUB: number | null, vendor: { __typename?: 'FleaMarket', normalizedName: string } | { __typename?: 'TraderOffer', minTraderLevel: number | null, normalizedName: string } }> | null, buyFor: Array<{ __typename?: 'ItemPrice', currency: string | null, price: number | null, priceRUB: number | null, vendor: { __typename?: 'FleaMarket', normalizedName: string } | { __typename?: 'TraderOffer', minTraderLevel: number | null, normalizedName: string, taskUnlock: { __typename?: 'Task', normalizedName: string, name: string, id: string | null } | null } }> | null, bartersFor: Array<{ __typename?: 'Barter', id: string, level: number, requiredItems: Array<{ __typename?: 'ContainedItem', count: number, item: { __typename?: 'Item', gridImageLink: string | null, shortName: string | null, normalizedName: string | null, name: string | null, sellFor: Array<{ __typename?: 'ItemPrice', currency: string | null, price: number | null, priceRUB: number | null, vendor: { __typename?: 'FleaMarket', normalizedName: string } | { __typename?: 'TraderOffer', minTraderLevel: number | null, normalizedName: string } }> | null } } | null>, rewardItems: Array<{ __typename?: 'ContainedItem', count: number, item: { __typename?: 'Item', gridImageLink: string | null, shortName: string | null, normalizedName: string | null, name: string | null, sellFor: Array<{ __typename?: 'ItemPrice', currency: string | null, price: number | null, priceRUB: number | null, vendor: { __typename?: 'FleaMarket', normalizedName: string } | { __typename?: 'TraderOffer', minTraderLevel: number | null, normalizedName: string } }> | null } } | null>, trader: { __typename?: 'Trader', name: string, normalizedName: string, imageLink: string | null }, taskUnlock: { __typename?: 'Task', normalizedName: string, name: string, id: string | null } | null } | null>, bartersUsing: Array<{ __typename?: 'Barter', id: string, level: number, requiredItems: Array<{ __typename?: 'ContainedItem', count: number, item: { __typename?: 'Item', gridImageLink: string | null, shortName: string | null, normalizedName: string | null, name: string | null, sellFor: Array<{ __typename?: 'ItemPrice', currency: string | null, price: number | null, priceRUB: number | null, vendor: { __typename?: 'FleaMarket', normalizedName: string } | { __typename?: 'TraderOffer', minTraderLevel: number | null, normalizedName: string } }> | null } } | null>, rewardItems: Array<{ __typename?: 'ContainedItem', count: number, item: { __typename?: 'Item', gridImageLink: string | null, shortName: string | null, normalizedName: string | null, name: string | null, sellFor: Array<{ __typename?: 'ItemPrice', currency: string | null, price: number | null, priceRUB: number | null, vendor: { __typename?: 'FleaMarket', normalizedName: string } | { __typename?: 'TraderOffer', minTraderLevel: number | null, normalizedName: string } }> | null } } | null>, trader: { __typename?: 'Trader', name: string, normalizedName: string, imageLink: string | null }, taskUnlock: { __typename?: 'Task', normalizedName: string, name: string, id: string | null } | null } | null> };

export type BasePropertiesFragment = { __typename?: 'Item', properties: { __typename?: 'ItemPropertiesAmmo' } | { __typename?: 'ItemPropertiesArmor' } | { __typename?: 'ItemPropertiesArmorAttachment' } | { __typename?: 'ItemPropertiesBackpack' } | { __typename?: 'ItemPropertiesBarrel' } | { __typename?: 'ItemPropertiesChestRig' } | { __typename?: 'ItemPropertiesContainer' } | { __typename?: 'ItemPropertiesFoodDrink' } | { __typename?: 'ItemPropertiesGlasses' } | { __typename?: 'ItemPropertiesGrenade' } | { __typename?: 'ItemPropertiesHeadphone' } | { __typename?: 'ItemPropertiesHeadwear' } | { __typename?: 'ItemPropertiesHelmet' } | { __typename?: 'ItemPropertiesKey' } | { __typename?: 'ItemPropertiesMagazine' } | { __typename?: 'ItemPropertiesMedKit' } | { __typename?: 'ItemPropertiesMedicalItem' } | { __typename?: 'ItemPropertiesMelee' } | { __typename?: 'ItemPropertiesNightVision' } | { __typename?: 'ItemPropertiesPainkiller' } | { __typename?: 'ItemPropertiesPreset', baseItem: { __typename?: 'Item', description: string | null } } | { __typename?: 'ItemPropertiesResource' } | { __typename?: 'ItemPropertiesScope' } | { __typename?: 'ItemPropertiesStim' } | { __typename?: 'ItemPropertiesSurgicalKit' } | { __typename?: 'ItemPropertiesWeapon', defaultPreset: { __typename?: 'Item', id: string, name: string | null, normalizedName: string | null, shortName: string | null, description: string | null, inspectImageLink: string | null, gridImageLink: string | null, iconLink: string | null, wikiLink: string | null, updated: string | null, avg24hPrice: number | null, categories: Array<{ __typename?: 'ItemCategory', normalizedName: string } | null>, craftsFor: Array<{ __typename?: 'Craft', id: string, duration: number, level: number, station: { __typename?: 'HideoutStation', normalizedName: string }, requiredItems: Array<{ __typename?: 'ContainedItem', count: number, item: { __typename?: 'Item', gridImageLink: string | null, shortName: string | null, normalizedName: string | null, name: string | null, sellFor: Array<{ __typename?: 'ItemPrice', currency: string | null, price: number | null, priceRUB: number | null, vendor: { __typename?: 'FleaMarket', normalizedName: string } | { __typename?: 'TraderOffer', minTraderLevel: number | null, normalizedName: string } }> | null }, attributes: Array<{ __typename?: 'ItemAttribute', type: string } | null> | null } | null>, rewardItems: Array<{ __typename?: 'ContainedItem', count: number, item: { __typename?: 'Item', gridImageLink: string | null, shortName: string | null, normalizedName: string | null, name: string | null, sellFor: Array<{ __typename?: 'ItemPrice', currency: string | null, price: number | null, priceRUB: number | null, vendor: { __typename?: 'FleaMarket', normalizedName: string } | { __typename?: 'TraderOffer', minTraderLevel: number | null, normalizedName: string } }> | null } } | null> } | null>, craftsUsing: Array<{ __typename?: 'Craft', id: string, duration: number, level: number, station: { __typename?: 'HideoutStation', normalizedName: string }, requiredItems: Array<{ __typename?: 'ContainedItem', count: number, item: { __typename?: 'Item', gridImageLink: string | null, shortName: string | null, normalizedName: string | null, name: string | null, sellFor: Array<{ __typename?: 'ItemPrice', currency: string | null, price: number | null, priceRUB: number | null, vendor: { __typename?: 'FleaMarket', normalizedName: string } | { __typename?: 'TraderOffer', minTraderLevel: number | null, normalizedName: string } }> | null }, attributes: Array<{ __typename?: 'ItemAttribute', type: string } | null> | null } | null>, rewardItems: Array<{ __typename?: 'ContainedItem', count: number, item: { __typename?: 'Item', gridImageLink: string | null, shortName: string | null, normalizedName: string | null, name: string | null, sellFor: Array<{ __typename?: 'ItemPrice', currency: string | null, price: number | null, priceRUB: number | null, vendor: { __typename?: 'FleaMarket', normalizedName: string } | { __typename?: 'TraderOffer', minTraderLevel: number | null, normalizedName: string } }> | null } } | null> } | null>, sellFor: Array<{ __typename?: 'ItemPrice', currency: string | null, price: number | null, priceRUB: number | null, vendor: { __typename?: 'FleaMarket', normalizedName: string } | { __typename?: 'TraderOffer', minTraderLevel: number | null, normalizedName: string } }> | null, buyFor: Array<{ __typename?: 'ItemPrice', currency: string | null, price: number | null, priceRUB: number | null, vendor: { __typename?: 'FleaMarket', normalizedName: string } | { __typename?: 'TraderOffer', minTraderLevel: number | null, normalizedName: string, taskUnlock: { __typename?: 'Task', normalizedName: string, name: string, id: string | null } | null } }> | null, bartersFor: Array<{ __typename?: 'Barter', id: string, level: number, requiredItems: Array<{ __typename?: 'ContainedItem', count: number, item: { __typename?: 'Item', gridImageLink: string | null, shortName: string | null, normalizedName: string | null, name: string | null, sellFor: Array<{ __typename?: 'ItemPrice', currency: string | null, price: number | null, priceRUB: number | null, vendor: { __typename?: 'FleaMarket', normalizedName: string } | { __typename?: 'TraderOffer', minTraderLevel: number | null, normalizedName: string } }> | null } } | null>, rewardItems: Array<{ __typename?: 'ContainedItem', count: number, item: { __typename?: 'Item', gridImageLink: string | null, shortName: string | null, normalizedName: string | null, name: string | null, sellFor: Array<{ __typename?: 'ItemPrice', currency: string | null, price: number | null, priceRUB: number | null, vendor: { __typename?: 'FleaMarket', normalizedName: string } | { __typename?: 'TraderOffer', minTraderLevel: number | null, normalizedName: string } }> | null } } | null>, trader: { __typename?: 'Trader', name: string, normalizedName: string, imageLink: string | null }, taskUnlock: { __typename?: 'Task', normalizedName: string, name: string, id: string | null } | null } | null>, bartersUsing: Array<{ __typename?: 'Barter', id: string, level: number, requiredItems: Array<{ __typename?: 'ContainedItem', count: number, item: { __typename?: 'Item', gridImageLink: string | null, shortName: string | null, normalizedName: string | null, name: string | null, sellFor: Array<{ __typename?: 'ItemPrice', currency: string | null, price: number | null, priceRUB: number | null, vendor: { __typename?: 'FleaMarket', normalizedName: string } | { __typename?: 'TraderOffer', minTraderLevel: number | null, normalizedName: string } }> | null } } | null>, rewardItems: Array<{ __typename?: 'ContainedItem', count: number, item: { __typename?: 'Item', gridImageLink: string | null, shortName: string | null, normalizedName: string | null, name: string | null, sellFor: Array<{ __typename?: 'ItemPrice', currency: string | null, price: number | null, priceRUB: number | null, vendor: { __typename?: 'FleaMarket', normalizedName: string } | { __typename?: 'TraderOffer', minTraderLevel: number | null, normalizedName: string } }> | null } } | null>, trader: { __typename?: 'Trader', name: string, normalizedName: string, imageLink: string | null }, taskUnlock: { __typename?: 'Task', normalizedName: string, name: string, id: string | null } | null } | null> } | null, presets: Array<{ __typename?: 'Item', craftsFor: Array<{ __typename?: 'Craft', id: string, duration: number, level: number, station: { __typename?: 'HideoutStation', normalizedName: string }, requiredItems: Array<{ __typename?: 'ContainedItem', count: number, item: { __typename?: 'Item', gridImageLink: string | null, shortName: string | null, normalizedName: string | null, name: string | null, sellFor: Array<{ __typename?: 'ItemPrice', currency: string | null, price: number | null, priceRUB: number | null, vendor: { __typename?: 'FleaMarket', normalizedName: string } | { __typename?: 'TraderOffer', minTraderLevel: number | null, normalizedName: string } }> | null }, attributes: Array<{ __typename?: 'ItemAttribute', type: string } | null> | null } | null>, rewardItems: Array<{ __typename?: 'ContainedItem', count: number, item: { __typename?: 'Item', gridImageLink: string | null, shortName: string | null, normalizedName: string | null, name: string | null, sellFor: Array<{ __typename?: 'ItemPrice', currency: string | null, price: number | null, priceRUB: number | null, vendor: { __typename?: 'FleaMarket', normalizedName: string } | { __typename?: 'TraderOffer', minTraderLevel: number | null, normalizedName: string } }> | null } } | null> } | null>, craftsUsing: Array<{ __typename?: 'Craft', id: string, duration: number, level: number, station: { __typename?: 'HideoutStation', normalizedName: string }, requiredItems: Array<{ __typename?: 'ContainedItem', count: number, item: { __typename?: 'Item', gridImageLink: string | null, shortName: string | null, normalizedName: string | null, name: string | null, sellFor: Array<{ __typename?: 'ItemPrice', currency: string | null, price: number | null, priceRUB: number | null, vendor: { __typename?: 'FleaMarket', normalizedName: string } | { __typename?: 'TraderOffer', minTraderLevel: number | null, normalizedName: string } }> | null }, attributes: Array<{ __typename?: 'ItemAttribute', type: string } | null> | null } | null>, rewardItems: Array<{ __typename?: 'ContainedItem', count: number, item: { __typename?: 'Item', gridImageLink: string | null, shortName: string | null, normalizedName: string | null, name: string | null, sellFor: Array<{ __typename?: 'ItemPrice', currency: string | null, price: number | null, priceRUB: number | null, vendor: { __typename?: 'FleaMarket', normalizedName: string } | { __typename?: 'TraderOffer', minTraderLevel: number | null, normalizedName: string } }> | null } } | null> } | null>, bartersFor: Array<{ __typename?: 'Barter', id: string, level: number, requiredItems: Array<{ __typename?: 'ContainedItem', count: number, item: { __typename?: 'Item', gridImageLink: string | null, shortName: string | null, normalizedName: string | null, name: string | null, sellFor: Array<{ __typename?: 'ItemPrice', currency: string | null, price: number | null, priceRUB: number | null, vendor: { __typename?: 'FleaMarket', normalizedName: string } | { __typename?: 'TraderOffer', minTraderLevel: number | null, normalizedName: string } }> | null } } | null>, rewardItems: Array<{ __typename?: 'ContainedItem', count: number, item: { __typename?: 'Item', gridImageLink: string | null, shortName: string | null, normalizedName: string | null, name: string | null, sellFor: Array<{ __typename?: 'ItemPrice', currency: string | null, price: number | null, priceRUB: number | null, vendor: { __typename?: 'FleaMarket', normalizedName: string } | { __typename?: 'TraderOffer', minTraderLevel: number | null, normalizedName: string } }> | null } } | null>, trader: { __typename?: 'Trader', name: string, normalizedName: string, imageLink: string | null }, taskUnlock: { __typename?: 'Task', normalizedName: string, name: string, id: string | null } | null } | null>, bartersUsing: Array<{ __typename?: 'Barter', id: string, level: number, requiredItems: Array<{ __typename?: 'ContainedItem', count: number, item: { __typename?: 'Item', gridImageLink: string | null, shortName: string | null, normalizedName: string | null, name: string | null, sellFor: Array<{ __typename?: 'ItemPrice', currency: string | null, price: number | null, priceRUB: number | null, vendor: { __typename?: 'FleaMarket', normalizedName: string } | { __typename?: 'TraderOffer', minTraderLevel: number | null, normalizedName: string } }> | null } } | null>, rewardItems: Array<{ __typename?: 'ContainedItem', count: number, item: { __typename?: 'Item', gridImageLink: string | null, shortName: string | null, normalizedName: string | null, name: string | null, sellFor: Array<{ __typename?: 'ItemPrice', currency: string | null, price: number | null, priceRUB: number | null, vendor: { __typename?: 'FleaMarket', normalizedName: string } | { __typename?: 'TraderOffer', minTraderLevel: number | null, normalizedName: string } }> | null } } | null>, trader: { __typename?: 'Trader', name: string, normalizedName: string, imageLink: string | null }, taskUnlock: { __typename?: 'Task', normalizedName: string, name: string, id: string | null } | null } | null> } | null> | null } | { __typename?: 'ItemPropertiesWeaponMod' } | null };

export type BaseCraftingFragment = { __typename?: 'Craft', id: string, duration: number, level: number, station: { __typename?: 'HideoutStation', normalizedName: string }, requiredItems: Array<{ __typename?: 'ContainedItem', count: number, item: { __typename?: 'Item', gridImageLink: string | null, shortName: string | null, normalizedName: string | null, name: string | null, sellFor: Array<{ __typename?: 'ItemPrice', currency: string | null, price: number | null, priceRUB: number | null, vendor: { __typename?: 'FleaMarket', normalizedName: string } | { __typename?: 'TraderOffer', minTraderLevel: number | null, normalizedName: string } }> | null }, attributes: Array<{ __typename?: 'ItemAttribute', type: string } | null> | null } | null>, rewardItems: Array<{ __typename?: 'ContainedItem', count: number, item: { __typename?: 'Item', gridImageLink: string | null, shortName: string | null, normalizedName: string | null, name: string | null, sellFor: Array<{ __typename?: 'ItemPrice', currency: string | null, price: number | null, priceRUB: number | null, vendor: { __typename?: 'FleaMarket', normalizedName: string } | { __typename?: 'TraderOffer', minTraderLevel: number | null, normalizedName: string } }> | null } } | null> };

export type BaseSellForFragment = { __typename?: 'ItemPrice', currency: string | null, price: number | null, priceRUB: number | null, vendor: { __typename?: 'FleaMarket', normalizedName: string } | { __typename?: 'TraderOffer', minTraderLevel: number | null, normalizedName: string } };

export type BaseBuyForFragment = { __typename?: 'ItemPrice', currency: string | null, price: number | null, priceRUB: number | null, vendor: { __typename?: 'FleaMarket', normalizedName: string } | { __typename?: 'TraderOffer', minTraderLevel: number | null, normalizedName: string, taskUnlock: { __typename?: 'Task', normalizedName: string, name: string, id: string | null } | null } };

export type BaseTradeDataFragment = { __typename?: 'ItemPrice', currency: string | null, price: number | null, priceRUB: number | null };

export type BaseBarterFragment = { __typename?: 'Barter', id: string, level: number, requiredItems: Array<{ __typename?: 'ContainedItem', count: number, item: { __typename?: 'Item', gridImageLink: string | null, shortName: string | null, normalizedName: string | null, name: string | null, sellFor: Array<{ __typename?: 'ItemPrice', currency: string | null, price: number | null, priceRUB: number | null, vendor: { __typename?: 'FleaMarket', normalizedName: string } | { __typename?: 'TraderOffer', minTraderLevel: number | null, normalizedName: string } }> | null } } | null>, rewardItems: Array<{ __typename?: 'ContainedItem', count: number, item: { __typename?: 'Item', gridImageLink: string | null, shortName: string | null, normalizedName: string | null, name: string | null, sellFor: Array<{ __typename?: 'ItemPrice', currency: string | null, price: number | null, priceRUB: number | null, vendor: { __typename?: 'FleaMarket', normalizedName: string } | { __typename?: 'TraderOffer', minTraderLevel: number | null, normalizedName: string } }> | null } } | null>, trader: { __typename?: 'Trader', name: string, normalizedName: string, imageLink: string | null }, taskUnlock: { __typename?: 'Task', normalizedName: string, name: string, id: string | null } | null };

export type AllQuestsQueryVariables = Exact<{
  lang: InputMaybe<LanguageCode>;
}>;


export type AllQuestsQuery = { __typename?: 'Query', tasks: Array<{ __typename?: 'Task', id: string | null, name: string, normalizedName: string, kappaRequired: boolean | null, taskImageLink: string | null, minPlayerLevel: number | null, experience: number, objectives: Array<{ __typename?: 'TaskObjectiveBasic', description: string, id: string | null, requiredKeys: Array<Array<{ __typename?: 'Item', id: string, name: string | null, shortName: string | null, normalizedName: string | null, iconLink: string | null, craftsFor: Array<{ __typename?: 'Craft', id: string } | null> } | null> | null> | null } | { __typename?: 'TaskObjectiveBuildItem', description: string, id: string | null, item: { __typename?: 'Item', id: string, name: string | null, shortName: string | null, normalizedName: string | null, iconLink: string | null, properties: { __typename?: 'ItemPropertiesAmmo' } | { __typename?: 'ItemPropertiesArmor' } | { __typename?: 'ItemPropertiesArmorAttachment' } | { __typename?: 'ItemPropertiesBackpack' } | { __typename?: 'ItemPropertiesBarrel' } | { __typename?: 'ItemPropertiesChestRig' } | { __typename?: 'ItemPropertiesContainer' } | { __typename?: 'ItemPropertiesFoodDrink' } | { __typename?: 'ItemPropertiesGlasses' } | { __typename?: 'ItemPropertiesGrenade' } | { __typename?: 'ItemPropertiesHeadphone' } | { __typename?: 'ItemPropertiesHeadwear' } | { __typename?: 'ItemPropertiesHelmet' } | { __typename?: 'ItemPropertiesKey' } | { __typename?: 'ItemPropertiesMagazine' } | { __typename?: 'ItemPropertiesMedKit' } | { __typename?: 'ItemPropertiesMedicalItem' } | { __typename?: 'ItemPropertiesMelee' } | { __typename?: 'ItemPropertiesNightVision' } | { __typename?: 'ItemPropertiesPainkiller' } | { __typename?: 'ItemPropertiesPreset' } | { __typename?: 'ItemPropertiesResource' } | { __typename?: 'ItemPropertiesScope' } | { __typename?: 'ItemPropertiesStim' } | { __typename?: 'ItemPropertiesSurgicalKit' } | { __typename?: 'ItemPropertiesWeapon', defaultPreset: { __typename?: 'Item', id: string, name: string | null, shortName: string | null, normalizedName: string | null, iconLink: string | null, craftsFor: Array<{ __typename?: 'Craft', id: string } | null> } | null } | { __typename?: 'ItemPropertiesWeaponMod' } | null, craftsFor: Array<{ __typename?: 'Craft', id: string } | null> } } | { __typename?: 'TaskObjectiveExperience', id: string | null, description: string } | { __typename?: 'TaskObjectiveExtract', id: string | null, description: string } | { __typename?: 'TaskObjectiveItem', type: string, count: number, foundInRaid: boolean, id: string | null, description: string, items: Array<{ __typename?: 'Item', types: Array<ItemType | null>, id: string, name: string | null, shortName: string | null, normalizedName: string | null, iconLink: string | null, properties: { __typename?: 'ItemPropertiesAmmo' } | { __typename?: 'ItemPropertiesArmor' } | { __typename?: 'ItemPropertiesArmorAttachment' } | { __typename?: 'ItemPropertiesBackpack' } | { __typename?: 'ItemPropertiesBarrel' } | { __typename?: 'ItemPropertiesChestRig' } | { __typename?: 'ItemPropertiesContainer' } | { __typename?: 'ItemPropertiesFoodDrink' } | { __typename?: 'ItemPropertiesGlasses' } | { __typename?: 'ItemPropertiesGrenade' } | { __typename?: 'ItemPropertiesHeadphone' } | { __typename?: 'ItemPropertiesHeadwear' } | { __typename?: 'ItemPropertiesHelmet' } | { __typename?: 'ItemPropertiesKey' } | { __typename?: 'ItemPropertiesMagazine' } | { __typename?: 'ItemPropertiesMedKit' } | { __typename?: 'ItemPropertiesMedicalItem' } | { __typename?: 'ItemPropertiesMelee' } | { __typename?: 'ItemPropertiesNightVision' } | { __typename?: 'ItemPropertiesPainkiller' } | { __typename?: 'ItemPropertiesPreset' } | { __typename?: 'ItemPropertiesResource' } | { __typename?: 'ItemPropertiesScope' } | { __typename?: 'ItemPropertiesStim' } | { __typename?: 'ItemPropertiesSurgicalKit' } | { __typename?: 'ItemPropertiesWeapon', defaultPreset: { __typename?: 'Item', id: string, name: string | null, shortName: string | null, normalizedName: string | null, iconLink: string | null, craftsFor: Array<{ __typename?: 'Craft', id: string } | null> } | null } | { __typename?: 'ItemPropertiesWeaponMod' } | null, craftsFor: Array<{ __typename?: 'Craft', id: string } | null> } | null>, requiredKeys: Array<Array<{ __typename?: 'Item', id: string, name: string | null, shortName: string | null, normalizedName: string | null, iconLink: string | null, craftsFor: Array<{ __typename?: 'Craft', id: string } | null> } | null> | null> | null } | { __typename?: 'TaskObjectiveMark', id: string | null, description: string, markerItem: { __typename?: 'Item', id: string, name: string | null, shortName: string | null, normalizedName: string | null, iconLink: string | null, craftsFor: Array<{ __typename?: 'Craft', id: string } | null> }, requiredKeys: Array<Array<{ __typename?: 'Item', id: string, name: string | null, shortName: string | null, normalizedName: string | null, iconLink: string | null, craftsFor: Array<{ __typename?: 'Craft', id: string } | null> } | null> | null> | null } | { __typename?: 'TaskObjectivePlayerLevel', id: string | null, description: string } | { __typename?: 'TaskObjectiveQuestItem', id: string | null, description: string, requiredKeys: Array<Array<{ __typename?: 'Item', id: string, name: string | null, shortName: string | null, normalizedName: string | null, iconLink: string | null, craftsFor: Array<{ __typename?: 'Craft', id: string } | null> } | null> | null> | null } | { __typename?: 'TaskObjectiveShoot', id: string | null, description: string, wearing: Array<Array<{ __typename?: 'Item', id: string, name: string | null, shortName: string | null, normalizedName: string | null, iconLink: string | null, craftsFor: Array<{ __typename?: 'Craft', id: string } | null> } | null> | null> | null } | { __typename?: 'TaskObjectiveSkill', id: string | null, description: string } | { __typename?: 'TaskObjectiveTaskStatus', id: string | null, description: string } | { __typename?: 'TaskObjectiveTraderLevel', id: string | null, description: string } | { __typename?: 'TaskObjectiveTraderStanding', id: string | null, description: string } | { __typename?: 'TaskObjectiveUseItem', id: string | null, description: string } | null>, trader: { __typename?: 'Trader', imageLink: string | null, name: string, normalizedName: string }, taskRequirements: Array<{ __typename?: 'TaskStatusRequirement', status: Array<string | null>, task: { __typename?: 'Task', id: string | null, name: string, normalizedName: string } } | null>, startRewards: { __typename?: 'TaskRewards', craftUnlock: Array<{ __typename?: 'Craft', rewardItems: Array<{ __typename?: 'ContainedItem', item: { __typename?: 'Item', gridImageLink: string | null, shortName: string | null, normalizedName: string | null, name: string | null, sellFor: Array<{ __typename?: 'ItemPrice', currency: string | null, price: number | null, priceRUB: number | null, vendor: { __typename?: 'FleaMarket', normalizedName: string } | { __typename?: 'TraderOffer', minTraderLevel: number | null, normalizedName: string } }> | null } } | null> } | null>, items: Array<{ __typename?: 'ContainedItem', count: number, item: { __typename?: 'Item', gridImageLink: string | null, shortName: string | null, normalizedName: string | null, name: string | null, category: { __typename?: 'ItemCategory', normalizedName: string } | null, sellFor: Array<{ __typename?: 'ItemPrice', currency: string | null, price: number | null, priceRUB: number | null, vendor: { __typename?: 'FleaMarket', normalizedName: string } | { __typename?: 'TraderOffer', minTraderLevel: number | null, normalizedName: string } }> | null } } | null>, offerUnlock: Array<{ __typename?: 'OfferUnlock', id: string, level: number, item: { __typename?: 'Item', gridImageLink: string | null, shortName: string | null, normalizedName: string | null, name: string | null, sellFor: Array<{ __typename?: 'ItemPrice', currency: string | null, price: number | null, priceRUB: number | null, vendor: { __typename?: 'FleaMarket', normalizedName: string } | { __typename?: 'TraderOffer', minTraderLevel: number | null, normalizedName: string } }> | null }, trader: { __typename?: 'Trader', name: string, normalizedName: string, imageLink: string | null } } | null>, skillLevelReward: Array<{ __typename?: 'SkillLevel', level: number, name: string } | null>, traderStanding: Array<{ __typename?: 'TraderStanding', standing: number, trader: { __typename?: 'Trader', name: string, normalizedName: string, imageLink: string | null } } | null>, traderUnlock: Array<{ __typename?: 'Trader', name: string, normalizedName: string, imageLink: string | null } | null> } | null, finishRewards: { __typename?: 'TaskRewards', craftUnlock: Array<{ __typename?: 'Craft', rewardItems: Array<{ __typename?: 'ContainedItem', item: { __typename?: 'Item', gridImageLink: string | null, shortName: string | null, normalizedName: string | null, name: string | null, sellFor: Array<{ __typename?: 'ItemPrice', currency: string | null, price: number | null, priceRUB: number | null, vendor: { __typename?: 'FleaMarket', normalizedName: string } | { __typename?: 'TraderOffer', minTraderLevel: number | null, normalizedName: string } }> | null } } | null> } | null>, items: Array<{ __typename?: 'ContainedItem', count: number, item: { __typename?: 'Item', gridImageLink: string | null, shortName: string | null, normalizedName: string | null, name: string | null, category: { __typename?: 'ItemCategory', normalizedName: string } | null, sellFor: Array<{ __typename?: 'ItemPrice', currency: string | null, price: number | null, priceRUB: number | null, vendor: { __typename?: 'FleaMarket', normalizedName: string } | { __typename?: 'TraderOffer', minTraderLevel: number | null, normalizedName: string } }> | null } } | null>, offerUnlock: Array<{ __typename?: 'OfferUnlock', id: string, level: number, item: { __typename?: 'Item', gridImageLink: string | null, shortName: string | null, normalizedName: string | null, name: string | null, sellFor: Array<{ __typename?: 'ItemPrice', currency: string | null, price: number | null, priceRUB: number | null, vendor: { __typename?: 'FleaMarket', normalizedName: string } | { __typename?: 'TraderOffer', minTraderLevel: number | null, normalizedName: string } }> | null }, trader: { __typename?: 'Trader', name: string, normalizedName: string, imageLink: string | null } } | null>, skillLevelReward: Array<{ __typename?: 'SkillLevel', level: number, name: string } | null>, traderStanding: Array<{ __typename?: 'TraderStanding', standing: number, trader: { __typename?: 'Trader', name: string, normalizedName: string, imageLink: string | null } } | null>, traderUnlock: Array<{ __typename?: 'Trader', name: string, normalizedName: string, imageLink: string | null } | null> } | null, failureOutcome: { __typename?: 'TaskRewards', craftUnlock: Array<{ __typename?: 'Craft', rewardItems: Array<{ __typename?: 'ContainedItem', item: { __typename?: 'Item', gridImageLink: string | null, shortName: string | null, normalizedName: string | null, name: string | null, sellFor: Array<{ __typename?: 'ItemPrice', currency: string | null, price: number | null, priceRUB: number | null, vendor: { __typename?: 'FleaMarket', normalizedName: string } | { __typename?: 'TraderOffer', minTraderLevel: number | null, normalizedName: string } }> | null } } | null> } | null>, items: Array<{ __typename?: 'ContainedItem', count: number, item: { __typename?: 'Item', gridImageLink: string | null, shortName: string | null, normalizedName: string | null, name: string | null, category: { __typename?: 'ItemCategory', normalizedName: string } | null, sellFor: Array<{ __typename?: 'ItemPrice', currency: string | null, price: number | null, priceRUB: number | null, vendor: { __typename?: 'FleaMarket', normalizedName: string } | { __typename?: 'TraderOffer', minTraderLevel: number | null, normalizedName: string } }> | null } } | null>, offerUnlock: Array<{ __typename?: 'OfferUnlock', id: string, level: number, item: { __typename?: 'Item', gridImageLink: string | null, shortName: string | null, normalizedName: string | null, name: string | null, sellFor: Array<{ __typename?: 'ItemPrice', currency: string | null, price: number | null, priceRUB: number | null, vendor: { __typename?: 'FleaMarket', normalizedName: string } | { __typename?: 'TraderOffer', minTraderLevel: number | null, normalizedName: string } }> | null }, trader: { __typename?: 'Trader', name: string, normalizedName: string, imageLink: string | null } } | null>, skillLevelReward: Array<{ __typename?: 'SkillLevel', level: number, name: string } | null>, traderStanding: Array<{ __typename?: 'TraderStanding', standing: number, trader: { __typename?: 'Trader', name: string, normalizedName: string, imageLink: string | null } } | null>, traderUnlock: Array<{ __typename?: 'Trader', name: string, normalizedName: string, imageLink: string | null } | null> } | null } | null> };

export type BaseQuestFieldsFragment = { __typename?: 'Task', id: string | null, name: string, normalizedName: string, kappaRequired: boolean | null, taskImageLink: string | null, minPlayerLevel: number | null, experience: number, trader: { __typename?: 'Trader', imageLink: string | null, name: string, normalizedName: string }, taskRequirements: Array<{ __typename?: 'TaskStatusRequirement', status: Array<string | null>, task: { __typename?: 'Task', id: string | null, name: string, normalizedName: string } } | null>, startRewards: { __typename?: 'TaskRewards', craftUnlock: Array<{ __typename?: 'Craft', rewardItems: Array<{ __typename?: 'ContainedItem', item: { __typename?: 'Item', gridImageLink: string | null, shortName: string | null, normalizedName: string | null, name: string | null, sellFor: Array<{ __typename?: 'ItemPrice', currency: string | null, price: number | null, priceRUB: number | null, vendor: { __typename?: 'FleaMarket', normalizedName: string } | { __typename?: 'TraderOffer', minTraderLevel: number | null, normalizedName: string } }> | null } } | null> } | null>, items: Array<{ __typename?: 'ContainedItem', count: number, item: { __typename?: 'Item', gridImageLink: string | null, shortName: string | null, normalizedName: string | null, name: string | null, category: { __typename?: 'ItemCategory', normalizedName: string } | null, sellFor: Array<{ __typename?: 'ItemPrice', currency: string | null, price: number | null, priceRUB: number | null, vendor: { __typename?: 'FleaMarket', normalizedName: string } | { __typename?: 'TraderOffer', minTraderLevel: number | null, normalizedName: string } }> | null } } | null>, offerUnlock: Array<{ __typename?: 'OfferUnlock', id: string, level: number, item: { __typename?: 'Item', gridImageLink: string | null, shortName: string | null, normalizedName: string | null, name: string | null, sellFor: Array<{ __typename?: 'ItemPrice', currency: string | null, price: number | null, priceRUB: number | null, vendor: { __typename?: 'FleaMarket', normalizedName: string } | { __typename?: 'TraderOffer', minTraderLevel: number | null, normalizedName: string } }> | null }, trader: { __typename?: 'Trader', name: string, normalizedName: string, imageLink: string | null } } | null>, skillLevelReward: Array<{ __typename?: 'SkillLevel', level: number, name: string } | null>, traderStanding: Array<{ __typename?: 'TraderStanding', standing: number, trader: { __typename?: 'Trader', name: string, normalizedName: string, imageLink: string | null } } | null>, traderUnlock: Array<{ __typename?: 'Trader', name: string, normalizedName: string, imageLink: string | null } | null> } | null, finishRewards: { __typename?: 'TaskRewards', craftUnlock: Array<{ __typename?: 'Craft', rewardItems: Array<{ __typename?: 'ContainedItem', item: { __typename?: 'Item', gridImageLink: string | null, shortName: string | null, normalizedName: string | null, name: string | null, sellFor: Array<{ __typename?: 'ItemPrice', currency: string | null, price: number | null, priceRUB: number | null, vendor: { __typename?: 'FleaMarket', normalizedName: string } | { __typename?: 'TraderOffer', minTraderLevel: number | null, normalizedName: string } }> | null } } | null> } | null>, items: Array<{ __typename?: 'ContainedItem', count: number, item: { __typename?: 'Item', gridImageLink: string | null, shortName: string | null, normalizedName: string | null, name: string | null, category: { __typename?: 'ItemCategory', normalizedName: string } | null, sellFor: Array<{ __typename?: 'ItemPrice', currency: string | null, price: number | null, priceRUB: number | null, vendor: { __typename?: 'FleaMarket', normalizedName: string } | { __typename?: 'TraderOffer', minTraderLevel: number | null, normalizedName: string } }> | null } } | null>, offerUnlock: Array<{ __typename?: 'OfferUnlock', id: string, level: number, item: { __typename?: 'Item', gridImageLink: string | null, shortName: string | null, normalizedName: string | null, name: string | null, sellFor: Array<{ __typename?: 'ItemPrice', currency: string | null, price: number | null, priceRUB: number | null, vendor: { __typename?: 'FleaMarket', normalizedName: string } | { __typename?: 'TraderOffer', minTraderLevel: number | null, normalizedName: string } }> | null }, trader: { __typename?: 'Trader', name: string, normalizedName: string, imageLink: string | null } } | null>, skillLevelReward: Array<{ __typename?: 'SkillLevel', level: number, name: string } | null>, traderStanding: Array<{ __typename?: 'TraderStanding', standing: number, trader: { __typename?: 'Trader', name: string, normalizedName: string, imageLink: string | null } } | null>, traderUnlock: Array<{ __typename?: 'Trader', name: string, normalizedName: string, imageLink: string | null } | null> } | null, failureOutcome: { __typename?: 'TaskRewards', craftUnlock: Array<{ __typename?: 'Craft', rewardItems: Array<{ __typename?: 'ContainedItem', item: { __typename?: 'Item', gridImageLink: string | null, shortName: string | null, normalizedName: string | null, name: string | null, sellFor: Array<{ __typename?: 'ItemPrice', currency: string | null, price: number | null, priceRUB: number | null, vendor: { __typename?: 'FleaMarket', normalizedName: string } | { __typename?: 'TraderOffer', minTraderLevel: number | null, normalizedName: string } }> | null } } | null> } | null>, items: Array<{ __typename?: 'ContainedItem', count: number, item: { __typename?: 'Item', gridImageLink: string | null, shortName: string | null, normalizedName: string | null, name: string | null, category: { __typename?: 'ItemCategory', normalizedName: string } | null, sellFor: Array<{ __typename?: 'ItemPrice', currency: string | null, price: number | null, priceRUB: number | null, vendor: { __typename?: 'FleaMarket', normalizedName: string } | { __typename?: 'TraderOffer', minTraderLevel: number | null, normalizedName: string } }> | null } } | null>, offerUnlock: Array<{ __typename?: 'OfferUnlock', id: string, level: number, item: { __typename?: 'Item', gridImageLink: string | null, shortName: string | null, normalizedName: string | null, name: string | null, sellFor: Array<{ __typename?: 'ItemPrice', currency: string | null, price: number | null, priceRUB: number | null, vendor: { __typename?: 'FleaMarket', normalizedName: string } | { __typename?: 'TraderOffer', minTraderLevel: number | null, normalizedName: string } }> | null }, trader: { __typename?: 'Trader', name: string, normalizedName: string, imageLink: string | null } } | null>, skillLevelReward: Array<{ __typename?: 'SkillLevel', level: number, name: string } | null>, traderStanding: Array<{ __typename?: 'TraderStanding', standing: number, trader: { __typename?: 'Trader', name: string, normalizedName: string, imageLink: string | null } } | null>, traderUnlock: Array<{ __typename?: 'Trader', name: string, normalizedName: string, imageLink: string | null } | null> } | null };

export type BaseQuestItemFieldsFragment = { __typename?: 'Item', id: string, name: string | null, shortName: string | null, normalizedName: string | null, iconLink: string | null, craftsFor: Array<{ __typename?: 'Craft', id: string } | null> };

export type FleaQueryVariables = Exact<{
  lang: InputMaybe<LanguageCode>;
}>;


export type FleaQuery = { __typename?: 'Query', fleaMarket: { __typename?: 'FleaMarket', name: string, normalizedName: string } };

export type HideoutQueryVariables = Exact<{
  lang: InputMaybe<LanguageCode>;
}>;


export type HideoutQuery = { __typename?: 'Query', hideoutStations: Array<{ __typename?: 'HideoutStation', imageLink: string | null, normalizedName: string, name: string } | null> };

export type TradersQueryVariables = Exact<{
  lang: InputMaybe<LanguageCode>;
}>;


export type TradersQuery = { __typename?: 'Query', traders: Array<{ __typename?: 'Trader', id: string, imageLink: string | null, name: string, normalizedName: string, levels: Array<{ __typename?: 'TraderLevel', id: string, level: number, imageLink: string | null }> } | null> };

export const BaseSearchHideoutFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseSearchHideout"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HideoutStation"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"normalizedName"}},{"kind":"Field","name":{"kind":"Name","value":"imageLink"}}]}}]} as unknown as DocumentNode<BaseSearchHideoutFragment, unknown>;
export const BaseSearchItemFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseSearchItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Item"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"normalizedName"}},{"kind":"Field","name":{"kind":"Name","value":"iconLink"}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"normalizedName"}}]}}]}}]} as unknown as DocumentNode<BaseSearchItemFragment, unknown>;
export const BaseSearchQuestFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseSearchQuest"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Task"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"normalizedName"}},{"kind":"Field","name":{"kind":"Name","value":"trader"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"imageLink"}}]}}]}}]} as unknown as DocumentNode<BaseSearchQuestFragment, unknown>;
export const BaseHideoutItemFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseHideoutItemFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Item"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"shortName"}},{"kind":"Field","name":{"kind":"Name","value":"normalizedName"}},{"kind":"Field","name":{"kind":"Name","value":"iconLink"}},{"kind":"Field","name":{"kind":"Name","value":"craftsFor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<BaseHideoutItemFieldsFragment, unknown>;
export const BaseHideoutLevelFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseHideoutLevelFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HideoutStationLevel"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"level"}},{"kind":"Field","name":{"kind":"Name","value":"constructionTime"}},{"kind":"Field","name":{"kind":"Name","value":"itemRequirements"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"item"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseHideoutItemFields"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"stationLevelRequirements"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"level"}},{"kind":"Field","name":{"kind":"Name","value":"station"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"imageLink"}},{"kind":"Field","name":{"kind":"Name","value":"normalizedName"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"skillRequirements"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"level"}}]}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"traderRequirements"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"requirementType"}},{"kind":"Field","name":{"kind":"Name","value":"compareMethod"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"trader"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"imageLink"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"bonuses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"passive"}},{"kind":"Field","name":{"kind":"Name","value":"production"}},{"kind":"Field","name":{"kind":"Name","value":"skillName"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseHideoutItemFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Item"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"shortName"}},{"kind":"Field","name":{"kind":"Name","value":"normalizedName"}},{"kind":"Field","name":{"kind":"Name","value":"iconLink"}},{"kind":"Field","name":{"kind":"Name","value":"craftsFor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<BaseHideoutLevelFieldsFragment, unknown>;
export const BaseHideoutModuleFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseHideoutModuleFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HideoutStation"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"imageLink"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"normalizedName"}},{"kind":"Field","name":{"kind":"Name","value":"levels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseHideoutLevelFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseHideoutItemFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Item"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"shortName"}},{"kind":"Field","name":{"kind":"Name","value":"normalizedName"}},{"kind":"Field","name":{"kind":"Name","value":"iconLink"}},{"kind":"Field","name":{"kind":"Name","value":"craftsFor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseHideoutLevelFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HideoutStationLevel"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"level"}},{"kind":"Field","name":{"kind":"Name","value":"constructionTime"}},{"kind":"Field","name":{"kind":"Name","value":"itemRequirements"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"item"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseHideoutItemFields"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"stationLevelRequirements"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"level"}},{"kind":"Field","name":{"kind":"Name","value":"station"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"imageLink"}},{"kind":"Field","name":{"kind":"Name","value":"normalizedName"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"skillRequirements"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"level"}}]}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"traderRequirements"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"requirementType"}},{"kind":"Field","name":{"kind":"Name","value":"compareMethod"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"trader"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"imageLink"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"bonuses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"passive"}},{"kind":"Field","name":{"kind":"Name","value":"production"}},{"kind":"Field","name":{"kind":"Name","value":"skillName"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]} as unknown as DocumentNode<BaseHideoutModuleFieldsFragment, unknown>;
export const BaseTradeDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseTradeData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ItemPrice"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"priceRUB"}}]}}]} as unknown as DocumentNode<BaseTradeDataFragment, unknown>;
export const BaseSellForFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseSellFor"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ItemPrice"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseTradeData"}},{"kind":"Field","name":{"kind":"Name","value":"vendor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"normalizedName"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TraderOffer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"minTraderLevel"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseTradeData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ItemPrice"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"priceRUB"}}]}}]} as unknown as DocumentNode<BaseSellForFragment, unknown>;
export const BaseVendorItemFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseVendorItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Item"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gridImageLink"}},{"kind":"Field","name":{"kind":"Name","value":"shortName"}},{"kind":"Field","name":{"kind":"Name","value":"normalizedName"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"sellFor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseSellFor"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseTradeData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ItemPrice"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"priceRUB"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseSellFor"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ItemPrice"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseTradeData"}},{"kind":"Field","name":{"kind":"Name","value":"vendor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"normalizedName"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TraderOffer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"minTraderLevel"}}]}}]}}]}}]} as unknown as DocumentNode<BaseVendorItemFragment, unknown>;
export const BaseCraftingFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseCrafting"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Craft"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"duration"}},{"kind":"Field","name":{"kind":"Name","value":"level"}},{"kind":"Field","name":{"kind":"Name","value":"station"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"normalizedName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"requiredItems"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"item"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseVendorItem"}}]}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"rewardItems"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"item"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseVendorItem"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseTradeData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ItemPrice"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"priceRUB"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseSellFor"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ItemPrice"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseTradeData"}},{"kind":"Field","name":{"kind":"Name","value":"vendor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"normalizedName"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TraderOffer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"minTraderLevel"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseVendorItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Item"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gridImageLink"}},{"kind":"Field","name":{"kind":"Name","value":"shortName"}},{"kind":"Field","name":{"kind":"Name","value":"normalizedName"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"sellFor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseSellFor"}}]}}]}}]} as unknown as DocumentNode<BaseCraftingFragment, unknown>;
export const BaseBuyForFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseBuyFor"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ItemPrice"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseTradeData"}},{"kind":"Field","name":{"kind":"Name","value":"vendor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"normalizedName"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TraderOffer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"minTraderLevel"}},{"kind":"Field","name":{"kind":"Name","value":"taskUnlock"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"normalizedName"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseTradeData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ItemPrice"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"priceRUB"}}]}}]} as unknown as DocumentNode<BaseBuyForFragment, unknown>;
export const BaseBarterFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseBarter"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Barter"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"level"}},{"kind":"Field","name":{"kind":"Name","value":"requiredItems"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"item"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseVendorItem"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"rewardItems"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"item"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseVendorItem"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"trader"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"normalizedName"}},{"kind":"Field","name":{"kind":"Name","value":"imageLink"}}]}},{"kind":"Field","name":{"kind":"Name","value":"taskUnlock"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"normalizedName"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseTradeData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ItemPrice"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"priceRUB"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseSellFor"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ItemPrice"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseTradeData"}},{"kind":"Field","name":{"kind":"Name","value":"vendor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"normalizedName"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TraderOffer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"minTraderLevel"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseVendorItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Item"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gridImageLink"}},{"kind":"Field","name":{"kind":"Name","value":"shortName"}},{"kind":"Field","name":{"kind":"Name","value":"normalizedName"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"sellFor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseSellFor"}}]}}]}}]} as unknown as DocumentNode<BaseBarterFragment, unknown>;
export const ItemFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ItemFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Item"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"normalizedName"}},{"kind":"Field","name":{"kind":"Name","value":"shortName"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"inspectImageLink"}},{"kind":"Field","name":{"kind":"Name","value":"iconLink"}},{"kind":"Field","name":{"kind":"Name","value":"wikiLink"}},{"kind":"Field","name":{"kind":"Name","value":"updated"}},{"kind":"Field","name":{"kind":"Name","value":"avg24hPrice"}},{"kind":"Field","name":{"kind":"Name","value":"craftsFor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseCrafting"}}]}},{"kind":"Field","name":{"kind":"Name","value":"craftsUsing"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseCrafting"}}]}},{"kind":"Field","name":{"kind":"Name","value":"sellFor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseSellFor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"buyFor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseBuyFor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"bartersFor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseBarter"}}]}},{"kind":"Field","name":{"kind":"Name","value":"bartersUsing"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseBarter"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseTradeData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ItemPrice"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"priceRUB"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseSellFor"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ItemPrice"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseTradeData"}},{"kind":"Field","name":{"kind":"Name","value":"vendor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"normalizedName"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TraderOffer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"minTraderLevel"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseVendorItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Item"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gridImageLink"}},{"kind":"Field","name":{"kind":"Name","value":"shortName"}},{"kind":"Field","name":{"kind":"Name","value":"normalizedName"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"sellFor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseSellFor"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseCrafting"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Craft"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"duration"}},{"kind":"Field","name":{"kind":"Name","value":"level"}},{"kind":"Field","name":{"kind":"Name","value":"station"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"normalizedName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"requiredItems"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"item"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseVendorItem"}}]}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"rewardItems"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"item"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseVendorItem"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseBuyFor"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ItemPrice"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseTradeData"}},{"kind":"Field","name":{"kind":"Name","value":"vendor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"normalizedName"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TraderOffer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"minTraderLevel"}},{"kind":"Field","name":{"kind":"Name","value":"taskUnlock"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"normalizedName"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseBarter"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Barter"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"level"}},{"kind":"Field","name":{"kind":"Name","value":"requiredItems"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"item"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseVendorItem"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"rewardItems"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"item"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseVendorItem"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"trader"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"normalizedName"}},{"kind":"Field","name":{"kind":"Name","value":"imageLink"}}]}},{"kind":"Field","name":{"kind":"Name","value":"taskUnlock"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"normalizedName"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<ItemFieldsFragment, unknown>;
export const ItemTrackerFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ItemTrackerFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Item"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"normalizedName"}},{"kind":"Field","name":{"kind":"Name","value":"shortName"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"gridImageLink"}},{"kind":"Field","name":{"kind":"Name","value":"iconLink"}},{"kind":"Field","name":{"kind":"Name","value":"wikiLink"}},{"kind":"Field","name":{"kind":"Name","value":"updated"}},{"kind":"Field","name":{"kind":"Name","value":"avg24hPrice"}},{"kind":"Field","name":{"kind":"Name","value":"craftsFor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseCrafting"}}]}},{"kind":"Field","name":{"kind":"Name","value":"craftsUsing"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseCrafting"}}]}},{"kind":"Field","name":{"kind":"Name","value":"sellFor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseSellFor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"buyFor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseBuyFor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"bartersFor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseBarter"}}]}},{"kind":"Field","name":{"kind":"Name","value":"bartersUsing"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseBarter"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseTradeData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ItemPrice"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"priceRUB"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseSellFor"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ItemPrice"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseTradeData"}},{"kind":"Field","name":{"kind":"Name","value":"vendor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"normalizedName"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TraderOffer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"minTraderLevel"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseVendorItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Item"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gridImageLink"}},{"kind":"Field","name":{"kind":"Name","value":"shortName"}},{"kind":"Field","name":{"kind":"Name","value":"normalizedName"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"sellFor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseSellFor"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseCrafting"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Craft"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"duration"}},{"kind":"Field","name":{"kind":"Name","value":"level"}},{"kind":"Field","name":{"kind":"Name","value":"station"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"normalizedName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"requiredItems"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"item"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseVendorItem"}}]}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"rewardItems"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"item"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseVendorItem"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseBuyFor"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ItemPrice"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseTradeData"}},{"kind":"Field","name":{"kind":"Name","value":"vendor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"normalizedName"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TraderOffer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"minTraderLevel"}},{"kind":"Field","name":{"kind":"Name","value":"taskUnlock"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"normalizedName"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseBarter"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Barter"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"level"}},{"kind":"Field","name":{"kind":"Name","value":"requiredItems"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"item"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseVendorItem"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"rewardItems"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"item"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseVendorItem"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"trader"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"normalizedName"}},{"kind":"Field","name":{"kind":"Name","value":"imageLink"}}]}},{"kind":"Field","name":{"kind":"Name","value":"taskUnlock"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"normalizedName"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<ItemTrackerFieldsFragment, unknown>;
export const QuestRequirementsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"QuestRequirements"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Task"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"normalizedName"}}]}}]} as unknown as DocumentNode<QuestRequirementsFragment, unknown>;
export const BaseQuestTraderFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseQuestTraderFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Trader"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"normalizedName"}},{"kind":"Field","name":{"kind":"Name","value":"imageLink"}}]}}]} as unknown as DocumentNode<BaseQuestTraderFieldsFragment, unknown>;
export const BaseQuestRewardsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseQuestRewards"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TaskRewards"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"craftUnlock"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rewardItems"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"item"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseVendorItem"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"item"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseVendorItem"}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"normalizedName"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"offerUnlock"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"level"}},{"kind":"Field","name":{"kind":"Name","value":"item"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseVendorItem"}}]}},{"kind":"Field","name":{"kind":"Name","value":"trader"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseQuestTraderFields"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"skillLevelReward"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"level"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"traderStanding"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"standing"}},{"kind":"Field","name":{"kind":"Name","value":"trader"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseQuestTraderFields"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"traderUnlock"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseQuestTraderFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseTradeData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ItemPrice"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"priceRUB"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseSellFor"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ItemPrice"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseTradeData"}},{"kind":"Field","name":{"kind":"Name","value":"vendor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"normalizedName"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TraderOffer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"minTraderLevel"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseVendorItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Item"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gridImageLink"}},{"kind":"Field","name":{"kind":"Name","value":"shortName"}},{"kind":"Field","name":{"kind":"Name","value":"normalizedName"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"sellFor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseSellFor"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseQuestTraderFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Trader"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"normalizedName"}},{"kind":"Field","name":{"kind":"Name","value":"imageLink"}}]}}]} as unknown as DocumentNode<BaseQuestRewardsFragment, unknown>;
export const QuestFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"QuestFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Task"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"normalizedName"}},{"kind":"Field","name":{"kind":"Name","value":"taskImageLink"}},{"kind":"Field","name":{"kind":"Name","value":"kappaRequired"}},{"kind":"Field","name":{"kind":"Name","value":"minPlayerLevel"}},{"kind":"Field","name":{"kind":"Name","value":"experience"}},{"kind":"Field","name":{"kind":"Name","value":"trader"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"imageLink"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"normalizedName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"objectives"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TaskObjectiveItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"taskRequirements"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"task"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"QuestRequirements"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"startRewards"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseQuestRewards"}}]}},{"kind":"Field","name":{"kind":"Name","value":"finishRewards"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseQuestRewards"}}]}},{"kind":"Field","name":{"kind":"Name","value":"failureOutcome"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseQuestRewards"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseTradeData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ItemPrice"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"priceRUB"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseSellFor"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ItemPrice"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseTradeData"}},{"kind":"Field","name":{"kind":"Name","value":"vendor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"normalizedName"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TraderOffer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"minTraderLevel"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseVendorItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Item"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gridImageLink"}},{"kind":"Field","name":{"kind":"Name","value":"shortName"}},{"kind":"Field","name":{"kind":"Name","value":"normalizedName"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"sellFor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseSellFor"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseQuestTraderFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Trader"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"normalizedName"}},{"kind":"Field","name":{"kind":"Name","value":"imageLink"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"QuestRequirements"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Task"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"normalizedName"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseQuestRewards"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TaskRewards"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"craftUnlock"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rewardItems"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"item"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseVendorItem"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"item"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseVendorItem"}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"normalizedName"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"offerUnlock"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"level"}},{"kind":"Field","name":{"kind":"Name","value":"item"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseVendorItem"}}]}},{"kind":"Field","name":{"kind":"Name","value":"trader"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseQuestTraderFields"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"skillLevelReward"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"level"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"traderStanding"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"standing"}},{"kind":"Field","name":{"kind":"Name","value":"trader"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseQuestTraderFields"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"traderUnlock"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseQuestTraderFields"}}]}}]}}]} as unknown as DocumentNode<QuestFieldsFragment, unknown>;
export const QuestItemFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"QuestItemFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Item"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"normalizedName"}},{"kind":"Field","name":{"kind":"Name","value":"shortName"}},{"kind":"Field","name":{"kind":"Name","value":"gridImageLink"}},{"kind":"Field","name":{"kind":"Name","value":"craftsFor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseCrafting"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseTradeData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ItemPrice"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"priceRUB"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseSellFor"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ItemPrice"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseTradeData"}},{"kind":"Field","name":{"kind":"Name","value":"vendor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"normalizedName"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TraderOffer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"minTraderLevel"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseVendorItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Item"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gridImageLink"}},{"kind":"Field","name":{"kind":"Name","value":"shortName"}},{"kind":"Field","name":{"kind":"Name","value":"normalizedName"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"sellFor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseSellFor"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseCrafting"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Craft"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"duration"}},{"kind":"Field","name":{"kind":"Name","value":"level"}},{"kind":"Field","name":{"kind":"Name","value":"station"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"normalizedName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"requiredItems"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"item"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseVendorItem"}}]}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"rewardItems"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"item"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseVendorItem"}}]}}]}}]}}]} as unknown as DocumentNode<QuestItemFieldsFragment, unknown>;
export const BaseItemFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseItemFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Item"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"normalizedName"}},{"kind":"Field","name":{"kind":"Name","value":"shortName"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"inspectImageLink"}},{"kind":"Field","name":{"kind":"Name","value":"gridImageLink"}},{"kind":"Field","name":{"kind":"Name","value":"iconLink"}},{"kind":"Field","name":{"kind":"Name","value":"wikiLink"}},{"kind":"Field","name":{"kind":"Name","value":"updated"}},{"kind":"Field","name":{"kind":"Name","value":"avg24hPrice"}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"normalizedName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"craftsFor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseCrafting"}}]}},{"kind":"Field","name":{"kind":"Name","value":"craftsUsing"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseCrafting"}}]}},{"kind":"Field","name":{"kind":"Name","value":"sellFor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseSellFor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"buyFor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseBuyFor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"bartersFor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseBarter"}}]}},{"kind":"Field","name":{"kind":"Name","value":"bartersUsing"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseBarter"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseTradeData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ItemPrice"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"priceRUB"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseSellFor"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ItemPrice"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseTradeData"}},{"kind":"Field","name":{"kind":"Name","value":"vendor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"normalizedName"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TraderOffer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"minTraderLevel"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseVendorItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Item"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gridImageLink"}},{"kind":"Field","name":{"kind":"Name","value":"shortName"}},{"kind":"Field","name":{"kind":"Name","value":"normalizedName"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"sellFor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseSellFor"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseCrafting"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Craft"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"duration"}},{"kind":"Field","name":{"kind":"Name","value":"level"}},{"kind":"Field","name":{"kind":"Name","value":"station"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"normalizedName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"requiredItems"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"item"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseVendorItem"}}]}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"rewardItems"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"item"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseVendorItem"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseBuyFor"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ItemPrice"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseTradeData"}},{"kind":"Field","name":{"kind":"Name","value":"vendor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"normalizedName"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TraderOffer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"minTraderLevel"}},{"kind":"Field","name":{"kind":"Name","value":"taskUnlock"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"normalizedName"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseBarter"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Barter"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"level"}},{"kind":"Field","name":{"kind":"Name","value":"requiredItems"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"item"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseVendorItem"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"rewardItems"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"item"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseVendorItem"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"trader"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"normalizedName"}},{"kind":"Field","name":{"kind":"Name","value":"imageLink"}}]}},{"kind":"Field","name":{"kind":"Name","value":"taskUnlock"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"normalizedName"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<BaseItemFieldsFragment, unknown>;
export const BasePropertiesFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseProperties"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Item"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"properties"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ItemPropertiesWeapon"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"defaultPreset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseItemFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"presets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"craftsFor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseCrafting"}}]}},{"kind":"Field","name":{"kind":"Name","value":"craftsUsing"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseCrafting"}}]}},{"kind":"Field","name":{"kind":"Name","value":"bartersFor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseBarter"}}]}},{"kind":"Field","name":{"kind":"Name","value":"bartersUsing"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseBarter"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ItemPropertiesPreset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"baseItem"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseTradeData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ItemPrice"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"priceRUB"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseSellFor"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ItemPrice"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseTradeData"}},{"kind":"Field","name":{"kind":"Name","value":"vendor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"normalizedName"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TraderOffer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"minTraderLevel"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseVendorItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Item"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gridImageLink"}},{"kind":"Field","name":{"kind":"Name","value":"shortName"}},{"kind":"Field","name":{"kind":"Name","value":"normalizedName"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"sellFor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseSellFor"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseCrafting"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Craft"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"duration"}},{"kind":"Field","name":{"kind":"Name","value":"level"}},{"kind":"Field","name":{"kind":"Name","value":"station"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"normalizedName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"requiredItems"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"item"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseVendorItem"}}]}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"rewardItems"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"item"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseVendorItem"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseBuyFor"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ItemPrice"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseTradeData"}},{"kind":"Field","name":{"kind":"Name","value":"vendor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"normalizedName"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TraderOffer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"minTraderLevel"}},{"kind":"Field","name":{"kind":"Name","value":"taskUnlock"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"normalizedName"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseBarter"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Barter"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"level"}},{"kind":"Field","name":{"kind":"Name","value":"requiredItems"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"item"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseVendorItem"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"rewardItems"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"item"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseVendorItem"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"trader"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"normalizedName"}},{"kind":"Field","name":{"kind":"Name","value":"imageLink"}}]}},{"kind":"Field","name":{"kind":"Name","value":"taskUnlock"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"normalizedName"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseItemFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Item"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"normalizedName"}},{"kind":"Field","name":{"kind":"Name","value":"shortName"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"inspectImageLink"}},{"kind":"Field","name":{"kind":"Name","value":"gridImageLink"}},{"kind":"Field","name":{"kind":"Name","value":"iconLink"}},{"kind":"Field","name":{"kind":"Name","value":"wikiLink"}},{"kind":"Field","name":{"kind":"Name","value":"updated"}},{"kind":"Field","name":{"kind":"Name","value":"avg24hPrice"}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"normalizedName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"craftsFor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseCrafting"}}]}},{"kind":"Field","name":{"kind":"Name","value":"craftsUsing"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseCrafting"}}]}},{"kind":"Field","name":{"kind":"Name","value":"sellFor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseSellFor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"buyFor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseBuyFor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"bartersFor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseBarter"}}]}},{"kind":"Field","name":{"kind":"Name","value":"bartersUsing"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseBarter"}}]}}]}}]} as unknown as DocumentNode<BasePropertiesFragment, unknown>;
export const BaseQuestFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseQuestFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Task"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"normalizedName"}},{"kind":"Field","name":{"kind":"Name","value":"kappaRequired"}},{"kind":"Field","name":{"kind":"Name","value":"taskImageLink"}},{"kind":"Field","name":{"kind":"Name","value":"minPlayerLevel"}},{"kind":"Field","name":{"kind":"Name","value":"experience"}},{"kind":"Field","name":{"kind":"Name","value":"trader"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"imageLink"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"normalizedName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"taskRequirements"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"task"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"QuestRequirements"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"startRewards"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseQuestRewards"}}]}},{"kind":"Field","name":{"kind":"Name","value":"finishRewards"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseQuestRewards"}}]}},{"kind":"Field","name":{"kind":"Name","value":"failureOutcome"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseQuestRewards"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseTradeData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ItemPrice"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"priceRUB"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseSellFor"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ItemPrice"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseTradeData"}},{"kind":"Field","name":{"kind":"Name","value":"vendor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"normalizedName"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TraderOffer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"minTraderLevel"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseVendorItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Item"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gridImageLink"}},{"kind":"Field","name":{"kind":"Name","value":"shortName"}},{"kind":"Field","name":{"kind":"Name","value":"normalizedName"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"sellFor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseSellFor"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseQuestTraderFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Trader"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"normalizedName"}},{"kind":"Field","name":{"kind":"Name","value":"imageLink"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"QuestRequirements"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Task"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"normalizedName"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseQuestRewards"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TaskRewards"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"craftUnlock"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rewardItems"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"item"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseVendorItem"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"item"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseVendorItem"}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"normalizedName"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"offerUnlock"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"level"}},{"kind":"Field","name":{"kind":"Name","value":"item"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseVendorItem"}}]}},{"kind":"Field","name":{"kind":"Name","value":"trader"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseQuestTraderFields"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"skillLevelReward"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"level"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"traderStanding"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"standing"}},{"kind":"Field","name":{"kind":"Name","value":"trader"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseQuestTraderFields"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"traderUnlock"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseQuestTraderFields"}}]}}]}}]} as unknown as DocumentNode<BaseQuestFieldsFragment, unknown>;
export const BaseQuestItemFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseQuestItemFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Item"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"shortName"}},{"kind":"Field","name":{"kind":"Name","value":"normalizedName"}},{"kind":"Field","name":{"kind":"Name","value":"iconLink"}},{"kind":"Field","name":{"kind":"Name","value":"craftsFor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<BaseQuestItemFieldsFragment, unknown>;
export const HideoutQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"hideoutQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"lang"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"LanguageCode"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hideoutStations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"lang"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lang"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"imageLink"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"normalizedName"}},{"kind":"Field","name":{"kind":"Name","value":"levels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"level"}},{"kind":"Field","name":{"kind":"Name","value":"constructionTime"}},{"kind":"Field","name":{"kind":"Name","value":"itemRequirements"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"item"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseHideoutItemFields"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"stationLevelRequirements"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"level"}},{"kind":"Field","name":{"kind":"Name","value":"station"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"imageLink"}},{"kind":"Field","name":{"kind":"Name","value":"normalizedName"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"skillRequirements"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"level"}}]}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"traderRequirements"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"requirementType"}},{"kind":"Field","name":{"kind":"Name","value":"compareMethod"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"trader"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"imageLink"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"bonuses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"passive"}},{"kind":"Field","name":{"kind":"Name","value":"production"}},{"kind":"Field","name":{"kind":"Name","value":"skillName"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseHideoutItemFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Item"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"shortName"}},{"kind":"Field","name":{"kind":"Name","value":"normalizedName"}},{"kind":"Field","name":{"kind":"Name","value":"iconLink"}},{"kind":"Field","name":{"kind":"Name","value":"craftsFor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<HideoutQueryQuery, HideoutQueryQueryVariables>;
export const AllItemsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"allItems"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"lang"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"LanguageCode"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"lang"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lang"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseItemFields"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseProperties"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseTradeData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ItemPrice"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"priceRUB"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseSellFor"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ItemPrice"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseTradeData"}},{"kind":"Field","name":{"kind":"Name","value":"vendor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"normalizedName"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TraderOffer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"minTraderLevel"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseVendorItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Item"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gridImageLink"}},{"kind":"Field","name":{"kind":"Name","value":"shortName"}},{"kind":"Field","name":{"kind":"Name","value":"normalizedName"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"sellFor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseSellFor"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseCrafting"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Craft"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"duration"}},{"kind":"Field","name":{"kind":"Name","value":"level"}},{"kind":"Field","name":{"kind":"Name","value":"station"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"normalizedName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"requiredItems"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"item"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseVendorItem"}}]}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"rewardItems"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"item"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseVendorItem"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseBuyFor"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ItemPrice"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseTradeData"}},{"kind":"Field","name":{"kind":"Name","value":"vendor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"normalizedName"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TraderOffer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"minTraderLevel"}},{"kind":"Field","name":{"kind":"Name","value":"taskUnlock"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"normalizedName"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseBarter"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Barter"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"level"}},{"kind":"Field","name":{"kind":"Name","value":"requiredItems"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"item"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseVendorItem"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"rewardItems"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"item"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseVendorItem"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"trader"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"normalizedName"}},{"kind":"Field","name":{"kind":"Name","value":"imageLink"}}]}},{"kind":"Field","name":{"kind":"Name","value":"taskUnlock"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"normalizedName"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseItemFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Item"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"normalizedName"}},{"kind":"Field","name":{"kind":"Name","value":"shortName"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"inspectImageLink"}},{"kind":"Field","name":{"kind":"Name","value":"gridImageLink"}},{"kind":"Field","name":{"kind":"Name","value":"iconLink"}},{"kind":"Field","name":{"kind":"Name","value":"wikiLink"}},{"kind":"Field","name":{"kind":"Name","value":"updated"}},{"kind":"Field","name":{"kind":"Name","value":"avg24hPrice"}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"normalizedName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"craftsFor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseCrafting"}}]}},{"kind":"Field","name":{"kind":"Name","value":"craftsUsing"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseCrafting"}}]}},{"kind":"Field","name":{"kind":"Name","value":"sellFor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseSellFor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"buyFor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseBuyFor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"bartersFor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseBarter"}}]}},{"kind":"Field","name":{"kind":"Name","value":"bartersUsing"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseBarter"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseProperties"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Item"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"properties"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ItemPropertiesWeapon"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"defaultPreset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseItemFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"presets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"craftsFor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseCrafting"}}]}},{"kind":"Field","name":{"kind":"Name","value":"craftsUsing"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseCrafting"}}]}},{"kind":"Field","name":{"kind":"Name","value":"bartersFor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseBarter"}}]}},{"kind":"Field","name":{"kind":"Name","value":"bartersUsing"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseBarter"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ItemPropertiesPreset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"baseItem"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]}}]}}]} as unknown as DocumentNode<AllItemsQuery, AllItemsQueryVariables>;
export const AllQuestsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"allQuests"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"lang"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"LanguageCode"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tasks"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"lang"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lang"}}},{"kind":"Argument","name":{"kind":"Name","value":"faction"},"value":{"kind":"StringValue","value":"BEAR","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseQuestFields"}},{"kind":"Field","name":{"kind":"Name","value":"objectives"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TaskObjectiveBasic"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"requiredKeys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseQuestItemFields"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TaskObjectiveBuildItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"item"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseQuestItemFields"}},{"kind":"Field","name":{"kind":"Name","value":"properties"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ItemPropertiesWeapon"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"defaultPreset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseQuestItemFields"}}]}}]}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TaskObjectiveItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"foundInRaid"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseQuestItemFields"}},{"kind":"Field","name":{"kind":"Name","value":"types"}},{"kind":"Field","name":{"kind":"Name","value":"properties"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ItemPropertiesWeapon"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"defaultPreset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseQuestItemFields"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"requiredKeys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseQuestItemFields"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TaskObjectiveMark"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"markerItem"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseQuestItemFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"requiredKeys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseQuestItemFields"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TaskObjectiveQuestItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"requiredKeys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseQuestItemFields"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TaskObjectiveShoot"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"wearing"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseQuestItemFields"}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"QuestRequirements"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Task"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"normalizedName"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseTradeData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ItemPrice"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"priceRUB"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseSellFor"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ItemPrice"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseTradeData"}},{"kind":"Field","name":{"kind":"Name","value":"vendor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"normalizedName"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TraderOffer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"minTraderLevel"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseVendorItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Item"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gridImageLink"}},{"kind":"Field","name":{"kind":"Name","value":"shortName"}},{"kind":"Field","name":{"kind":"Name","value":"normalizedName"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"sellFor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseSellFor"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseQuestTraderFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Trader"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"normalizedName"}},{"kind":"Field","name":{"kind":"Name","value":"imageLink"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseQuestRewards"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TaskRewards"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"craftUnlock"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rewardItems"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"item"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseVendorItem"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"item"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseVendorItem"}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"normalizedName"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"offerUnlock"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"level"}},{"kind":"Field","name":{"kind":"Name","value":"item"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseVendorItem"}}]}},{"kind":"Field","name":{"kind":"Name","value":"trader"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseQuestTraderFields"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"skillLevelReward"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"level"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"traderStanding"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"standing"}},{"kind":"Field","name":{"kind":"Name","value":"trader"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseQuestTraderFields"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"traderUnlock"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseQuestTraderFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseQuestFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Task"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"normalizedName"}},{"kind":"Field","name":{"kind":"Name","value":"kappaRequired"}},{"kind":"Field","name":{"kind":"Name","value":"taskImageLink"}},{"kind":"Field","name":{"kind":"Name","value":"minPlayerLevel"}},{"kind":"Field","name":{"kind":"Name","value":"experience"}},{"kind":"Field","name":{"kind":"Name","value":"trader"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"imageLink"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"normalizedName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"taskRequirements"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"task"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"QuestRequirements"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"startRewards"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseQuestRewards"}}]}},{"kind":"Field","name":{"kind":"Name","value":"finishRewards"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseQuestRewards"}}]}},{"kind":"Field","name":{"kind":"Name","value":"failureOutcome"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseQuestRewards"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseQuestItemFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Item"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"shortName"}},{"kind":"Field","name":{"kind":"Name","value":"normalizedName"}},{"kind":"Field","name":{"kind":"Name","value":"iconLink"}},{"kind":"Field","name":{"kind":"Name","value":"craftsFor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<AllQuestsQuery, AllQuestsQueryVariables>;
export const FleaDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Flea"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"lang"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"LanguageCode"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fleaMarket"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"lang"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lang"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"normalizedName"}}]}}]}}]} as unknown as DocumentNode<FleaQuery, FleaQueryVariables>;
export const HideoutDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Hideout"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"lang"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"LanguageCode"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hideoutStations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"lang"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lang"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"imageLink"}},{"kind":"Field","name":{"kind":"Name","value":"normalizedName"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<HideoutQuery, HideoutQueryVariables>;
export const TradersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Traders"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"lang"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"LanguageCode"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"traders"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"lang"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lang"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"imageLink"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"normalizedName"}},{"kind":"Field","name":{"kind":"Name","value":"levels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"level"}},{"kind":"Field","name":{"kind":"Name","value":"imageLink"}}]}}]}}]}}]} as unknown as DocumentNode<TradersQuery, TradersQueryVariables>;