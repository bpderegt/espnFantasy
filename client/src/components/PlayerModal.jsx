import React from 'react';
import styled from 'styled-components';

const ModalWrapper = styled.div`
  display: flex;
  position: absolute;
  z-index: -10;
  background: grey;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const StatWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  z-index: -9;
`;

const Modal = ({ player, displayModal }) => {
  return (
    <ModalWrapper onClick={() => displayModal(player)}>
      <StatWrapper>
        <li>{player.fullName}</li>
        <li>{player.proTeam}</li>
        <li>{player.defaultPosition}</li>
        <li>{Number.parseFloat(player.averageDraftPosition).toFixed(2)}</li>
        <li>{Number.parseFloat(player.percentStarted).toFixed(2)}</li>
        <li>{Number.parseFloat(player.percentOwned).toFixed(2)}</li>
      </StatWrapper>
    </ModalWrapper>
  )
}

export default Modal;
