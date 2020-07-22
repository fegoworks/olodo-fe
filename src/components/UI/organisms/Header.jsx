/** @format */
import React from 'react';
import styled from 'styled-components';
import Text from '<atoms>/Text';
import { GiBookshelf } from 'react-icons/gi';
import { FiSearch } from 'react-icons/fi';
import { FiShoppingCart } from 'react-icons/fi';
import { IconContext } from 'react-icons';

const Header = () => {
  return (
    <Header.Container>
      <section className="header-lt">
        <div className="d_flex">
          <div className="hamburger">
            <div className="_line"></div>
            <div className="line"></div>
            <div className="_line"></div>
          </div>
          <div>
            <IconContext.Provider
              value={{
                color: 'green',
                size: '3rem',
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
          <Text fontSize="sm" color="black" fontWeight="semiBold">
            Books
          </Text>
        </div>
      </section>
      <section className="header-md">
        <input
          type="search"
          id="search"
          placeholder="Search books, genres, authors, etc."
        />
        <IconContext.Provider
          value={{
            color: 'green',
            size: '2.35rem',
          }}
        >
          <FiSearch></FiSearch>
        </IconContext.Provider>
      </section>
      <section className="header-rt">
        <IconContext.Provider
          value={{
            color: 'green',
            size: '1.85rem',
            className: 'global-class-name',
          }}
        >
          <FiShoppingCart></FiShoppingCart>
        </IconContext.Provider>
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
  height: 6.75rem;
  padding: 0 1.5rem;
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

  .header-md :nth-child(2) {
    padding: 0.6rem;
    background: whitesmoke;
    border: solid rgb(231, 226, 226) 1px;
    border-left: none;
  }

  .header-md input[type='search'] {
    width: 30rem;
    padding: 0.65rem;
    border: solid rgb(231, 226, 226) 1px;
  }

  input[type='search']:focus {
    outline: none;
  }

  @media (max-width: 1024px) {
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
`;

export default Header;
