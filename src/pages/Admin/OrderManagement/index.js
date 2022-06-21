import React, { useState } from 'react'
import { Button, Col, Row, Space } from 'antd'
import { BicycleManageAction, TableManagement } from '../../../components'
import {
  DeleteOutlined,
  EditOutlined,
  InfoCircleOutlined,
} from '@ant-design/icons'
import { useTranslation } from 'react-i18next'

function OrderManagement(props) {
  //Initialization
  const [selectedKey, setSelectedKey] = useState([])
  const { t } = useTranslation()

  //columns data for table list bicycles
  const columns = [
    {
      title: `${t('admin_page.order_table.bicycle')}`,
      dataIndex: 'bicycleName',
      sorter: (a, b) => a.bicycleName.length - b.bicycleName.length,
    },
    {
      title: `${t('admin_page.order_table.quantity')}`,
      dataIndex: 'quantity',
      sorter: (a, b) => a.quantity.length - b.quantity.length,
    },
    {
      title: `${t('admin_page.order_table.customer')}`,
      dataIndex: 'customer',
      sorter: (a, b) => a.customer.length - b.customer.length,
    },
    {
      title: `${t('admin_page.order_table.phone_number')}`,
      dataIndex: 'phone',
      sorter: (a, b) => a.phone.length - b.phone.length,
    },

    {
      title: `${t('admin_page.order_table.action.title')}`,
      key: 'action',
      align: 'center',
      render: (_, record) => (
        <Space>
          <Button
            type="default"
            shape="default"
            // onClick={(e) => showEdit(record)}
            icon={<InfoCircleOutlined />}
          />
          <Button
            type="primary"
            shape="default"
            onClick={() => {
              // handleDelete(record.id)
            }}
            icon={<DeleteOutlined />}
          />
        </Space>
      ),
    },
  ]

  //func handle when Bicycle selected change
  const handleSelectChange = (selectedRowKeys, selectedRows) => {
    setSelectedKey(selectedRowKeys)
  }

  return (
    <>
      <Row className="bicycleManagement">
        <Col span={24}>
          <TableManagement
            rowSelection={{
              onChange: handleSelectChange,
            }}
            columns={columns}
            // data={bicycleState}
            loading={true}
          />
        </Col>
      </Row>
    </>
  )
}

export default OrderManagement
