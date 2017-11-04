import styled, { keyframes } from 'styled-components';

const appLogoSpin = keyframes`
from { transform: rotate(0deg); }
to { transform: rotate(360deg); }
`;

const Logo = styled.img`
  animation: ${appLogoSpin} infinite 20s linear;
  height: 80px;
`;

export default Logo;
