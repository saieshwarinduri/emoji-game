import './index.css'

const EmojiCard = props => {
  const {item, storeIdInlist} = props
  const {emojiName, emojiUrl, id} = item

  const onclisckfunction = () => {
    storeIdInlist(id)
  }

  return (
    <li className="EmojiConatiner">
      <button className="buttonooo" type="button" onClick={onclisckfunction}>
        <img src={emojiUrl} alt={emojiName} className="emoji" />
      </button>
    </li>
  )
}
export default EmojiCard
