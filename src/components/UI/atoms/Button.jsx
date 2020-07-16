/** @format */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { fontWeight, fontSize } from '<styles>/variables/fonts';
import { textColors } from '<styles>/variables/colorPalette';

/**
 * @description - Button Component
 *
 * Button Component for Button and Titles
 */
const Button = ({
  fontSize,
  textAlign,
  color,
  display,
  fontWeight,
  children,
  padding,
  border,
  background,
}) => (
  <Button.Container
    fontSize={fontSize}
    textAlign={textAlign}
    color={color}
    display={display}
    fontWeight={fontWeight}
    padding={padding}
    border={border}
    background={background}
  >
    {children}
  </Button.Container>
);

Button.Container = styled.button`
  ${({
    padding,
    border,
    background,
    fontSize: userFontSize,
    fontWeight: userFontWeight,
    display,
    textAlign,
    color,
    theme: { fontSize, fontWeight, textColors },
  }) => `
    text-align: ${textAlign};
    color: ${textColors[color]};
    display: ${display};
    padding: ${padding || '0'};
    font-size: ${fontSize[userFontSize]};
    font-weight: ${fontWeight[userFontWeight]};
    border: ${border || 'none'};
    background: ${background || 'none'};
    cursor: pointer;

    :focus {
    outline: none;
  }
`}
`;

Button.defaultProps = {
  display: 'inline',
  fontWeight: 'normal',
  textAlign: 'left',
  fontSize: 'sm',
  color: 'whitesmoke',
};

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  display: PropTypes.oneOf(['block', 'inline', 'flex', 'inline-block', 'none']),
  color: PropTypes.oneOf(Object.keys(textColors)),
  fontSize: PropTypes.oneOf(Object.keys(fontSize)),
  textAlign: PropTypes.oneOf(['left', 'center', 'right', 'justify']),
  fontWeight: PropTypes.oneOf(Object.keys(fontWeight)),
  padding: PropTypes.string,
};

export default Button;