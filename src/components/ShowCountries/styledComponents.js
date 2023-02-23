import styled from 'styled-components'

export const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #161624;
  color: white;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`
export const CountriesCon = styled.ul`
  width: 80vw;
  max-height: 50vh;
  overflow-y: scroll;
  overflow-x: hidden;
  background-color: #1f1f2f;
  color: white;
  border-radius: 10px;
  border: lightgray solid;
`
export const VisitedCountriesCon = styled.ul`
  width: 80vw;
  min-height: 40vh;
  color: white;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 20px;
  margin-top: 10px;
  padding-top: 30px;
  overflow-y: scroll;
  border: lightgray solid;
  border-radius: 10px;
`
export const Heading = styled.h1`
  font-size: 20px;
  align-self: flex-start
  margin-left: 10vw;
`

export const EmptyText = styled.p`
  font-size: 20px;
  align-self:  center
  margin-left: 10vw;
`
