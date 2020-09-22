import React from 'react';
import styled from 'styled-components';
import Position from './Position.jsx';
import PlayerModal from './PlayerModal.jsx';
const axios = require('axios');

const AppWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      positions: {},
      positionList: [],
      displayModal: false,
      modalPlayer: {}
    };
    this.displayModal = this.displayModal.bind(this);
  }

  componentDidMount() {
    axios.get('/init')
    .then(res => {
      console.log('response', res.data)
      this.setState({
        positions: res.data.byPosition,
        positionList: res.data.positions
      })
    })
    .catch(err => console.error('error', err))
  };

  displayModal(player) {
    let {
      displayModal
    } = this.state;

    this.setState({
      displayModal: !displayModal,
      modalPlayer: player
    }, console.log(this.state.modalPlayer))
  }

  render() {
    // console.log(cookies)
    const {
      positions,
      positionList,
      displayModal,
      modalPlayer
    } = this.state;

    return (
      <AppWrapper>
        {positionList.map((position, index) => (
          <Position
            key={index}
            position={position}
            players={positions[position]}
            displayModal={this.displayModal}
          />
        ))}
        {displayModal
          ? <PlayerModal player={modalPlayer} displayModal={this.displayModal}/>
          : <div/>
        }
      </AppWrapper>
    )
  };
}

export default App;
