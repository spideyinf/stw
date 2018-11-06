import React from 'react'
import { wInfo } from '../utils/wInfo'
import { withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'

import Button from './Components/Button'
import LandingButton from './Components/LandingButton'

const stories = storiesOf('Components', module)

stories
  .addDecorator((story, context) => wInfo('')(story)(context))
  .addDecorator(withKnobs)
  .add('Button', Button)
  .add('LandingButton', LandingButton)
// Stories are kept being updated from here
