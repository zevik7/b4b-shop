import { useState } from 'react'
import { Select } from 'antd'
import './style.less'
import { DownCircleTwoTone } from '@ant-design/icons'

const { Option } = Select

const SelectCustom = (props) => {
  const { defaultValue, style, onChange, options, suffixIcon } = props

  return (
    <>
      <Select
        suffixIcon={<DownCircleTwoTone />}
        defaultValue={defaultValue}
        style={{ ...style }}
        onChange={onChange}
      >
        {options.map((option) => (
          <Option key={option.key}>
            <img
              style={{
                marginBottom: '2px',
                marginRight: '4px',
              }}
              src={option.icon}
              alt=""
            />
            {option.value}
          </Option>
        ))}
      </Select>
    </>
  )
}

export default SelectCustom
