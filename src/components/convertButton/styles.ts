'use client';

import styled from 'styled-components';

export const Button = styled.button`
  position: absolute;
  bottom: -1.8rem;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  transition: background-color ${({ theme }) => theme.animation.transition};
  border: 1px solid rgba(0, 0, 0, 0);
  border-radius: ${({ theme }) => theme.radius.rounded};
  outline: none;
  font-family: ${({ theme }) => theme.fonts.body};
  font-weight: ${({ theme }) => theme.fontWeights.heading};
  font-size: ${({ theme }) => theme.fontSizes[4]};
  padding: ${({ theme }) => `${theme.space[4]} ${theme.space[5]}`};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
  }

  &:focus-visible {
    outline: 1px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 0.125rem;
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.primary};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.disabled};

    &,
    &:hover {
      cursor: default;
    }
  }
`;
