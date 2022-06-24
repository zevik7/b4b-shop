import { Button, Space } from 'antd'
import { useTranslation } from 'react-i18next'

const MessageButton = (props) => {
  const { t } = useTranslation()
  return (
    <Space style={{ float: 'right' }}>
      <Button onClick={props.onClick} type="primary" htmlType="submit">
        {t('checkout_page.left_form.order')}
      </Button>
    </Space>
  )
}

export default MessageButton
