import { JSDOM } from "jsdom";

export async function getWikiDataAsJson<T>(url: string) {
  const response = await fetch(url);
  const data = await response.text();
  const dom = new JSDOM(data);
  const text = dom.window.document.querySelector('pre.mw-code.mw-script')?.textContent;

  if (typeof text !== 'string') {
    throw new Error('Wiki data not found');
  }

  return parseWiki<T>(text);
}

export function parseWiki<T>(text: string): Record<string, T> {
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
