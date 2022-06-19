import { useState, useEffect } from 'react'
import { Input, Space } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import {
  bicyclesSelector,
  searchSelector,
  bicyclesRemainingSelector,
} from '../../redux/selectors'
import { fetchBicycles, onChange, setLoading } from '../../redux/slices'

import _ from 'lodash'

import { AudioOutlined } from '@ant-design/icons'

const { Search } = Input

const SearchCustom = (props) => {
  const { style } = props
  const [text, setText] = useState('')
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setLoading('loading'))
    const timerId = setTimeout(() => {
      dispatch(onChange(text))
      dispatch(setLoading('idle'))
    }, 1000)

    return () => clearTimeout(timerId)
  }, [text])

  return (
    <Search
      placeholder="Type anything to search"
      enterButton="Search"
      value={text}
      onChange={(e) => setText(e.target.value)}
      style={{ ...style }}
      // suffix={
      //   <AudioOutlined
      //     style={{
      //       fontSize: 20,
      //       color: 'gray',
      //     }}
      //     onClick={() => console.log('Mic search test...')}
      //   />
      // }
    />
  )
}

export default SearchCustom
