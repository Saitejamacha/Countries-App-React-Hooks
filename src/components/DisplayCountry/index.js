import {
  CardCon,
  EachCountryFlagImg,
  InfoCon,
  CountryName,
  RemoveButton,
} from './styledComponents'

// Sai Tej's Code

const DisplayCountry = props => {
  const {displayCountry, onClickCountryRemove} = props
  const {id, name, imageUrl} = displayCountry

  const onClickRemoveBtn = () => {
    onClickCountryRemove(id)
  }

  return (
    <CardCon>
      <EachCountryFlagImg alt="thumbnail" src={imageUrl} />
      <InfoCon>
        <CountryName>{name}</CountryName>
        <RemoveButton onClick={onClickRemoveBtn}>Remove</RemoveButton>
      </InfoCon>
    </CardCon>
  )
}

export default DisplayCountry
