import { writeFileSync } from "fs";
import { urls } from "./constants";
import { FnadomChampion } from "./types";
import { JSDOM } from "jsdom";

const champions = await getFandomDataAsJson<FnadomChampion>(urls.fandom.skins());

writeFileSync('fandom.json', JSON.stringify(champions, null, 2));

export async function getFandomDataAsJson<T>(url: string) {
  const response = await fetch(url);
  const data = await response.text();
  const dom = new JSDOM(data);
  const text = dom.window.document.querySelector('pre.mw-code.mw-script')?.textContent;

  if (typeof text !== 'string') {
    throw new Error('Fandom data not found');
  }

  return parseFandom<T>(text);
}

export function parseFandom<T>(text: string): Record<string, T> {
  const luaObject = text.substring(text.indexOf('{'), text.lastIndexOf('}') + 1)
  const luaAsJson = luaObject
    .replace(/\[(.+)\] *=/g, '$1:') // remove [] and replace = with :
    .replace(/\{(".+")\}/g, '[$1]') // replace {} with [] in arrays
    .replace(/: nil,/g, ': null,') // replace nil with null
    .replace(/,([ \n]+)}/g, `$1}`) // ensure there is no ending comma
    .replace(/,	*--.*/g, ',') // remove comments
    .replace(/--"/g, '"'); // remove comment before the property

  return JSON.parse(luaAsJson)
}
