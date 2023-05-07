'use client';

import styled from 'styled-components';

const Container = styled.main`
  padding-top: ${({ theme }) => theme.spacing.large};
`;

const Heading = styled.h1`
  font-family: ${({ theme }) => theme.typography.fonts.heading};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  font-size: ${({ theme }) => theme.typography.fontSizes.xlarge};
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
`;

export default function Home() {
  return (
    <Container>
      <Heading>Welcome to Next.js 13</Heading>
    </Container>
  );
}
