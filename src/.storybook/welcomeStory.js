import React from 'react'
import { storiesOf } from '@storybook/react'

storiesOf('A welcome to SlingtheWeb', module).add('Styleguide', () => (
  <div>
    <h2>
      {' '}
      Styleguide built on{' '}
      <span>
        <a href="https://storybook.js.org/" target="_blank">Storybook</a>
      </span>{' '}
    </h2>
  </div>
))
