import { Form, Modal } from 'antd'
import React from 'react'
import { useTranslation } from 'react-i18next'

import FormAdd from './FormAdd'

function ModalAddBicycle({ visible, onCreate, onCancel }) {
  const [form] = Form.useForm()
  const { t } = useTranslation()
  return (
    <Modal
      className="modalAddBicycle"
      visible={visible}
      title={t('admin_page.form.add_form.title')}
      okText={t('cta.add')}
      cancelText={t('cta.cancle')}
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
