import { configure, addDecorator } from '@storybook/react';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';
import { light, dark } from  '../src/Styles/Themes';

const themes = [ light, dark ];
addDecorator(withThemesProvider(themes));

const req = require.context('../src/Components', true, /\.story\.jsx?$/)

configure(() => {
  req.keys().forEach((filename) => req(filename))
}, module)