import {TableCon, RowCon, Button, Hline, VisitedText} from './styledComponents'

const CountriesTable = props => {
  const {countryDetails, onClickVisitCountry} = props
  const {id, name, isVisited} = countryDetails

  const onClickVisit = () => {
    onClickVisitCountry(id)
  }

  // Sai Tej's Code

  return (
    <TableCon>
      <RowCon>
        <p>{name}</p>
        {isVisited ? (
          <VisitedText>Visited</VisitedText>
        ) : (
          <Button onClick={onClickVisit}>Visit</Button>
        )}
      </RowCon>
      <Hline />
    </TableCon>
  )
}

export default CountriesTable
