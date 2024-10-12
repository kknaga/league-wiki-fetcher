# League of Legends Wiki Data Fetcher

Get the latest data from wiki in JSON format

## Using the script
you can either copy `wiki.json` from the repository or run the script to get the latest data.

```
npm i

npm run export
```

## Using the package in your project

```
npm i league-wiki-fetcher
```

```
import { getWikiDataAsJson } from 'league-wiki-fetcher';

const skinsData = await getWikiDataAsJson('https://leagueoflegends.wiki.com/wiki/Module:SkinData/data');
```

The fetcher is defined with a single url to fetch and save as JSON. However, the logic for fetching data from wiki can be extended to other URLs as long as they're created in a similar way.

If you see any issues with this script please create an issue or roll your sleeves and create a PR.
