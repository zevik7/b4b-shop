import searchSlice, { onChange } from '../searchSlice'

describe('redux/slices/searchSlice', () => {
  test('should return the initial state', () => {
    expect(searchSlice.reducer(undefined, {})).toEqual({
      value: '',
    })
  })

  test('should return new search state', () => {
    expect(
      searchSlice.reducer({ value: '' }, onChange('This is search text'))
    ).toEqual({ value: 'This is search text' })
  })
})
