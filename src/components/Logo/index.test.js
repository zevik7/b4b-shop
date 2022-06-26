import { render, screen } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'

import Logo from './index'

describe('components/Logo', () => {
  test('Should return a logo with img tag', () => {
    render(
      <Router>
        <Logo />
      </Router>
    )
    const imgElement = screen.getByAltText('Shop logo')
    expect(imgElement).toBeInTheDocument()
  })
})
