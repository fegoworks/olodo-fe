/** @format */
import React from 'react';
import styled from 'styled-components';
import Header from '<organisms>/Header';
import Sidebar from '<organisms>/Sidebar';
import FeaturedBooks from '<organisms>/FeaturedBooks';
import RecentlyAdded from '<organisms>/RecentlyAdded';
import AllBooks from '<organisms>/AllBooks';

const HomePage = () => {
  return (
    <HomePage.Container>
      <Header />
      <HomePage.Main>
        <Sidebar />
        <HomePage.Books>
          <FeaturedBooks />
          <RecentlyAdded />
          <AllBooks />
        </HomePage.Books>
      </HomePage.Main>
    </HomePage.Container>
  );
};

HomePage.Container = styled.section``;
HomePage.Main = styled.section``;
HomePage.Books = styled.section`
  margin-left: 20rem;
  padding-bottom: 15rem;

  @media (max-width: 1024px) {
    margin-left: 0;
  }
`;
export default HomePage;
