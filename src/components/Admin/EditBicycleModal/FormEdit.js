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
import {
  MinusCircleOutlined,
  PlusOutlined,
  UploadOutlined,
} from '@ant-design/icons'
import TextArea from 'antd/es/input/TextArea'
import { UploadImage } from '../../index'
import _ from 'lodash'

function FormEdit({ form, disabled, initialData }) {
  return (
    <Form
      form={form}
      layout="vertical"
      name="formEditBicycle"
      initialValues={initialData}
      disabled={disabled}
    >
      <Row gutter={8}>
        <Col xxl={8} sm={12} xs={24}>
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
        <Col xxl={8} sm={12} xs={24}>
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
        <Col xxl={8} sm={12} xs={24}>
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
        <Col xxl={8} sm={12} xs={24}>
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
              <Select.Option value="Mountain Bikes">
                Mountain Bikes
              </Select.Option>
              <Select.Option value="Road Bikes">Road Bikes</Select.Option>
              <Select.Option value="Kids Bikes">Kids Bikes</Select.Option>
              <Select.Option value="Hybrid Bikes">Hybrid Bikes</Select.Option>
              <Select.Option value="Electric & Power Assisted Bikes">
                Electric & Power Assisted Bikes
              </Select.Option>
            </Select>
          </Form.Item>
        </Col>
        <Col xxl={8} sm={12} xs={24}>
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
        <Col xxl={8} sm={12} xs={24}>
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
        <Col span={24}>Variants</Col>
        <Col span={24}>
          <Form.List name="variants">
            {(fields, { add, remove }) => (
              <>
                {fields.map(({ key, name, ...restField }) => (
                  <Row key={key}>
                    <Col span={1}>
                      <MinusCircleOutlined onClick={() => remove(name)} />
                    </Col>
                    <Col span={23}>
                      <Row gutter={8}>
                        <Col xxl={6} sm={12} xs={24}>
                          <Form.Item
                            {...restField}
                            name={[name, 'color']}
                            rules={[
                              {
                                required: true,
                                message: 'Missing color',
                              },
                            ]}
                          >
                            <Input placeholder="Color" />
                          </Form.Item>
                        </Col>
                        <Col xxl={6} sm={12} xs={24}>
                          <Form.Item
                            {...restField}
                            name={[name, 'frame']}
                            rules={[
                              {
                                required: true,
                                message: 'Missing frame',
                              },
                            ]}
                          >
                            <Input placeholder="Frame" />
                          </Form.Item>
                        </Col>
                        <Col xxl={6} sm={12} xs={24}>
                          <Form.Item
                            {...restField}
                            name={[name, 'size']}
                            rules={[
                              {
                                required: true,
                                message: 'Missing size',
                              },
                            ]}
                          >
                            <Input placeholder="Size" />
                          </Form.Item>
                        </Col>
                        <Col xxl={6} sm={12} xs={24}>
                          <Form.Item
                            {...restField}
                            name={[name, 'quantity']}
                            rules={[
                              {
                                required: true,
                                message: 'Missing quantity',
                              },
                            ]}
                          >
                            <InputNumber
                              style={{ width: '100%' }}
                              placeholder="Quantity"
                            />
                          </Form.Item>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                ))}
                <Form.Item>
                  <Button
                    type="dashed"
                    onClick={() => add()}
                    block
                    icon={<PlusOutlined />}
                  >
                    Add variant
                  </Button>
                </Form.Item>
              </>
            )}
          </Form.List>
        </Col>
        <Col xxl={24} sm={24} xs={24}>
          <Form.Item name="description" label="Description">
            <TextArea rows={2} />
          </Form.Item>
        </Col>
        <Col xxl={24} sm={24} xs={24}>
          <Form.Item
            name="images"
            label="Images"
            rules={[
              {
                required: true,
                message: 'Please upload least one picture of Bicycle!',
              },
            ]}
            valuePropName="fileList"
          >
            <UploadImage images={initialData.images} />
          </Form.Item>
        </Col>
      </Row>
    </Form>
  )
}

export default FormEdit
