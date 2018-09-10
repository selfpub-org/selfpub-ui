<p align="center" style="background: #3B393F;">
  <a href="https://selfpub.ru">
    <img width="230" src="https://selfpub.ru/static/i/logo_black.svg">
  </a>
</p>

# SelfPub UI

![GitHub](https://img.shields.io/github/license/mybook/selfpub-ui.svg)
[![node (scoped)](https://img.shields.io/node/v/@selfpub/selfpub-ui.svg)](https://www.npmjs.com/package/@selfpub/selfpub-ui)
![npm (scoped)](https://img.shields.io/npm/v/@selfpub/selfpub-ui.svg)
[![framework: react](https://img.shields.io/badge/framework-react-blue.svg)](https://github.com/facebook/react/)
[![style: styled-components](https://img.shields.io/badge/style-%F0%9F%92%85%20styled--components-orange.svg?colorB=daa357&colorA=db748e)](https://github.com/styled-components/styled-components)


[SelfPub](https://selfpub.ru) UI design system language and React-based components implementation.

# Notice

In project used `styled-components` must use in project same version `styled-components`

## Browsers support

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari-ios/safari-ios_48x48.png" alt="iOS Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>iOS Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/samsung-internet/samsung-internet_48x48.png" alt="Samsung" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Samsung | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/archive/android/android_48x48.png" alt="Yandex" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Android |
| --------- | --------- | --------- | --------- | --------- | --------- | --------- |
| IE10, IE11, Edge| last 5 versions| last 5 versions| last 2 versions| last 3 versions| last 3 versions| 4.4+ |

## Install

```bash
npm install @selfpub/selfpub-ui
---
yarn add @selfpub/selfpub-ui
```

## Try it out

Here's an example of using the `@selfpub/selfpub-ui` "Button" component. First, import Button into your project:

```js
import { Button } from '@selfpub/selfpub-ui'
```

Here's a minimal functional example:

```js
// src/index.js
import React from 'react'
import { render } from 'react-dom'
import { ThemeProviderWrapper } from "@selfpub/selfpub-ui";
import App from './App'

const app = (
  <ThemeProviderWrapper>
    <App />
  </ThemeProviderWrapper>
)

render(app, document.getElementById('root'))

// src/App.js
import React from 'react'
import { Button } from '@selfpub/selfpub-ui'

export default class App extends React.Component {
  render() {
    return (
      <Button
        variation="primary"
        size="big"
        onClick={() => console.log("click")}
      >
        Перейти в услуги
      </Button>
    );
  }
}
```


## Development

Required external dependencies of the system:

* [Node.js 9+](https://nodejs.org/en/)
* [Yarn](https://yarnpkg.com/en/)

Steps to launch development environment:

1. Clone repository `git clone git@github.com:MyBook/selfpub-ui.git`
2. Go to project directory `cd selfpub-ui`
2. Install dependencies `yarn install` or `yarn`
3. Run developer environment (storybook)`yarn run storybook:dev`
4. open `http://localhost:9001`

## Scripts

The following scripts are available via npm or yarn:

* `yarn start` - Runs a build and run incremental build
* `yarn pub` - Runs a build and prepare for publishing
* `yarn deploy-storybook` - Runs a build and deploy stories at [https://mybook.github.io/selfpub-ui](https://mybook.github.io/selfpub-ui/)
* `yarn storybook:build` - Run build static version without watching
* `yarn storybook:dev` - Run build static version with watching and hot reloading
* `yarn test` - Runs a jest test
* `yarn test:watch` - Runs a jest test with watch
* `yarn test:generate-output` - Runs a build jest test for generate meta data in one test run
* `yarn build` - Runs a build only (no server)

## Structure

```
├── .out              # dir for build test
├── .storybook        # storybook configuration
├── .babelrc          # babelrc config
├── .editorconfig     # editoroconfig
├── .eslintrc.json    # eslint config
├── .gitignore        # git ignore
├── .npmignore        # ignore files and directories on publish
├── .nvmrc            # config for nvm
├── package.json
└── src
    ├── components    # react source code and stories
    ├── assets        # static file assets
    └── utils         # utils methods and class
```

## Building components

All components inside should:

 - Be reuseable
 - Have tests (recomended)
 - Have stories (as per React Storybook)
 - Component styles, tests and stories should live along side their components. Tests and stories are automatically picked up by their respective modules via a strict naming convention:

```
// Description of components
README.md

// Re export file
index.js

// Component
link.js

// Styles
link.styled.js

// Tests
link.test.js

// Snapshots
__snapshots__/link.test.js.snap

// for many tests
__tests__/link.test.js

// Story
link.stories.js

// for many stories
__stories__ 
```

### Example structure

```
 link
   ├── README.md
   ├── __stories__
   │   ├── all-in-one.js
   │   └── editable-props.js
   ├── index.js
   ├── link.js
   ├── link.stories.js
   └── link.styled.js
```

Literally speaking, components should live in their own directory with the same name as the component, e.g., components/link/link.js. In some cases, you may find it makes more sense to have multiple components live in the same directory.

## Publish site to gh-pages

```bash
$ yarn "deploy-storybook"
```

## Links

- [Repository](https://github.com/MyBook/selfpub-ui)
- [Components](https://github.com/MyBook/selfpub-ui/tree/master/src/components)
- [Change Log](CHANGELOG.md)

## Issues

Please use our publicly visible [issues page](https://github.com/MyBook/selfpub-ui/issues) to ask questions, report issues or submit feature requests.

## License

`@selfpub/selfpub-ui` is [MIT](https://github.com/MyBook/selfpub-ui/blob/master/LICENCE) licensed.
