# react-webpack-starter

## 1. Features

*   ES5, ES6 (ES2015), ES2016, ESNext
*   webpack
    *   webpack-dev-server + HMR
    *   dynamic imports
*   typescript
*   babel + polyfills
*   jsx + react + react-router v4 + RxJS
*   material design (material-ui)
*   css + scss + postcss (CSS modules + cssnext)
*   prettier + linters
*   husky (precommit hook) + lint-staged

## 2. TODO list

*   [ ] auto manifest.json + service-worker
*   [ ] PWA features, assets caching
*   [ ] better application architecture
*   [ ] HMR for single component
*   [ ] tests - unit, e2e (cypress)
*   [ ] dynamic dependency injection container

## 3. Requirements

*   node (v8.9.4)
*   yarn (v1.3.2)

## 4. Installation

```sh
yarn # [enter] or yarn install
```

## 5. Scripts

### \* webpack-dev-server (watch mode)

```sh
$ yarn start
```

```sh
$ yarn start -- --host=0.0.0.0 # default: localhost
```

```sh
$ yarn start -- --port=8081 # default: 8080
```

### \* production build (output in `./dist`)

```sh
$ yarn build
```

## 6. Capabilities

### _ importing image files i.e. `_.jpg`,`_.png`,`_.gif`,`\*.svg`

before:

```jsx
import image from "./example/path/image.png";

<img src={image} />;
```

after:

```jsx
<img src="./assets/image/23tr82r3278r28332.png" />
```

### _ using fonts (without import) in `_.scss` file

before:

```css
@font-face {
    font-family: Font;
    src: url("./fonts/font.woff") format("woff");
}
```

after:

```css
@font-face {
    font-family: Font;
    src: url("./assets/fonts/1387r122f3273.woff") format("woff");
}
```

### _ importing `_.json` files

```jsx
import file from "./path/image.json"; // { key: 'value' }
```

### \* using CSS modules - :local (default) and :global scope

before:

```scss
.myBox {
    color: red;
}
:global {
    .globalBox {
        color: blue;
    }
}
```

after:

```scss
._37f65 {
    color: red;
}
.globalBox {
    color: blue;
}
```

...and in JS:

```jsx
import { myBox, globalBox } from "./box-styles.scss"; // myBox -> "_37f65", globalBox -> "globalBox"

<div className={myBox}>
    <div className={globalBox} />
</div>;
```
