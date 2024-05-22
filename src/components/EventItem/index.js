// Write your code here
const EventItem = props => {
  const {details, setActiveId} = props
  const {name, imageUrl, location, id} = details

  const onClickImg = () => setActiveId(id)

  return (
    <div>
      <li>
        <button type="button" onClick={onClickImg}>
          <img src={imageUrl} alt="event" />
        </button>
        <h1>{name}</h1>
        <p>{location}</p>
      </li>
    </div>
  )
}

export default EventItem
