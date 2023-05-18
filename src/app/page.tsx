'use client';

import styled from 'styled-components';

const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${({ theme }) => theme.space[6]};
  padding-top: ${({ theme }) => theme.space[6]};
`;

const Heading = styled.h1`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes[5]};
  font-weight: ${({ theme }) => theme.fontWeights.heading};
  text-align: center;
`;

export default function Home() {
  return (
    <Container>
      <Heading>Welcome to Next.js 13</Heading>
    </Container>
  );
}
