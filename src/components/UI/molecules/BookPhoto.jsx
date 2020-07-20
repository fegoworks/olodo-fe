/** @format */

import React from 'react';
import PropTypes from 'prop-types';
import Image from '<atoms>/Image';
import styled from 'styled-components';

const BookPhoto = ({
  book,
  className,
  width,
  borderRadius,
  marginRight,
  height,
  children,
}) => (
  <BookPhoto.Container
    width={width}
    borderRadius={borderRadius}
    marginRight={marginRight}
    height={height}
    className={className}
  >
    <Image imageUrl={book.imageUrl} altTitle={book.title} />
    {children}
  </BookPhoto.Container>
);

BookPhoto.Container = styled.div`
  ${({ width, borderRadius, marginRight, height }) => `
    width: ${width};
    height: ${height};
    border-radius: ${borderRadius}; 
    margin-right: ${marginRight};

    img {
    width: 100%;
    height: 21rem;
    -webkit-box-shadow: 1px 30px 35px -4px rgba(219, 219, 219, 1);
    -moz-box-shadow: 1px 30px 35px -4px rgba(219, 219, 219, 1);
    box-shadow: 1px 30px 35px -4px rgba(219, 219, 219, 1);
  }
`}
`;

BookPhoto.defaultProps = {
  className: '',
  width: '',
  borderRadius: '',
  marginRight: '',
  height: '',
};

BookPhoto.propTypes = {
  book: PropTypes.oneOfType([PropTypes.object]).isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  className: PropTypes.oneOfType([PropTypes.string]).isRequired,
  width: PropTypes.oneOfType([PropTypes.string]).isRequired,
  borderRadius: PropTypes.oneOfType([PropTypes.string]).isRequired,
  marginRight: PropTypes.oneOfType([PropTypes.string]).isRequired,
  height: PropTypes.oneOfType([PropTypes.string]).isRequired,
};

export default BookPhoto;
