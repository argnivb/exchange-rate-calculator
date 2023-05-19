import styled from 'styled-components';

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 374px;
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
`;

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

export const ExchangeRateResult = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-weight: ${({ theme }) => theme.fontWeights.heading};
  font-size: ${({ theme }) => theme.fontSizes[6]};
  text-align: center;
`;
