import React from 'react'
import { action } from '@storybook/addon-actions'
import {  } from '@storybook/addon-knobs'

import RadioGroup from './index'
import Radio from '../Radio'

import markdown from './README.md'

export default {
  title: 'Atoms/RadioGroup',
}

const options = ['1', '2', '3']

export const radioGroup = () => (
  <RadioGroup onChange={action('radio changed')}>
    {options.map(option => <Radio value={option}>Option {option}</Radio>)}
  </RadioGroup>
)
radioGroup.story = {
  parameters: {
    notes: { markdown },
    jest:  ['RadioGroup.test.jsx'],
  },
}
