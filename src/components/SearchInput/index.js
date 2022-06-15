import { AudioOutlined } from '@ant-design/icons'
import { Input, Space } from 'antd'
const { Search } = Input

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 20,
      color: 'gray',
    }}
  />
)

const onSearch = (value) => console.log(value)

const SearchCustom = (props) => {
  const { style } = props

  return (
    <Search
      placeholder="Type anything to search"
      enterButton="Search"
      suffix={suffix}
      onSearch={onSearch}
      style={{ ...style }}
    />
  )
}

export default SearchCustom
