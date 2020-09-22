import React from 'react';
import styled from 'styled-components';
import Player from './Player.jsx'

const PositionWrapper = styled.div`
  width: 200px;
`;

const Position = ({ position, players, displayModal }) => (
  <PositionWrapper>
    {position}
    {players.map((player, index) => (
      <Player
        key={index}
        player={player}
        displayModal={displayModal}
      />
    ))}
  </PositionWrapper>
);

export default Position;
