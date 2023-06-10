import styled from 'styled-components';

export const ExchangeResult = styled.div`
  font-family: ${({ theme }) => theme.fonts.body};
  font-weight: ${({ theme }) => theme.fontWeights.heading};
  font-size: ${({ theme }) => theme.fontSizes[6]};
  text-align: center;

  & p {
    display: inline-block;
  }
  & span:nth-child(2) {
    color: ${({ theme }) => theme.colors.grey};
  }
`;

export const ExchangeRate = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-weight: ${({ theme }) => theme.fontWeights.heading};
  font-size: ${({ theme }) => theme.fontSizes[4]};
  text-align: center;
  color: ${({ theme }) => theme.colors.grey};
`;

export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.space[4]};
`;
