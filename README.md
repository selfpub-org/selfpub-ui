<p align="center" style="background: #3B393F;">
  <a href="https://selfpub.ru">
    <img width="230" src="https://selfpub.ru/static/i/logo_black.svg">
  </a>
</p>

# Selfpub UI
[![version: 0.18.2](https://img.shields.io/badge/version-0.18.2-green.svg)](https://github.com/styled-components/styled-components)
[![style: styled-components](https://img.shields.io/badge/style-%F0%9F%92%85%20styled--components-orange.svg?colorB=daa357&colorA=db748e)](https://github.com/styled-components/styled-components)



[Selfpub](selfpub.ru) UI design system language and React-based components implementation.

## Features

- Library of components

## Environment Support

* Server-side Rendering!?

## Browsers support

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari-ios/safari-ios_48x48.png" alt="iOS Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>iOS Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/samsung-internet/samsung-internet_48x48.png" alt="Samsung" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Samsung | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/archive/android/android_48x48.png" alt="Yandex" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Android |
| --------- | --------- | --------- | --------- | --------- | --------- | --------- |
| IE10, IE11, Edge| last 5 versions| last 5 versions| last 2 versions| last 3 versions| last 3 versions| 4.4+

## Install

```bash
git clone git@github.com:MyBook/selfpub-ui.git
```

## Development

```bash
# Clone repository
$ git clone git@github.com:MyBook/selfpub-ui.git

# Go to project directory
$ cd selfpub-ui

# Install frontend dependencies
$ yarn install

# Start develop build with watching
$ yarn storybook:dev
```

## Usage

### How Add in project

```bash
# Add library of components in project (add meta + git clone)
$ git submodule add git@github.com:MyBook/selfpub-ui.git

# Commit state of change
$ git commit -am 'added selfpub-ui module'

# Push commit of state
$ git push origin master
```

### How Clone project with submodules

```bash
# Clone a project with a submodule in it.
$ git clone git@github.com:MyBook/selfpub.git

# Initialize your local configuration file
$ git submodule init

# Fetch all the data from that project and check out the appropriate commit listed in your superproject
$ git submodule update

# ------

# Or just use shotand comand
$ git clone --recurse-submodules git@github.com:MyBook/selfpub.git
```

### How update submodule

```shell
# Update submodule selfpub-ui (at last commit)
$ git submodule update --remote selfpub-ui
```

## Links

- [Repository](https://github.com/MyBook/selfpub-ui)
- [Components](https://github.com/MyBook/selfpub-ui/tree/master/components)
- [Change Log](CHANGELOG.md)

Open your browser and visit http://localhost:9001, see more at [Development](https://github.com/MyBook/selfpub-ui/wiki/Development).
