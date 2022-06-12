import { MinusCircleOutlined } from '@ant-design/icons'
import { Input, Space } from 'antd'
import './index.less'

const { Search } = Input

const onSearch = (value) => console.log(value)

const BicycleSearch = ({ setOpenSearchBar }) => {
  const prefix = (
    <MinusCircleOutlined
      onClick={() => {
        setOpenSearchBar(false)
      }}
      style={{ marginRight: '1rem', color: '#DD2F38', cursor: 'pointer' }}
    />
  )
  return (
    <Space direction="vertical">
      <Search
        prefix={prefix}
        placeholder="Search..."
        allowClear
        size="large"
        onSearch={onSearch}
        className="product-search"
      />
    </Space>
  )
}

export default BicycleSearch
