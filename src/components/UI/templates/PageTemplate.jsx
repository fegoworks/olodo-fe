/** @format */
import React from 'react';
import styled from 'styled-components';
import Header from '<organisms>/Header';
import Sidebar from '<organisms>/Sidebar';

const PageTemplate = ({ children }) => {
  return (
    <PageTemplate.Container>
      <Header />
      <PageTemplate.Main>
        <Sidebar />
        <PageTemplate.Body>{children}</PageTemplate.Body>
      </PageTemplate.Main>
    </PageTemplate.Container>
  );
};

PageTemplate.Container = styled.section``;
PageTemplate.Main = styled.section``;
PageTemplate.Body = styled.section`
  margin-left: 20rem;
  padding-bottom: 15rem;

  @media (max-width: 1024px) {
    margin-left: 0;
  }
`;
export default PageTemplate;
