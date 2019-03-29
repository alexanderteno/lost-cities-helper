import React, { Component } from 'react';
import * as _ from 'lodash';
import ColorSelector from './ColorSelector';
import CardsSelector from './CardsSelector';
import PlayerSelector from './PlayerSelector';
import CardsViewer from './CardsViewer';
import COLORS from './enums/colors';
import './App.scss';

const getDefaultCards = () => ([
  {
    yellow: [],
    blue: [],
    white: [],
    green: [],
    red: [],
  },
  {
    yellow: [],
    blue: [],
    white: [],
    green: [],
    red: [],
  },
]);

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      color: COLORS.WHITE,
      player: 1,
      cards: getDefaultCards(),
    };
  }

  handleChangeColor = (color) => {
    this.setState({ color });
  }

  handleChangePlayer = (player) => {
    this.setState({ player });
  }

  handleRemoveCard = (player, color, index) => {
    this.setState((prevState) => {
      const cards = _.cloneDeep(prevState.cards);
      cards[player - 1][color].splice(index, 1);
      return {
        ...prevState,
        cards,
      }
    })
  }

  handleSelectCard = (player, color, card) => {
    this.setState((prevState) => {
      const cards = _.cloneDeep(prevState.cards);
      cards[player - 1][color].push(card);
      return {
        ...prevState,
        cards,
      };
    })
  }

  handleReset = () => {
    this.setState({ cards: getDefaultCards() });
  }

  render() {
    const { player, color, cards } = this.state;
    return (
      <div className="App">
        <ColorSelector
          player={player}
          color={color}
          cards={cards}
          onChangeColor={this.handleChangeColor}
        />
        <PlayerSelector player={player} onChangePlayer={this.handleChangePlayer} />
        <div className="cards-manager horizontal-cards">
          <CardsViewer
            player={player}
            color={color}
            cards={cards}
            onRemoveCard={this.handleRemoveCard}
          />
          <CardsSelector
            player={player}
            cards={cards}
            color={color}
            onSelectCard={this.handleSelectCard}
          />
        </div>
        <button className="reset-button card" onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

export default App;