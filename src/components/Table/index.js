import { Table } from 'antd'

const TableCustom = (props) => {
  const { data, cols, ...others } = props

  return <Table dataSource={data} columns={cols} {...others} />
}

export default TableCustom
