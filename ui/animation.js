import { keyframes } from 'styled-components';
//theme
import Theme from '../theme';
///////////////////////////////////////////////////////////////////////////////////////////////////

export const buzz = keyframes`
  10% {
    transform: translateX(2px) rotate(2deg);
  }
  40% {
    transform: translateX(-2px) rotate(-2deg);
  }
  50% {
    transform: translateX(1px) rotate(1deg);
  }
  60% {
    transform: translateX(-1px) rotate(-1deg);
  }
  90% {
    transform: translateX(0.5px) rotate(0);
  }
  100% {
    transform: translateX(-0.5px) rotate(0);
  }
  & {
    display: inline-block;
    vertical-align: middle;
    box-shadow: 0 0 1px ${Theme.colors.black};
    transform: perspective(1px) translateZ(0);
  }
`;
