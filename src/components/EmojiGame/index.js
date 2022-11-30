/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.



*/

// Write your code here.

import {Component} from 'react'

import NavBar from '../NavBar/index'

import WinOrLoseCard from '../WinOrLoseCard/index'

import EmojiCard from '../EmojiCard/index'

import './index.css'

class EmojiGame extends Component {
  state = {initialList: [], stopGame: false, Topscore: 0, score: 0}

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  storeIdInlist = id => {
    const {initialList} = this.state
    if (initialList.includes(id)) {
      this.setState(prevState => ({
        stopGame: !prevState.stopGame,
      }))
    } else {
      this.setState(prevState => ({
        initialList: [...prevState.initialList, id],
        score: prevState.score + 1,
      }))
    }
  }

  topScorefunction = () => {
    const {score, Topscore} = this.state
    if (score > Topscore) {
      this.setState(prevState => ({
        Topscore: score,
        score: 0,
        initialList: [],
        stopGame: !prevState.stopGame,
      }))
    } else {
      this.setState(prevState => ({
        stopGame: !prevState.stopGame,
        score: 0,
        initialList: [],
      }))
    }
  }

  render() {
    const emojisList = this.shuffledEmojisList()
    const {stopGame, Topscore, score} = this.state

    return (
      <div>
        <NavBar score={score} Topscore={Topscore} stopGame={stopGame} />
        <div className="contentcontainer">
          {!stopGame && (
            <ul className="ggggggggg">
              {emojisList.map(each => (
                <EmojiCard
                  item={each}
                  key={each.id}
                  storeIdInlist={this.storeIdInlist}
                />
              ))}
            </ul>
          )}
          {stopGame && (
            <WinOrLoseCard
              score={score}
              Topscore={Topscore}
              topScorefunction={this.topScorefunction}
            />
          )}
        </div>
      </div>
    )
  }
}

export default EmojiGame
