/** @format */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Title from '<atoms>/Title';

const SidebarList = ({ title, children }) => (
  <SidebarList.Container>
    <Title fontSize="xs">{title}</Title>
    <ul className="side_items">{children}</ul>
  </SidebarList.Container>
);

SidebarList.Container = styled.div`
  padding-top: 2rem;
  padding-bottom: 0.75rem;
  border-bottom: solid rgb(231, 226, 226) 1px;

  padding-left: 1.75rem;
  padding-right: 1.75rem;

  .side_items {
    list-style-type: none;
    padding-inline-start: 0;
  }
  .side_items > li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0.75rem 0;
  }

  .side_items > li > span {
    color: rgb(172, 166, 166);
    font-size: small;
    font-weight: 200;
  }
`;

SidebarList.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string]).isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
};

export default SidebarList;
