import {
  HomeOutlined,
  MailOutlined,
  PhoneOutlined,
  UserOutlined,
} from '@ant-design/icons'
import { Button, Form, Input, Typography } from 'antd'
import './index.less'
import { useDispatch, useSelector } from "react-redux";
import { createCheckout } from "../../../redux/checkout/checkoutSlice";
import { checkoutSelectedSelector, checkoutsSelector } from "../../../redux/selectors";

const { Title } = Typography

const CheckoutForm = () => {
  const dispatch = useDispatch();
  const checkoutSelected = useSelector(checkoutSelectedSelector);
  const onFinish = (values) => {
    let data = {
      user: {
        name: values.fullname,
        email: values.email,
        phone: values.phone,
        address: values.address,
      },
      bicycle: checkoutSelected.bicycle,
      note: values.note,
    };
    dispatch(createCheckout(data));
    alert("Success");
    console.log("Received values of form: ", data);
  }

  return (
    <div className="form-ctn">
      <div className="form-header">
        <Title level={5}>Check Out Details</Title>
      </div>
      <Form
        size="large"
        labelCol={{
          span: 3,
        }}
        wrapperCol={{
          span: 24,
        }}
        layout="horizontal"
        onFinish={onFinish}
      >
        <Form.Item
          name="fullname"
          rules={[
            {
              required: true,
              message: 'Please input your fullname!',
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Full Name"
          />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: 'Please input your Password!',
            },
          ]}
        >
          <Input
            prefix={<MailOutlined className="site-form-item-icon" />}
            placeholder="Email"
            rules={[
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
              {
                required: true,
                message: 'Please input your E-mail!',
              },
            ]}
          />
        </Form.Item>
        <Form.Item
          name="address"
          rules={[
            {
              required: true,
              message: 'Please input your address!',
            },
          ]}
        >
          <Input
            prefix={<HomeOutlined className="site-form-item-icon" />}
            placeholder="Address"
          />
        </Form.Item>

        <Form.Item
          name="phone"
          rules={[
            {
              required: true,
              message: 'Please input your phone number!',
            },
          ]}
        >
          <Input
            placeholder="Phone Number"
            prefix={<PhoneOutlined className="site-form-item-icon" />}
          />
        </Form.Item>

        <Form.Item name="note">
          <Input.TextArea
            showCount
            maxLength={500}
            rows={6}
            placeholder="Write your note here ..."
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            style={{ width: '30%', float: 'right' }}
          >
            ORDER
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default CheckoutForm
