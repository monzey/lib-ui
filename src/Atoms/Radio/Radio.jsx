import React from 'react'
import styled from 'styled-components'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import BaseRadio from '@material-ui/core/Radio'

const RadioControl = styled(BaseRadio)`
  &.MuiIconButton-colorSecondary {
    &:hover, &.Mui-checked:hover {
      background: transparent;
    }
  }
`

BaseRadio.defaultProps = {
  size:               'small',
  disableRipple:      true,
  disableFocusRipple: true,
}

const Radio = ({ children, value, labelProps, ...props }) =>
  <FormControlLabel
    value={value || children}
    label={children}
    control={<RadioControl {...props}/>}
    {...labelProps}
  />

export default Radio
