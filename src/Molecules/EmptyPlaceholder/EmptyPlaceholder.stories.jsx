import React from 'react'
import { action } from '@storybook/addon-actions'
import {  } from '@storybook/addon-knobs'

import EmptyPlaceholder from './index'
import { MailOutline } from 'styled-icons/material/MailOutline'
import Button from '../../Atoms/Button'

import markdown from './README.md'

export default {
  title: 'Molecules/EmptyPlaceholder',
}

export const emptyPlaceholder = () => (
  <EmptyPlaceholder
    icon={<MailOutline size={98} />}
    primaryText="Il n'y a pas encore de jedis définis sur ce monde"
    secondaryText="Les jedis que vous allez créer sur ce monde vont apparaitre ici"
    action={
      <Button onClick={action('Empty placeholder button clicked')} color="success" size="large">
        Do something
      </Button>
    }
  />
)
emptyPlaceholder.story = {
  parameters: {
    notes: { markdown },
    jest:  [],
  },
}
