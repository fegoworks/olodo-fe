/** @format */

import React, { useContext } from 'react';
import styled from 'styled-components';
import SidebarList from '<molecules>/SidebarList';
import SidebarItem from '<molecules>/SidebarItem';
import { HamburgerContext } from '<state>/HamburgerContext';

const Sidebar = () => {
  const { open } = useContext(HamburgerContext);

  return (
    <Sidebar.Container open={open}>
      <SidebarList title="Explore">
        <SidebarItem item="Books" itemSize="273" />
        <SidebarItem item="Genres" itemSize="33" />
        <SidebarItem item="Authors" itemSize="60" />
      </SidebarList>
      <SidebarList title="My Books">
        <SidebarItem item="Books" itemSize="273" />
        <SidebarItem item="Genres" itemSize="33" />
      </SidebarList>
      <SidebarList title="Explore">
        <SidebarItem item="Books" itemSize="273" />
        <SidebarItem item="Genres" itemSize="33" />
      </SidebarList>
    </Sidebar.Container>
  );
};

Sidebar.Container = styled.aside`
  ${({ open }) => `
    position: fixed;
    background: white;
    width: 20rem;
    top: 4.75rem;
    -webkit-box-shadow: 1px 30px 35px -4px rgba(219, 219, 219, 1);
    -moz-box-shadow: 1px 30px 35px -4px rgba(219, 219, 219, 1);
    box-shadow: 1px 30px 35px -4px rgba(219, 219, 219, 1);
    z-index: 1000;

    @media (max-width: 1024px) {
      display: ${open ? 'block' : 'none'}
    }
`}
`;

export default Sidebar;
