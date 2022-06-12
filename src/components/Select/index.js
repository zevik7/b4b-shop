import { useState } from 'react'
import { Select } from 'antd'

const { Option } = Select

const SelectCustom = (props) => {
  const { defaultValue, style, onChange, options } = props

  return (
    <>
      <Select
        defaultValue={defaultValue}
        style={{ ...style }}
        onChange={onChange}
      >
        {options.map((option) => (
          <Option key={option.key}>{option.value}</Option>
        ))}
      </Select>
    </>
  )
}

export default SelectCustom
