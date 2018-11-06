import { configure, setAddon } from '@storybook/react'
import { setOptions } from '@storybook/addon-options';
import infoAddon from '@storybook/addon-info';

import './index.css'

setAddon(infoAddon)
const req = require.context('../.stories/', true, /.stories.js$/)

setOptions({
  name: 'SlingtheWeb',
  url: '',
  goFullScreen: false,
  showStoriesPanel: true,
  showAddonPanel: true,
  showSearchBox: false,
  addonPanelInRight: true,
  sortStoriesByKind: true,
})

function loadStories() {
  require('./welcomeStory.js')
  req.keys().forEach(file => req(file))
}

configure(loadStories, module)
