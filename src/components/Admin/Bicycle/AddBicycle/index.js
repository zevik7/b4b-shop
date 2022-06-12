import { Form, Input, Modal, Radio } from 'antd'
import FormAdd from './FormAdd'

const AddBicycle = ({ visible, onCreate, onCancel }) => {
  const [form] = Form.useForm()
  return (
    <Modal
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
export default AddBicycle
