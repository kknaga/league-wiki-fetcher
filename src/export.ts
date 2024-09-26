import { writeFileSync } from "fs";
import { urls } from "./constants";
import { FnadomChampion } from "./types";
import { getFandomDataAsJson } from "./index";

const champions = await getFandomDataAsJson<FnadomChampion>(urls.fandom.skins());

writeFileSync('fandom.json', JSON.stringify(champions, null, 2));