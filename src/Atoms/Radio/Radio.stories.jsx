import React from 'react'
import {  } from '@storybook/addon-knobs'

import Radio from './index'

import markdown from './README.md'

export default {
  title: 'Atoms/Radio',
}

export const radio = () => (
  <Radio value="test">
    Test
  </Radio>
)
radio.story = {
  parameters: {
    notes: { markdown },
    jest:  ['Radio.test.jsx'],
  },
}
