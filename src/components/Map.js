import React, { Component, Fragment } from 'react'
import styled, { keyframes } from 'react-emotion'
import GoogleMapReact from 'google-map-react'

export class Map extends Component {
  render() {
    const { center, points } = this.props
    return (
      <GoogleMapReact defaultCenter={center} defaultZoom={14}>
        <CenterMarker lat={center.lat} lng={center.lng} />
        {points.map((point, index) => (
          <PointMarkers
            lat={point.latitude}
            lng={point.longitude}
            key={point.id}
            text={point.name}
          />
        ))}
      </GoogleMapReact>
    )
  }
}

export default Map

const light = keyframes`
0% {
    box-shadow: rgba(2, 112, 230, 0.1) 0px 0px 0px 0px, rgba(2, 112, 230, 0.1) 0px 0px 0px 0px, rgba(2, 112, 230, 0.1) 0px 0px 0px 0px;
}
100% {
    box-shadow: rgba(2, 112, 230, 0) 0px 0px 0px 24px, rgba(2, 112, 230, 0) 0px 0px 0px 72px, rgba(2, 112, 230, 0) 0px 0px 0px 112px;
}
`

const CenterMarker = styled('div')`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0px);
  z-index: 1;
  width: 24px;
  height: 24px;
  background-color: rgb(2, 112, 230);
  border-radius: 100%;
  border-width: 4px;
  border-style: solid;
  border-color: rgb(255, 255, 255);
  border-image: initial;
  animation: ${light} 4s infinite;
  &:before {
    content: '';
    position: absolute;
    top: -4px;
    left: -4px;
    width: 24px;
    height: 24px;
    box-shadow: rgba(33, 36, 41, 0.4) 0px 1px 8px;
    border-radius: 100%;
  }
`
const MarkerImage = styled('img')`
  position: absolute;
  left: 0;
  top: 0;
  width: 30px;
  height: 30px;
  user-select: none;
  border: 0;
  padding: 0;
  margin: 0;
  max-width: none;
`
const HoverText = styled('div')`
  background: #383838;
  color: #fff;
  padding: 8px 10px;
  font-size: 12px;
  line-height: 12px;
  position: absolute;
  transform: translate3d(0, 0, 0);
  visibility: hidden;
  opacity: 0;
  z-index: 1000000;
  transition: 0.3s ease;
  transition-delay: 0s;
  margin-left: -18px;
  bottom: calc(100% - 10px);
  left: calc(50% - 6px);
  background-color: #3986ac;
  width: 80px;
`
const Marker = styled('div')`
  position: relative;
  width: 30px;
  height: 30px;
  &:before {
    content: '';
    position: absolute;
    background: 0 0;
    border: 6px solid transparent;
    z-index: 1000001;
    margin-bottom: -20px;
    bottom: 100%;
    left: calc(50% - 6px);
    pointer-events: none;
    transition: 0.3s ease;
  }
  &:hover {
    > div {
      transition-delay: 100ms;
      visibility: visible;
      opacity: 1;
      transform: translateY(-8px);
    }
    &:before {
      visibility: visible;
      opacity: 1;
      transition-delay: 100ms;
      transform: translateY(-8px);
      border-top-color: #3986ac;
    }
  }
`
const PointMarkers = props => (
  <Marker>
    <MarkerImage
      alt=""
      src="data:image/svg+xml,%3Csvg width='30' height='30' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Ccircle fill='%23F79640' opacity='.1' cx='15' cy='15' r='15'/%3E%3Ccircle fill='%23F79640' cx='15' cy='15' r='11'/%3E%3Cpath d='M15 8a5.7 5.7 0 0 1 4.6 9c-2.5 3.3-4 5-4.6 5-.6 0-2.1-1.7-4.6-5A5.7 5.7 0 0 1 15 8zm0 8c1.4 0 2.5-1.1 2.5-2.5S16.4 11 15 11a2.5 2.5 0 0 0-2.5 2.5c0 1.4 1.1 2.5 2.5 2.5z' fill='%23FFF'/%3E%3C/g%3E%3C/svg%3E"
      draggable="false"
    />
    <HoverText>{props.text}</HoverText>
  </Marker>
)
