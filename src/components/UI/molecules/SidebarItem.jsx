/** @format */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Text from '<atoms>/Text/Text';
import { Link } from 'react-router-dom';

const SidebarItem = ({ item, itemSize }) => (
  <SidebarItem.Container>
    <a href="#">
      <Text fontSize="xs">{item}</Text>
    </a>
    <span>{itemSize}</span>
  </SidebarItem.Container>
);

SidebarItem.Container = styled.li`
  a {
    text-decoration-style: none;
  }

  a:link {
    text-decoration: none;
  }
`;

export default SidebarItem;
