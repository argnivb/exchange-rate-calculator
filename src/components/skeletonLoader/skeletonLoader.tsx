'use client';

import styled, { keyframes } from 'styled-components';

const loadingAnimation = keyframes`
 0% {
    opacity: 1;
  }
  60% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
`;

export const SkeletonLoader = styled.div<{
  h: number;
  w: number;
}>`
  width: ${({ w }) => `${w}rem`};
  height: ${({ h }) => `${h}rem`};
  background-color: ${({ theme }) => theme.colors.grey};
  border-radius: ${({ theme }) => theme.radius.rounded};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.border};
    animation: ${loadingAnimation} 2s ease-in-out infinite;
  }
`;

export default SkeletonLoader;
