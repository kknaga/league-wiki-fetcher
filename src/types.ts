export type FandomChromas = Record<string, {
  "id": number,
  "availability": string,
  "source": string,
  "distribution": string
}>

export type FandomSkin = {
  "id": number,
  formatname: string,
  "availability": string,
  "looteligible": boolean,
  "cost": number,
  "release": string,
  "set": string[],
  "neweffects": boolean,
  "newanimations": boolean,
  "newrecall": boolean,
  "newvoice": boolean,
  newquotes: boolean,
  transforming: boolean,
  "chromas": FandomChromas,
  "voiceactor": string[],
  "splashartist": string[],
  "lore": string,
  filter?: boolean
}

export type FnadomChampion = {
  id: number,
  skins: Record<string, FandomSkin>
}
export type CDChampionSummary = {
  "id": number,
  "name": string,
  "alias": string,
  "squarePortraitPath": string,
  "roles": string[]
}[]
