import { Button, Space, message } from 'antd'

const MessageButton = (props) => {
  return (
    <Space style={{ float: 'right' }}>
      <Button onClick={props.onClick} type="primary" htmlType="submit">
        ORDER
      </Button>
    </Space>
  )
}

export default MessageButton
