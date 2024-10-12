import { writeFileSync } from "fs";
import { urls } from "./constants";
import { FnadomChampion } from "./types";
import { getWikiDataAsJson } from "./index";

const champions = await getWikiDataAsJson<FnadomChampion>(urls.wiki.skins());

writeFileSync('wiki.json', JSON.stringify(champions, null, 2));