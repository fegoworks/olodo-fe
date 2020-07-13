/** @format */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Header from '<organisms>/Header';

const HomePage = () => {
  return (
    <HomePage.Container>
      <Header></Header>
    </HomePage.Container>
  );
};

HomePage.Container = styled.section``;

export default HomePage;
