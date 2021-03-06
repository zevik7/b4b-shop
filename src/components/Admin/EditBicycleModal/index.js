import { Form, Modal } from 'antd'
import React from 'react'
import { useTranslation } from 'react-i18next'

import FormEdit from './FormEdit'

function ModalEditBicycle({ visible, onUpdate, onCancel, editData }) {
  const [form] = Form.useForm()
  const { t } = useTranslation()

  return (
    <Modal
      className="modalEditBicycle"
      visible={visible}
      title={t('admin_page.form.edit_form.title')}
      onCancel={onCancel}
      okText={t('cta.update')}
      cancelText={t('cta.cancle')}
      onOk={() => {
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
