/** @format */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Hamburger = ({ handleClick }) => (
  <Hamburger.Container onClick={handleClick}>
    <div className="_line"></div>
    <div className="line"></div>
    <div className="_line"></div>
  </Hamburger.Container>
);

Hamburger.Container = styled.div`
  display: none;

  @media (max-width: 1024px) {
    margin-right: 0.5rem;
    display: block;
    cursor: pointer;
    z-index: 2;

    ._line {
      width: 15px;
      height: 3px;
      background: black;
      margin: 5px;
    }

    .line {
      width: 30px;
      height: 3px;
      background: black;
      margin: 5px;
    }
  }
`;

Hamburger.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default Hamburger;
