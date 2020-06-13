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


export const Nav = styled('nav')`
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
`
export const LinkInNav = styled('a')`
  ${display}
  ${color}
`
