# League of Legends Fandom Data Fetcher

Get the latest data from fandom in JSON format

### Using the script
you can either copy `fandom.json` from the repository or run the script to get the latest data.

```
npm i

npm run export
```

### Using the package in your project

```
npm i league-fandom-fetcher
```

```
import { getFandomDataAsJson } from 'league-fandom-fetcher';

const skinsData = await getFandomDataAsJson('https://leagueoflegends.fandom.com/wiki/Module:SkinData/data');
```

The fetcher is defined with a single url to fetch and save as JSON. However, the logic for fetching data from fandom can be extended to other URLs as long as they're created in a similar way.

If you see any issues with this script please create an issue or roll your sleeves and create a PR.
