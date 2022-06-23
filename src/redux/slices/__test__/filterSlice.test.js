import filterSlice, { priceChange } from '../filterSlice'

describe('redux/slices/filterSlice', () => {
  test('should return the initial state', () => {
    expect(filterSlice.reducer(undefined, {})).toEqual({
      price: [100, 10000],
      type: [],
      gender: [],
      brand: [],
      material: [],
      orderPrice: 'none',
    })
  })

  test('should return loading state', () => {
    expect(
      filterSlice.reducer({ price: [10, 100] }, priceChange([100, 1000]))
    ).toEqual({ price: [100, 1000] })
  })
})
