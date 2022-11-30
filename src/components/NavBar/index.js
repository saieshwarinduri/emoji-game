import './index.css'

const NavBar = props => {
  const {score, Topscore, stopGame} = props

  return (
    <nav className="navbarrr">
      <div className="Logocontainer">
        <img
          className="logoOfsite"
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1 className="Enojiheading">Emoji Game</h1>
      </div>
      {!stopGame && (
        <div className="scorecontainer">
          <p className="scoreName">Score:{score}</p>

          <p className="scoreName">Top Score:{Topscore}</p>
        </div>
      )}
    </nav>
  )
}

export default NavBar
