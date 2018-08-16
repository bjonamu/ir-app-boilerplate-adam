import React from 'react'
import Button from './Button'
import { storiesOf } from '@storybook/react'

storiesOf('Button')
  .add('Regular like', () => (
    <Button>Click</Button>
  ))
  .add('Disabled', () => (
    <Button disabled>Disabled</Button>
  ))
