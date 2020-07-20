/** @format */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Text from '<atoms>/Text';

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

SidebarItem.propTypes = {
  item: PropTypes.oneOfType([PropTypes.string]).isRequired,
  itemSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
};

export default SidebarItem;
