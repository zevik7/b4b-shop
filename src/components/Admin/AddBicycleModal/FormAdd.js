import React from 'react'
import {
  Button,
  Col,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
  Upload,
} from 'antd'
import { UploadOutlined } from '@ant-design/icons'
import TextArea from 'antd/es/input/TextArea'

function FormAdd({ form }) {
  return (
    <Form form={form} layout="vertical" name="formAddBicycle">
      <Row>
        <Col span={24}>
          <Form.Item
            name="name"
            label="Name"
            rules={[
              {
                required: true,
                message: 'Please input the Name of bicycle!',
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={8}>
        <Col span={12}>
          <Form.Item
            name="brand"
            label="Brand"
            rules={[
              {
                required: true,
                message: 'Please select the Brand of bicycle!',
              },
            ]}
          >
            <Select placeholder="Please select a brand">
              <Select.Option value="giant">Giant</Select.Option>
              <Select.Option value="fuji">Fuji</Select.Option>
              <Select.Option value="scott">Scott</Select.Option>
              <Select.Option value="cannondale">Cannondale</Select.Option>
              <Select.Option value="retrospec">Retrospec</Select.Option>
            </Select>
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name="type"
            label="Type"
            rules={[
              {
                required: true,
                message: 'Please select the Type of bicycle!',
              },
            ]}
          >
            <Select placeholder="Please select a type">
              <Select.Option value="Mountain Bike">Mountain Bike</Select.Option>
              <Select.Option value="Road Bike">Road Bike</Select.Option>
              <Select.Option value="Kids Bike">Kids Bike</Select.Option>
              <Select.Option value="Hybrid Bike">Hybrid Bike</Select.Option>
              <Select.Option value="Electric & Power Assisted Bikes">
                Electric & Power Assisted Bikes
              </Select.Option>
            </Select>
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={8}>
        <Col span={12}>
          <Form.Item
            name="gender"
            label="Gender"
            rules={[
              {
                required: true,
                message: 'Please select the Gender',
              },
            ]}
          >
            <Select placeholder="Please select a gender">
              <Select.Option value="Unisex">Unisex</Select.Option>
              <Select.Option value="Women">Women</Select.Option>
              <Select.Option value="Men">Men</Select.Option>
            </Select>
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name="material"
            label="Material"
            rules={[
              {
                required: true,
                message: 'Please input the Material of bicycle!',
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={8}>
        <Col span={12}>
          <Form.Item
            name="price"
            label="Price"
            rules={[
              {
                required: true,
                message: 'Please input the Price of bicycle!',
              },
            ]}
          >
            <InputNumber style={{ width: '100%' }} />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name="color"
            label="Color"
            rules={[
              {
                required: true,
                message: 'Please input the Color of bicycle!',
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Form.Item name="description" label="Description">
            <TextArea rows={2} />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Form.Item name="image" label="Image">
            <Upload
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              listType="picture"
              maxCount={3}
              multiple
            >
              <Button icon={<UploadOutlined />}>Upload (Max: 3)</Button>
            </Upload>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  )
}

export default FormAdd
