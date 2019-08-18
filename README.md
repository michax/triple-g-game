# Triple G Game

[![Netlify Status](https://api.netlify.com/api/v1/badges/7a70bcb7-1f0c-48f3-aacc-40d43833ed22/deploy-status)](https://app.netlify.com/sites/tripleg/deploys)

Gems, Gems, Gems.
https://tripleg.netlify.com

[https://docs.google.com/document/d/1YCXyW5VdnKlDVnB0AKVTdeWJR1pZKWzktd3Ie4EiUZM/edit?usp=sharing](Game Docs)

## Requirements

The commands assume [Yarn](https://yarnpkg.com/en/docs/install) is installed.

## Commands

### `yarn run serve`

Start the Parcel build server at `http://localhost:1234`.

### `yarn run build`

Build, minify, and inline the game to `./dist/inlined/index.html`.

### `yarn run party`

Build, minify, inline, and zip the game to `./dist/zipped/game.zip`. This command finishes with a log message that says if the zip file is under 13k.
