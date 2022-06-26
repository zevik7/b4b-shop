import searchSlice, { onChange } from '../searchSlice'

describe('redux/slices/searchSlice', () => {
  test('should return the initial state', () => {
    expect(searchSlice.reducer(undefined, {})).toEqual({
      value: '',
    })
  })

  test.each([
    { provider: 'This', expectation: 'This' },
    { provider: 'This is', expectation: 'This is' },
    { provider: 'This is search', expectation: 'This is search' },
    { provider: 'This is search text', expectation: 'This is search text' },
  ])('should return new search state', ({ provider, expectation }) => {
    const rs = searchSlice.reducer({ value: '' }, onChange(provider))
    expect(rs).toEqual({ value: expectation })
  })
})
