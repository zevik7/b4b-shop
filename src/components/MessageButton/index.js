import { Button, message, Space } from 'antd';

const success = () => {
    message.success('This is a success message');
};

const MessageButton = () => {
    return (
    <Space>
    <Button onClick={success} type="primary"
            htmlType="submit"
            style={{float: 'right' }}>ORDER</Button>
    </Space>
    )
}

export default MessageButton
