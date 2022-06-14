import React from 'react'
import { Button } from 'antd'

function BicycleManageAction({ setVisible, handleDelete }) {
  return (
    <div className="action">
      <Button type="default" onClick={(e) => setVisible(true)}>
        Add
      </Button>
      <Button type="primary" onClick={handleDelete}>
        Delete
      </Button>
    </div>
  )
}

export default BicycleManageAction
