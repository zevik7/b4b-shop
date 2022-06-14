import React, { useState } from 'react'
import {
  Button,
  Col,
  Form,
  Image,
  Input,
  InputNumber,
  Row,
  Select,
  Upload,
} from 'antd'
import { UploadOutlined } from '@ant-design/icons'
import TextArea from 'antd/es/input/TextArea'
import { UploadImage } from '../../index'

function FormEdit({ form, disabled }) {
  const initialValues = {
    brand: 'Fuji',
    color: 'a',
    description: 'a',
    gender: 'Unisex',
    image: [],
    material: 'a',
    name: 'nam',
    price: 1,
    type: 'Road Bike',
  }

  const setImage = (images) => {
    initialValues.image = images
  }

  return (
    <Form
      form={form}
      layout="vertical"
      name="formEditBicycle"
      initialValues={initialValues}
      disabled={disabled}
    >
      <Row>
        <Col span={24}>
          <Form.Item
            name="name"
            label="Name"
            rules={[
              {
                required: true,
                message: 'Please input the Name of Bicycle!',
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
                message: 'Please select the Brand of Bicycle!',
              },
            ]}
          >
            <Select placeholder="Please select a brand">
              <Select.Option value="Giant">Giant</Select.Option>
              <Select.Option value="Fuji">Fuji</Select.Option>
              <Select.Option value="Scott">Scott</Select.Option>
              <Select.Option value="Cannonale">Cannonale</Select.Option>
              <Select.Option value="Retrospec">Retrospec</Select.Option>
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
                message: 'Please select the Type of Bicycle!',
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
                message: 'Please input the Material of Bicycle!',
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
                message: 'Please input the Price of Bicycle!',
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
                message: 'Please input the Color of Bicycle!',
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
        <Form.Item name="image" label="Image" valuePropName="fileList">
          <UploadImage setImage={setImage} disabled={disabled} />
        </Form.Item>
      </Row>
    </Form>
  )
}

export default FormEdit
