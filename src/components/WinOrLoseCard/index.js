import './index.css'

const WinOrLoseCard = props => {
  const {score, topScorefunction} = props
  const text = score === 12 ? 'You Won' : 'You Loss'
  const scoreHeading = score === 12 ? 'Best Score' : 'Score'
  const img =
    score === 12
      ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  const clickonButton = () => {
    topScorefunction()
  }

  return (
    <div className="winnOrlossCard">
      <div className="scoreDetailsContaienr">
        <h1 className="YouWon">{text}</h1>
        <p className="bestscore">{scoreHeading}</p>
        <p className="score">{score}/12</p>
        <button className="button" type="button" onClick={clickonButton}>
          Play Again
        </button>
      </div>
      <img src={img} className="wonImage" alt="win or lose" />
    </div>
  )
}
export default WinOrLoseCard
