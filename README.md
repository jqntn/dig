# dig

Minimal Babylon.js sample scene: one rotating cube on WebGPU, no build step.

## Run

```sh
npm install
npm start
```

Then open the printed `http://localhost:...` address. `index.html` loads the
Babylon.js UMD bundle from jsDelivr, so the page also runs on any static host.
`npm install` gives Biome, TypeScript, the local server and the Babylon.js
types. Keep the version in `index.html` equal to the one in `package.json`.

`WebGPUEngine.CreateAsync` needs a secure context, so `localhost` over HTTP or
any HTTPS origin works. It also needs a browser with WebGPU. Babylon.js does
not fall back to WebGL here.

## Check

```sh
npm run ci
npm test
```

Runs Biome (lint, format, import and key sorting) and TypeScript in `checkJs`
mode. `npm test` runs `*.test.js` with the Node.js test runner. There is no
build: the JS files are served as-is.

The bundle puts a `BABYLON` global on the page. `jsconfig.json` lists
`node_modules/babylonjs/babylon.d.ts` under `files`, which gives that global its
types. `biome.json` declares the same name under `javascript.globals`.

## Layout

| File               | Role                                            |
| ------------------ | ----------------------------------------------- |
| `index.html`       | Full-viewport canvas, CDN script, entry point.  |
| `main.js`          | Engine, scene, camera, light, cube, frame loop. |
| `rotation.js`      | Cube angle from elapsed time.                   |
| `rotation.test.js` | Checks for `rotation.js`.                       |
