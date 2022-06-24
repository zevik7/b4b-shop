import { Button, Space } from 'antd'
import { useTranslation } from 'react-i18next'

const MessageButton = (props) => {
  const { t } = useTranslation()
  return (
    <Space style={{ float: 'right' }}>
      <Button
        role="button"
        onClick={props.onClick}
        type="primary"
        htmlType="submit"
      >
        ORDER
      </Button>
    </Space>
  )
}

export default MessageButton
