<p align="center" style="margin-bottom: 0px !important;">
  <img width="200" src="http://material-bread.org/logo-shadow.svg" alt="Material Bread logo" align="center">
</p>
<h1 align="center" style="margin-top: 0px;">Material Bread</h1>


  
<p align="center" >Cross Platform React Native Material Design Components</p>

<div align="center" >

[![Build Status](https://img.shields.io/travis/codypearce/material-bread/master.svg?style=for-the-badge)](https://travis-ci.org/codypearce/material-bread) [![NPM registry](https://img.shields.io/npm/v/material-bread.svg?style=for-the-badge)](https://www.npmjs.com/package/material-bread) ![Code style](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=for-the-badge) ![NPM license](https://img.shields.io/badge/license-mit-red.svg?style=for-the-badge) [![Storybook](https://cdn.jsdelivr.net/gh/storybooks/brand@master/badge/badge-storybook.svg?style=for-the-badge)](https://codypearce.github.io/material-bread/)

</div>

### Features

* Highly Customizable React Native Components.
* Cross platform support: React Native (iOS, Android), React-native-web (Browsers), Electron (Windows, Mac, Linux).
* Support for most Material Design 2.0 components in docs.
* Live react native demos you can edit in in your browser.


## Table of Contents
* [Quick Start](#quick-start)
* [Documentation](#documentation)
* [Example Repos](#example-repos)
* [Usage](#usage)
* [Contributing](#contributing)

## Quick Start

1. `npm install material-bread` or `yarn add material-bread`
2. Install and link [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons)
3. Wrap your root `<App>` with a `<BreadProvider>`
```jsx
<BreadProvider>
  <Root />
</BreadProvider>
```
4. Start developing!

Read the getting started guides for your platform to learn more about configuring webpack, setting up fonts, customizing the theme, and more. See the [example repos](#example-repos) below for simple boilerplate.

[React Native](http://material-bread.org/getting-started/react-native)

[Web](http://material-bread.org/getting-started/web)

[Electron](http://material-bread.org/getting-started/electron)

## Documentation

The component API docs and curated demos can be found at [material-bread.org](https://material-bread.org). See the [contributing](#contributing) section to learn how to run the docs locally.

More demos for each component can be found at the component [Storybook](https://codypearce.github.io/material-bread/). This environment is used for developing cross-platform, see the [contributing](#contributing) section to learn how to set it up locally.



## Example Repos

[React Native](https://github.com/codypearce/material-bread-rn-example)

[Expo](https://github.com/codypearce/material-bread-expo-example)

[React](https://github.com/codypearce/material-bread-react-example)

[Electron](https://github.com/codypearce/material-bread-electron-example)

## Usage

```jsx
import React from 'react';
import { Button } from 'material-bread';

function App() {
  return <Button type="contained">Click Me</Button>;
}
```

## Contributing

Any contributions are welcome, you can read more about [contributing in the docs](http://material-bread.org/contributing/library)
