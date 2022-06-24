import bicycleSlice, { changeCurrentPage, setLoading } from '../bicycleSlice'

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

  test('should return loading state', () => {
    expect(bicycleSlice.reducer({ status: '' }, setLoading('loading'))).toEqual(
      {
        status: 'loading',
      }
    )
  })

  test('should return current page', () => {
    expect(
      bicycleSlice.reducer(
        {
          pagination: {
            current: 1,
            pageSize: 3,
            total: null,
          },
        },
        changeCurrentPage(2)
      )
    ).toEqual({
      pagination: {
        current: 2,
        pageSize: 3,
        total: null,
      },
    })
  })
})
