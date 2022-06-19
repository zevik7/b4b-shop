import React, { useEffect, useState } from 'react'
import FormEdit from './FormEdit'
import { Form, Modal } from 'antd'
import _ from 'lodash'

function ModalEditBicycle({ visible, onUpdate, onCancel, editData }) {
  const [form] = Form.useForm()

  return (
    <Modal
      className="modalEditBicycle"
      visible={visible}
      title="Edit Bicycle"
      onCancel={onCancel}
      okText="Update"
      onOk={(e) => {
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
      <FormEdit initialData={editData} form={form} />
    </Modal>
  )
}

export default ModalEditBicycle
