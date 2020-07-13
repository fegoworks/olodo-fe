/** @format */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Text from '<atoms>/Text/Text';

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
          <div className="circle_avatar">
            <i className="fas fa-swatchbook"></i>
          </div>
        </div>
        <div className="home">
          <Text fontSize="sm" fontWeight="semiBold">
            Olodo Books
          </Text>
          <Text fontSize="xs" fontWeight="light">
            Check
          </Text>
        </div>
      </section>
      <section className="header-md">
        <input
          type="search"
          id="search"
          placeholder="Search books, genres, authors, etc."
        />
        <i id="srch_btn" className="fas fa-search"></i>
      </section>
      <section className="header-rt">
        <i className="fas fa-swatchbook"></i>
        <div>
          <i className="notif_wrapper far fa-bell">
            <span className="notif_item">3</span>
          </i>
        </div>
        <div>
          <img
            className="small_avatar"
            src="https://res.cloudinary.com/fego/image/upload/v1566565664/hng/fegggie_scbhf4.jpg"
            alt="avatar"
          />
        </div>
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

  .header-rt :nth-child(1),
  .header-rt :nth-child(2) {
    margin: 20px;
  }

  .notif_wrapper {
    position: relative;
  }

  .notif_item {
    position: absolute;
    background: limegreen;
    margin: 0 !important;
    bottom: 0.5rem;
    left: 0.4rem;
    padding: 0.25rem;
    width: 1.3rem;
    height: 1.3rem;
    line-height: 0.85rem;
    font-size: small;
    color: white;
    border-radius: 50%;
    text-align: center;
  }
`;

export default Header;
