import React from 'react'
import { Modal } from 'antd'

function OrderDetailModal(props) {
  return (
    <Modal
      title="Basic Modal"
      visible={true}
      // onOk={handleOk}
      // onCancel={handleCancel}
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Modal>
  )
}

export default OrderDetailModal
