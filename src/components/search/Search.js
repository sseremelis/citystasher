import React, { Component } from 'react'
import PlacesAutocomplete from 'react-places-autocomplete'

import {
  Input,
  SearchWrapper,
  SuggestionsWrapper,
  Suggestions,
  Suggestion
} from './searchStyledComponents'

export class Search extends Component {
  render() {
    const { onChange, onSelect, address, style } = this.props
    return (
      <div style={style}>
        <PlacesAutocomplete
          value={address}
          onChange={onChange}
          onSelect={onSelect}
        >
          {({ getInputProps, suggestions, getSuggestionItemProps }) => (
            <SearchWrapper>
              <Input
                {...getInputProps({
                  placeholder: 'Search Places ...'
                })}
              />
              <SuggestionsWrapper visible={suggestions.length > 0}>
                <Suggestions>
                  {suggestions.map(suggestion => (
                    <Suggestion
                      {...getSuggestionItemProps(suggestion, {
                        active: suggestion.active
                      })}
                    >
                      <span>{suggestion.description}</span>
                    </Suggestion>
                  ))}
                </Suggestions>
              </SuggestionsWrapper>
            </SearchWrapper>
          )}
        </PlacesAutocomplete>
      </div>
    )
  }
}

export default Search
