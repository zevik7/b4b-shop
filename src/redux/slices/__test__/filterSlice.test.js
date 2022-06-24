import filterSlice, {
  genderChange,
  priceChange,
  typeChange,
} from '../filterSlice'

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

  test('should return price state', () => {
    expect(
      filterSlice.reducer({ price: [10, 100] }, priceChange([100, 1000]))
    ).toEqual({ price: [100, 1000] })
  })

  test('should return type state', () => {
    expect(
      filterSlice.reducer({ type: [] }, typeChange(['Type 1', 'Type 2']))
    ).toEqual({
      type: ['Type 1', 'Type 2'],
    })
  })

  test('should return gender state', () => {
    expect(
      filterSlice.reducer({ gender: [] }, genderChange(['male', 'female']))
    ).toEqual({
      gender: ['male', 'female'],
    })
  })
})
