import React from 'react'
import { text, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import styled from 'styled-components'

import FormControl from './index'
import FormHelperText from './FormHelperText'
import FormLabel from './FormLabel'
import InputLabel from './InputLabel'
import Input from '../../Atoms/Input'
import Select from '../../Atoms/Select'
import RadioGroup from '../../Atoms/RadioGroup'
import Radio from '../../Atoms/Radio'

import markdown from './README.md'

export default {
  title: 'Molecules/FormControl',
}

const options = ['1', '2', '3', '4']

const Container = styled.div`
  display: flex;
  flex-direction: column;
  & > .MuiFormControl-root {
    margin-top: 15px;
  }
`

export const formControl = () => {
  const errorState = boolean('Error', false)
  const label = text('Label', 'Label')
  const helpText = text('Help text', 'Help text')
  const disabled = boolean('Disabled', false)

  return <Container>
    <FormControl error={errorState} disabled={disabled}>
      <InputLabel>
        {label}
      </InputLabel>
      <Input placeholder="Placeholder" onChange={action('Input changed')}/>
      <FormHelperText>
        {helpText}
      </FormHelperText>
    </FormControl>
    <FormControl error={errorState} disabled={disabled}>
      <InputLabel>
        {label}
      </InputLabel>
      <Select onChange={action('Select changed')}>
        {options.map(o => <option value={o}>Option {o}</option>)}
      </Select>
      <FormHelperText>
        {helpText}
      </FormHelperText>
    </FormControl>
    <FormControl>
      <FormLabel>
        {label}
      </FormLabel>
      <RadioGroup>
        {options.map(option => <Radio value={option}>Option {option}</Radio>)}
      </RadioGroup>
    </FormControl>
  </Container>
}
formControl.story = {
  parameters: {
    notes: { markdown },
    jest:  ['FormControl.test.jsx'],
  },
}
