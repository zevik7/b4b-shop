import React from 'react'
import FormAdd from './FormAdd'
import { Form, Modal } from 'antd'

function ModalAddBicycle({ visible, onCreate, onCancel }) {
  const [form] = Form.useForm()

  return (
    <Modal
      className="modalAddBicycle"
      visible={visible}
      title="Add a new bicycle"
      okText="Add"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields()
            onCreate(values)
          })
          .catch((info) => {
            console.log('Validate Failed:', info)
          })
      }}
    >
      <FormAdd form={form} />
    </Modal>
  )
}

export default ModalAddBicycle
