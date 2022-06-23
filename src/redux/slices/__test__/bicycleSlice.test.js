import bicycleSlice from '../bicycleSlice'

describe('redux/slices/bicycleSlice', () => {
  test('should return the initial state', () => {
    expect(bicycleSlice.reducer(undefined, {})).toEqual({
      status: '',
      selected: {
        createdAt: '',
        name: '',
        price: '',
        brand: '',
        type: '',
        gender: '',
        material: '',
        variants: [],
        description: '',
        images: [],
        rating: '',
        id: '',
      },
      data: [],
      pagination: {
        current: 1,
        pageSize: 3,
        total: null,
      },
    })
  })
})
