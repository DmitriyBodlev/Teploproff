import React from 'react';
import * as R from 'ramda';
import styled, { css, keyframes } from 'styled-components';
import {
  top,
  left,
  flex,
  size,
  color,
  space,
  width,
  right,
  height,
  bottom,
  margin,
  zIndex,
  border,
  gridGap,
  gridRow,
  opacity,
  display,
  padding,
  flexGrow,
  position,
  maxWidth,
  minWidth,
  fontSize,
  overflow,
  flexWrap,
  flexBasis,
  textAlign,
  maxHeight,
  alignSelf,
  minHeight,
  boxShadow,
  borderTop,
  alignItems,
  fontWeight,
  lineHeight,
  borderLeft,
  gridColumn,
  fontFamily,
  gridRowGap,
  borderColor,
  borderRight,
  gridAutoRows,
  borderBottom,
  borderRadius,
  flexDirection,
  gridColumnGap,
  letterSpacing,
  justifyContent,
  gridAutoColumns,
  gridTemplateRows,
  gridTemplateAreas,
  gridTemplateColumns
} from 'styled-system';
// //////////////////////////////////////////////////////////////////////////////

export const A = styled.a`
`;
export const Box = styled.div`
  ${color}
  ${space}
  ${width}
  ${margin}
  ${height}
  ${border}
  ${zIndex}
  ${opacity}
  ${display}
  ${fontSize}
  ${maxWidth}
  ${minWidth}
  ${overflow}
  ${maxHeight}
  ${minHeight}
  ${boxShadow}
  ${borderTop}
  ${borderLeft}
  ${borderRight}
  ${borderColor}
  ${borderBottom}
  ${borderRadius}
  cursor: ${({ cursor }) => cursor};
  animation: ${({ animation }) => animation};
  transform: ${({ transform }) => transform};
  transition: ${({ transition }) => transition};
  ${({ additionalStyles }) => additionalStyles};
  background-image: ${({ backgroundImage }) => backgroundImage};
  background-repeat: ${({ backgroundRepeat }) => backgroundRepeat};
  background-position: ${({ backgroundPosition }) => backgroundPosition};
  border-top-left-radius: ${({ borderTopLeftRadius }) => borderTopLeftRadius}};
  border-top-right-radius: ${({ borderTopRightRadius }) => borderTopRightRadius}};
  border-bottom-left-radius: ${({ borderBottomLeftRadius }) => borderBottomLeftRadius}};
  border-bottom-right-radius: ${({ borderBottomRightRadius }) => borderBottomRightRadius}};
`;
export const Span = styled.span`
`;
export const Button = styled.button`
`;
export const Image = styled.img`
`;

export const P = styled.p`
`;
export const H = styled.h1`
`;

export const Svg = styled('svg')`
  ${top}
  ${left}
  ${space}
  ${position}
  ${borderRadius}
  animation: ${({ animation }) => animation};
  transform: ${({ transform }) => transform};
`;

export const Path = styled('path')``;

export const Flex = styled((props) => <Box {...props} />)`
  ${flex}
  ${flexGrow}
  ${flexWrap}
  ${flexBasis}
  ${alignSelf}
  ${alignItems}
  ${flexDirection}
  ${justifyContent}
  display: ${({ display }) => R.or(display, 'flex')};
`;

export const Grid = styled((props) => <Box {...props} />)`
  ${gridGap}
  ${gridRow}
  ${gridRowGap}
  ${alignItems}
  ${gridColumn}
  ${gridAutoRows}
  ${gridColumnGap}
  ${gridAutoColumns}
  ${gridTemplateRows}
  ${gridTemplateAreas}
  ${gridTemplateColumns}
  align-items: ${({ alignItems }) => alignItems};
  display: ${({ display }) => R.or(display, 'grid')};
  justify-items: ${({ justifyItems }) => justifyItems};
`;

export const GridOrFlex = styled((props) => <Box {...props} />)`
  ${flex}
  ${gridGap}
  ${gridRow}
  ${flexGrow}
  ${flexWrap}
  ${flexBasis}
  ${alignSelf}
  ${alignItems}
  ${gridRowGap}
  ${gridColumn}
  ${gridAutoRows}
  ${flexDirection}
  ${gridColumnGap}
  ${justifyContent}
  ${gridAutoColumns}
  ${gridTemplateRows}
  ${gridTemplateAreas}
  ${gridTemplateColumns}
  display: ${({ display }) => R.or(display, 'flex')};
`;

const positionedAbstract = (item) => styled(item)`
  ${top}
  ${left}
  ${right}
  ${bottom}
  ${position}
`;

export const Text = styled.span`
  ${color}
  ${space}
  ${width}
  ${height}
  ${padding}
  ${display}
  ${opacity}
  ${fontSize}
  ${textAlign}
  ${fontFamily}
  ${lineHeight}
  ${fontWeight}
  ${letterSpacing}
  white-space: ${({ whiteSpace }) => whiteSpace};
  text-overflow: ${({ textOverflow }) => textOverflow};
  text-decoration: ${({ textDecoration }) => textDecoration};
  text-shadow: ${(props) => {
    if (!isMobile || props.textShadow) {
      return props.textShadow;
    } else {
      if (props.color) {
        return `0 0 ${w(0.15)}px ${props.color}`;
      } else {
        return `0 0 ${w(0.15)}px black`;
      }
    }
  }};
  cursor: ${({ cursor }) => cursor};
  text-decoration: ${({ textDecoration }) => textDecoration};
  &:hover {
    text-decoration: ${({ hoverTextDecoration }) => hoverTextDecoration};
  }
`;

export const PositionedBox = positionedAbstract(Box);
export const PositionedFlex = positionedAbstract(Flex);
export const PositionedGrid = positionedAbstract(Grid);

export const noneScroll = css`
  &::-webkit-scrollbar{
    display: none;
  }
`;

export const scrollbarStyled = css`
  &::-webkit-scrollbar {
    width: 2px;
    height: 2px;
  } 
  &::-webkit-scrollbar-track {
    
  }
  &::-webkit-scrollbar-thumb {
    background-color: #4fd797;
    outline: 1px solid slategrey;
  }
`;

// animations

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    display: none;
  }
`;

const defaultAnimation = keyframes`
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const spin = keyframes`
  0% {
    opacity: 1;
    filter: blur(0px);
    transform:scale(1);
  }
  50% {
    opacity: 0;
    filter: blur(4px);
    transform: scale(1.5);
  }
  100% {
    opacity: 1;
    filter: blur(0px);
    transform: scale(1);
  }
`;

const animations = {
  spin,
  fadeIn,
  fadeOut,
  defaultAnimation,
};

export const getAnimationName = animationName => {
  switch (animationName) {
    case 'fade-in':
      return fadeIn;
    case 'fade-out':
      return fadeOut;
    default:
      return defaultAnimation;
  }
};

export const getAnimation = ({ animationName, animationProps }) => css`
  animation: ${R.pathOr(defaultAnimation, [animationName], animations)} ${animationProps};
`;
