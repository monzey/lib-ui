import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import userEvent from '@testing-library/user-event'
import util from '@date-io/date-fns'

import BaseDateRange from './index'
import { MuiPickersUtilsProvider } from '../../Atoms/DateTimePicker'
import { TransProvider } from '../../Atoms/Trans'

const translations = {
  global: {
    dateFormat: 'dd/MM/yyyy hh:mm',
  },
}

const DateRange = props =>
  <TransProvider value={translations}>
    <MuiPickersUtilsProvider utils={util}>
      <BaseDateRange variant="static" {...props} />
    </MuiPickersUtilsProvider>
  </TransProvider>

it('should call onChange', () => {
  const onChange = jest.fn()
  const { queryAllByText } = render(<DateRange
    value={{
      start: new Date('December 17, 1995 03:24:00'),
      end:   new Date('December 20, 1995 03:24:00'),
    }}
    onChange={onChange}
  />)

  userEvent.click(queryAllByText('20')[0])
  expect(onChange).toBeCalledWith({
    start: new Date('December 20, 1995 03:24:00'),
    end:   new Date('December 20, 1995 03:24:00'),
  })
})

it('should prevent to set a start date after the end date', () => {
  const onChange = jest.fn()
  const { queryAllByText } = render(<DateRange
    value={{
      start: new Date('December 17, 1995 03:24:00'),
      end:   new Date('December 20, 1995 03:24:00'),
    }}
    onChange={onChange}
  />)

  userEvent.click(queryAllByText('21')[0])

  expect(onChange).toHaveBeenNthCalledWith(1, {
    start: new Date('December 21, 1995 03:24:00'),
    end:   new Date('December 21, 1995 03:24:00'),
  })
})
