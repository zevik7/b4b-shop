import React, { useState } from 'react'
import FormEdit from './FormEdit'
import { Button, Form, Modal } from 'antd'

function ModalEditBicycle({ visible, onUpdate, onCancel }) {
  const [form] = Form.useForm()
  const [disabled, setDisabled] = useState(true)
  return (
    <Modal
      className="modalAddBicycle"
      visible={visible}
      title="Bicycle Infomation"
      onCancel={onCancel}
      footer={[
        <Button
          key="cancel"
          type="default"
          onClick={() => {
            onCancel()
            setDisabled(true)
          }}
        >
          Cancel
        </Button>,
        disabled && (
          <Button key="edit" type="default" onClick={() => setDisabled(false)}>
            Edit Bicycle
          </Button>
        ),
        !disabled && (
          <Button
            key="update"
            type="primary"
            onClick={() => {
              form
                .validateFields()
                .then((values) => {
                  form.resetFields()
                  onUpdate(values)
                })
                .catch((info) => {
                  console.log('Validate Failed:', info)
                })
            }}
          >
            Update
          </Button>
        ),
      ]}
    >
      <FormEdit disabled={disabled} form={form} />
    </Modal>
  )
}

export default ModalEditBicycle
