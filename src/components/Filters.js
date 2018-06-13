import React, { Component } from 'react'
import Select from 'react-select'
import 'react-select/dist/react-select.css'

export class Filters extends Component {
  render() {
    const { value, onChange, style } = this.props
    return (
      <div style={style}>
        <Select
          name="filters"
          placeholder="Filters"
          multi
          closeOnSelect={false}
          removeSelected={false}
          value={value}
          onChange={onChange}
          options={[
            { value: 'open_late', label: 'Open late' },
            { value: 'twentyfour_seven', label: '24/7' },
            { value: 'featured', label: 'Featured' }
          ]}
          style={{ height: 48 }}
        />
      </div>
    )
  }
}

export default Filters
