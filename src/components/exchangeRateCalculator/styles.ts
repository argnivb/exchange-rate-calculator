'use client';

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
`;

export const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: ${({ theme }) => theme.radius.rounded};
  padding: ${({ theme }) => theme.space[5]};
  padding-bottom: ${({ theme }) => theme.space[6]};
  margin-bottom: ${({ theme }) => theme.space[7]};
  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: 0 1px 12px ${({ theme }) => theme.colors.primaryLight};
  max-width: 374px;
`;

export const CurrenciesWrapper = styled.div`
  font-family: ${({ theme }) => theme.fonts.body};
  font-weight: ${({ theme }) => theme.fontWeights.heading};
  font-size: ${({ theme }) => theme.fontSizes[3]};
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.space[5]};
`;

export const AmountInput = styled.input`
  font-family: ${({ theme }) => theme.fonts.body};
  font-weight: ${({ theme }) => theme.fontWeights.heading};
  font-size: ${({ theme }) => theme.fontSizes[4]};
  background-color: ${({ theme }) => theme.colors.white};
  outline: none;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.rounded};
  padding: ${({ theme }) => `${theme.space[4]} ${theme.space[5]}`};
  width: 100%;
  &:focus-visible {
    border-color: ${({ theme }) => theme.colors.primary};
  }
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    appearance: none;
  }
  appearance: textfield;
`;
