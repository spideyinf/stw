import React from 'react'
import { text, select, object } from '@storybook/addon-knobs'
import Button from 'components/Button'

const contextOptions = {
  primary: 'primary',
  secondary: 'secondary',
}

const colorOptions = {
  indigo: 'indigo',
  green: 'green',
}

const component = () => (
  <Button
    context={select('Context', contextOptions, 'primary')}
    color={select('Color', colorOptions, 'indigo')}
    className={text('ClassName', '')}
    type={text('Type', 'button')}
    style={object('Style', {})}
    children={text('Label', 'Button')}
    onClick={() => null}
  />
)

export default component
