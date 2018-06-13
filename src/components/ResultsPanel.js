import React, { Component, Fragment } from 'react'
import styled from 'react-emotion'
import { Sort } from './Sort'

export class ResultsPanel extends Component {
  render() {
    const { points, sorting, onSortingChange } = this.props
    return (
      <Fragment>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center'
          }}
        >
          <ResultsTitle>
            {`${points.length} StashPoints met your criteria`}
          </ResultsTitle>
          <Sort
            style={{ flex: 1, maxWidth: '40%' }}
            value={sorting}
            onChange={onSortingChange}
          />
        </div>
        <CardsContainer>
          {points.map((point, index) => (
            <Card key={index}>
              <CardInner>
                <CardTopSection>
                  <CardColumn style={{ justifyContent: 'left', width: '100%' }}>
                    <Image
                      style={{ backgroundImage: `url(${point.photos[0]})` }}
                    />
                    <p
                      style={{
                        whiteSpace: 'nowrap',
                        maxWidth: '100%',
                        textOverflow: 'ellipsis',
                        overflow: 'hidden'
                      }}
                    >
                      <strong>{point.name}</strong>
                      <br /> {point.location_name}
                    </p>
                  </CardColumn>
                </CardTopSection>
                <CardMiddleSection>
                  <CardColumn>{point.walking_time}min walking</CardColumn>
                  <CardColumn>
                    {point.views_last_30_days} views last month
                  </CardColumn>
                </CardMiddleSection>
                <CardBottomSection>
                  £{point.pricing_structure.first_day_cost / 100} on first 24h -
                  £{point.pricing_structure.extra_day_cost / 100} on extra 24h
                </CardBottomSection>
              </CardInner>
            </Card>
          ))}
        </CardsContainer>
      </Fragment>
    )
  }
}

export default ResultsPanel

const CardsContainer = styled('div')`
  display: flex;
  flex-wrap: wrap;
  margin-top: 24px;
`

const ResultsTitle = styled('div')`
  padding: 0px 12px;

  flex: 1;
`
const Image = styled('div')`
  white-space: nowrap;
  max-width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  position: relative;
  flex-shrink: 0;
  -webkit-box-flex: 0;
  flex-grow: 0;
  background-color: rgb(235, 237, 240);
  background-size: cover;
  height: 56px;
  width: 56px;
  margin-right: 16px;
  background-repeat: no-repeat;
  background-position: center center;
  border-radius: 4px;
`
const Card = styled('div')`
  width: auto;
  max-width: 50%;
  margin-bottom: 24px;
  flex-basis: 50%;

  flex-grow: 1;
  flex-shrink: 0;
  padding: 0px 12px;
  @media (max-width: 1280px) {
    flex-basis: 100%;
    max-width: 100%;
    margin-bottom: 24px;
  }
`
const CardInner = styled('div')`
  background-color: rgb(255, 255, 255);
  box-shadow: rgba(33, 36, 41, 0.04) 0px 1px 2px,
    rgba(33, 36, 41, 0.06) 0px 8px 24px;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(221, 223, 224);
  border-image: initial;
  border-radius: 8px;
  overflow: hidden;
`
const CardTopSection = styled('div')`
  display: flex;
  justify-content: space-between;
  padding: 24px;
  border-bottom: 1px solid rgb(221, 223, 224);
`
const CardMiddleSection = styled('div')`
  display: flex;
  justify-content: flex-start;
  margin: 0px -8px;
  padding: 16px 24px;
  border-bottom: 1px solid rgb(221, 223, 224);
`
const CardBottomSection = styled('div')`
  display: flex;
  justify-content: center;
  background-color: rgb(255, 255, 255);
  padding: 8px 24px;
`
const CardColumn = styled('div')`
  flex-basis: 100%;
  justify-content: flex-start;
  padding: 0px 8px;
  min-height: 39px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
`
