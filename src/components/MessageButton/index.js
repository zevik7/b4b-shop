import { Button, message, Space } from 'antd';

const success = () => {
    message.success('This is a success message');
};

const MessageButton = () => {
    return (
    <Space style={{float: 'right'}}>
    <Button onClick={success} type="primary"
            htmlType="submit">ORDER
    </Button>
    </Space>
    )
}

export default MessageButton
