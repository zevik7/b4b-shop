import { AudioOutlined } from '@ant-design/icons'
import { Input, Space } from 'antd'
import _ from 'lodash'
import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'

import {
  bicyclesRemainingSelector,
  bicyclesSelector,
  searchSelector,
} from '../../redux/selectors'
import { fetchBicycles, onChange, setLoading } from '../../redux/slices'

const { Search } = Input

const SearchCustom = (props) => {
  const { style } = props
  const [text, setText] = useState('')
  const { t } = useTranslation()
  const dispatch = useDispatch()

  const firstUpdate = useRef(true)

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false
      return
    }

    const timerId = setTimeout(() => {
      dispatch(onChange(text))
      dispatch(fetchBicycles())
    }, 500)

    return () => clearTimeout(timerId)
  }, [text])

  return (
    <Search
      placeholder={t('cta.place-holder-search')}
      enterButton={t('cta.search')}
      value={text}
      onChange={(e) => setText(e.target.value)}
      style={{ ...style }}
    />
  )
}

export default SearchCustom
