/* global require, module */
import React from "react";
import backgrounds from "@storybook/addon-backgrounds";
import { configure, addDecorator } from "@storybook/react";
import { setOptions } from "@storybook/addon-options";
import { withKnobs } from "@storybook/addon-knobs";
import packageConf from "./../package";
import svgSpriteInjector from "svg-sprite-injector";

setOptions({
  name: `Selfpub UI Design v${packageConf.version}`,
  url: "https://github.com/MyBook/selfpub-ui/",
  goFullScreen: false,
  showStoriesPanel: true,
  showAddonPanel: true,
  addonPanelInRight: false,
  sortStoriesByKind: true,
});

addDecorator(story => <div style={{ margin: "15px" }}>{story()}</div>);

addDecorator(withKnobs);

addDecorator(
  backgrounds([
    { name: "White", value: "#ffffff", default: true },
    { name: "Main", value: "#efeee9" },
    { name: "Footer, header", value: "#3b393f" },
    { name: "Profile", value: "#efefef" },
  ])
);

const req = require.context("../src/components", true, /.stories.js$/);

const svgFiles = require.context("../src/assets/icons", true, /\.svg$/);
svgFiles.keys().forEach(key => svgFiles(key));
svgSpriteInjector("icons.svg");

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
