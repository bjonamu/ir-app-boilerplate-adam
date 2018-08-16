import { configure } from '@storybook/react';

const req = require.context('../src/Components', true, /\.story\.jsx?$/)
configure(() => {
  req.keys().forEach((filename) => req(filename))
}, module)