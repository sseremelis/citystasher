import React, { Component } from 'react'
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete'

import Search from './components/search/Search'
import { BorderRow, Row, FlexWrapper } from './components/styledHelpers'
import ResultsPanel from './components/ResultsPanel'
import Map from './components/Map'
import { Filters } from './components/Filters'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      address: '',
      lat: '',
      lng: '',
      points: [],
      filters: [],
      sorting: 'by_distance'
    }
  }

  handleChange = address => {
    this.setState({ address })
  }

  handleSelect = address => {
    this.setState({ address })
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => {
        console.log('Success', latLng)
        this.setState({ lat: latLng.lat, lng: latLng.lng })
      })
      .catch(error => console.error('Error', error))
  }

  handleFilterChange = filters => {
    this.setState({ filters })
  }

  handleSortingChange = sorting => {
    this.setState({ sorting: sorting.value })
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (
      prevState.lat !== this.state.lat ||
      prevState.lng !== this.state.lng ||
      prevState.sorting !== this.state.sorting ||
      prevState.filters !== this.state.filters
    ) {
      this.sendRequest()
    }
  }

  sendRequest = () => {
    if (this.state.lat && this.state.lng) {
      let requestUrl = `${
        process.env.REACT_APP_API_URL
      }/stashpoints?active=1&centre_lat=${this.state.lat}&centre_lon=${
        this.state.lng
      }&nearby_radius=5`
      requestUrl += `&sort=${this.state.sorting}`
      this.state.filters.map(filter => (requestUrl += `&${filter.value}=true`))
      fetch(requestUrl)
        .then(res => res.json())
        .then(
          result => {
            console.log(result)
            this.setState({
              points: result
            })
          },
          error => {
            this.setState({
              error
            })
          }
        )
    }
  }
  render() {
    return (
      <FlexWrapper>
        <BorderRow style={{ minHeight: 81 }}>
          <Search
            style={{ flex: 1 }}
            onChange={this.handleChange}
            onSelect={this.handleSelect}
            address={this.state.address}
          />
          <Filters
            style={{ flex: 1, maxWidth: '40%' }}
            onChange={this.handleFilterChange}
            value={this.state.filters}
          />
        </BorderRow>
        {this.state.lat ? (
          <Row style={{ display: 'flex' }}>
            <div style={{ flex: 1, height: '100vh' }}>
              <Map
                center={{ lat: this.state.lat, lng: this.state.lng }}
                points={this.state.points}
              />
            </div>
            <div
              style={{
                flex: 1,
                overflow: 'auto',
                height: '100%',
                padding: 24,
                minWidth: '60%'
              }}
            >
              <ResultsPanel
                points={this.state.points}
                onSortingChange={this.handleSortingChange}
                sorting={this.state.sorting}
              />
            </div>
          </Row>
        ) : (
          <div style={{ padding: 40 }}>
            Enter a city in the search box to begin the search! You can use the
            filters as well.
          </div>
        )}
      </FlexWrapper>
    )
  }
}

export default App
