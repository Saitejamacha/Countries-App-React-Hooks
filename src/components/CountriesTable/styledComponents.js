import styled from 'styled-components'

export const TableCon = styled.li`
  width: 70vw;
  list-style-type: none;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #1f1f2f;
  //   border-bottom: 1px solid;
`
export const RowCon = styled(TableCon)`
  width: 70vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  //   border-bottom: 1px solid;
  //   background-color: lightblue;
`
export const Button = styled.button`
  width: 90px;
  height: 40px;
  background-color: #3b82f6;
  border: 0px;
  color: white;
  border-radius: 5px;
`

export const Hline = styled.hr`
  width: 80vw;
  align-self: flex-start;
  margin-left: -50px;
`
export const VisitedText = styled.p`
  width: 90px;
  text-align: center;
  font-size: 20px;
`
