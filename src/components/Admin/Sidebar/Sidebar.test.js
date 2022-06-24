import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'

import Sidebar from './index'

test('should render Sidebar', async () => {
  render(
    <Router>
      <Sidebar collapsed={false} />
    </Router>
  )
  expect(screen.getByRole('menu')).toBeInTheDocument()
})
