import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import MessageButton from './index'

test('Button should render', () => {
  render(<MessageButton />)
  expect(screen.getByRole('button')).toBeInTheDocument()
  expect(screen.getByRole('button')).toHaveTextContent('ORDER')
})

test('Button should be clickable', async () => {
  const user = userEvent.setup()
  const handleClick = jest.fn()
  render(<MessageButton onClick={handleClick}>Click me</MessageButton>)
  await user.click(screen.getByRole('button'))

  expect(handleClick).toHaveBeenCalled()
})
