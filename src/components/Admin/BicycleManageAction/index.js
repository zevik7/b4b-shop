import {
  DeleteOutlined,
  DownOutlined,
  PlusCircleOutlined,
} from '@ant-design/icons'
import { Button, Dropdown, Menu } from 'antd'
import React from 'react'
import { useTranslation } from 'react-i18next'

function BicycleManageAction({ setVisibleAdd, handleDelete, disabledActions }) {
  const { t } = useTranslation()
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
          label: `${t('admin_page.table.action.content')}`,
        },
      ]}
    />
  )

  return (
    <div className="action">
      <Dropdown disabled={disabledActions} overlay={menu}>
        <Button icon={<DownOutlined />}>
          {t('admin_page.table.action.title')}
        </Button>
      </Dropdown>
      <Button
        icon={<PlusCircleOutlined />}
        type="default"
        onClick={(e) => setVisibleAdd(true)}
      >
        {t('cta.add')}
      </Button>
    </div>
  )
}

export default BicycleManageAction
