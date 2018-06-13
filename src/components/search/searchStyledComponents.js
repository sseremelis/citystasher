import styled from 'react-emotion'

export const SearchWrapper = styled('div')`
  width: 100%;
  position: relative;
  display: inline-block;
`

export const Input = styled('input')`
  color: rgb(33, 36, 41);
  font-size: 16px;
  padding: 12px 16px;

  width: 100%;
  min-width: 120px;
  max-width: 300px;

  box-shadow: rgba(33, 36, 41, 0.08) 0px 1px 4px;
  border-radius: 4px;
  border: 1px solid rgb(221, 223, 224);

  transition: box-shadow 750ms cubic-bezier(0.19, 1, 0.22, 1);

  line-height: 22px;
  letter-spacing: normal;
  outline: none;
  &:focus,
  &:hover {
    box-shadow: rgba(33, 36, 41, 0.08) 0px 1px 4px,
      rgba(33, 36, 41, 0.1) 0px 4px 24px;
  }
`
export const SuggestionsWrapper = styled('div')`
  z-index: 100;
  visibility: ${props => (props.visible ? 'visible' : 'hidden')};
  opacity: 1;
  transition: transform 400ms cubic-bezier(0.19, 1, 0.22, 1),
    opacity 100ms ease-in-out;
  transform: translate(0px);
  position: absolute;
  width: auto;
  right: auto;
`
export const Suggestions = styled('div')`
  background-color: rgb(255, 255, 255);
  box-shadow: rgba(33, 36, 41, 0.04) 0px 1px 4px,
    rgba(33, 36, 41, 0.1) 0px 8px 40px;
  width: 100%;
  max-height: 320px;
  overflow-y: scroll;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(221, 223, 224);
  border-image: initial;
  border-radius: 8px;
  margin: 8px 0px;
`
export const Suggestion = styled('div')`
  display: flex;
  width: 300px;
  background-color: ${props => (props.active ? 'rgb(221, 223, 224)' : 'white')};
  cursor: pointer;
  margin: 0px 16px;
  padding: 8px;
  border-radius: 4px;
  &:hover {
    background-color: rgb(221, 223, 224);
  }
  &:first-child {
    margin-top: 16px;
  }
  &:last-child {
    margin-bottom: 16px;
  }
`
