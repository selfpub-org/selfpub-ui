/* global require */
/* global module */
import { configure, addDecorator } from '@storybook/react';
import { withKnobs } from "@storybook/addon-knobs";

// Add the `withKnobs` decorator to add knobs support to your stories.
addDecorator(withKnobs);

function loadStories() {
const req = require.context('../components', true, /\.stories\.js$/);
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module);
