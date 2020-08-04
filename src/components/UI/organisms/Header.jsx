/** @format */
import React, { useContext } from 'react';
import styled from 'styled-components';
import Text from '<atoms>/Text';
import Hamburger from '<molecules>/Hamburger';
import { GiBookshelf } from 'react-icons/gi';
import { FiShoppingCart } from 'react-icons/fi';
import { IconContext } from 'react-icons';
import { HamburgerContext } from '<state>/HamburgerContext';
import { CartContext } from '<state>/CartContext';
import { Link } from 'react-router-dom';

const Header = () => {
  const { toggle } = useContext(HamburgerContext);
  const { itemCount } = useContext(CartContext);

  return (
    <Header.Container>
      <section className="header-lt">
        <div className="d_flex">
          <Hamburger handleClick={toggle} />
          <div>
            <IconContext.Provider
              value={{
                color: 'green',
                size: '2rem',
              }}
            >
              <GiBookshelf></GiBookshelf>
            </IconContext.Provider>
          </div>
        </div>
        <div className="home">
          <Text fontSize="sm" color="black" fontWeight="semiBold">
            Olodo
          </Text>
          <Text fontSize="sm" color="black" fontWeight="">
            Books
          </Text>
        </div>
      </section>
      <section className="header-rt">
        <IconContext.Provider
          value={{
            color: 'green',
            size: '1.55rem',
            className: 'global-class-name',
          }}
        >
          <FiShoppingCart />
        </IconContext.Provider>{' '}
        <Link to="/cart" className="cart">
          Cart ({itemCount})
        </Link>
      </section>
    </Header.Container>
  );
};

Header.Container = styled.section`
  position: sticky;
  top: 0px;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4.75rem;
  padding: 0 2.75rem;
  border-bottom: rgb(231, 226, 226) solid 1px;
  background-color: white;

  .home {
    display: flex;
    flex-direction: column;
    justify-content: center;

    p {
      margin: 0;
    }
  }

  .cart {
    margin-left: 1rem;
    font-size: 0.85rem;
    font-weight: 600;
    color: grey;
  }

  .header-lt,
  .header-rt {
    display: flex;
    align-items: center;
  }

  .header-lt :nth-child(2) {
    p {
      color: rgb(172, 166, 166);
    }
  }

  .header-md {
    display: flex;
    align-items: center;
  }
  @media (max-width: 1024px) {
    padding: 0 2rem;
    .home {
      display: none;
    }
    .header-rt :nth-child(1) {
      margin: 0;
    }

    .header-md :nth-child(2) {
      background: none;
      border: none;
    }

    input[type='search'] {
      display: none;
    }
  }

  @media (max-width: 576px) {
    padding: 0 1.75rem;
  }

  @media (max-width: 375px) {
    padding: 0 1.35rem;
  }

  @media (max-width: 320px) {
    padding: 0 1rem;
  }
`;

export default Header;
