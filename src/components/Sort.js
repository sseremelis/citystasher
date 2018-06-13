import React, { Component } from 'react'
import Select from 'react-select'
import 'react-select/dist/react-select.css'

export class Sort extends Component {
  render() {
    const { value, onChange, style } = this.props
    return (
      <div style={{ ...style, display: 'flex', alignItems: 'center' }}>
        Sort by
        <Select
          name="order"
          placeholder="Sort by"
          closeOnSelect={false}
          removeSelected={false}
          value={value}
          onChange={onChange}
          clearable={false}
          options={[
            { value: 'by_distance', label: 'Distance' },
            { value: 'by_popularity', label: 'Popularity' },
            { value: 'by_capacity', label: 'Capacity' }
          ]}
          style={{ height: 48 }}
          wrapperStyle={{ flex: 1, marginLeft: 16 }}
        />
      </div>
    )
  }
}

export default Sort
