import styled, { css } from 'styled-components'
import { css as systemCss } from '@styled-system/css'
import BaseFormControl from '@material-ui/core/FormControl'

export const formControlStyles = css`
  &.MuiFormControl-root:not(:first-child) {
    margin-top: 15px;
  }

  label > .MuiInputBase-root, label + .MuiInputBase-root {
    ${systemCss({ marginTop: 's' })};
  }
`

const FormControl = styled(BaseFormControl)`
  ${formControlStyles}
`

export default FormControl
