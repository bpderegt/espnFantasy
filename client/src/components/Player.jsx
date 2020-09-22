import React, { useState } from 'react';
import styled from 'styled-components';

const Player = ({ player, displayModal }) =>  {
  return (
    <div onClick={() => displayModal(player)}>
      {player.fullName}
    </div>

  )
}

export default Player;
