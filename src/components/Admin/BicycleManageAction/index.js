import React from 'react'
import { Button, Dropdown, Menu } from 'antd'
import {
  DeleteOutlined,
  DownOutlined,
  PlusCircleOutlined,
} from '@ant-design/icons'

function BicycleManageAction({ setVisible, handleDelete }) {
  const actionForMenu = {
    1: handleDelete,
  }

  const handleClick = (e) => actionForMenu[e.key]()
  const menu = (
    <Menu
      onClick={handleClick}
      items={[
        {
          key: '1',
          icon: <DeleteOutlined />,
          label: 'Delete Selected',
        },
      ]}
    />
  )

  return (
    <div className="action">
      <Dropdown overlay={menu}>
        <Button icon={<DownOutlined />}>Actions</Button>
      </Dropdown>
      <Button
        icon={<PlusCircleOutlined />}
        type="default"
        onClick={(e) => setVisible(true)}
      >
        Add
      </Button>
    </div>
  )
}

export default BicycleManageAction
