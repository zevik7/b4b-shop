import { Button, Space } from 'antd'

const MessageButton = (props) => {
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
