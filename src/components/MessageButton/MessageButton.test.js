import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import MessageButton from '.'

test('Button should render', () => {
  render(<MessageButton />)
  expect(screen.getByRole('button')).toBeInTheDocument()
  expect(screen.getByRole('button')).toHaveTextContent('ORDER')
})
