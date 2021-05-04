import React from 'react';
import styled from 'styled-components';
import About from '../../components/About';
import Articles from '../../components/Articles';
import NavBar from '../../components/NavBar';
import Technologies from '../../components/Technologies';

const Page = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
`;

const PageContent = styled.div`
  max-width: ${({ theme }) => theme.maxContentWidth};
  padding-left: ${({ theme }) => theme.padding.medium};
  padding-right: ${({ theme }) => theme.padding.medium};
`;

export default function HomePage() {
  return (
    <Page>
      <NavBar />
      <PageContent>
        <About />
        <Technologies />
        <Articles />
      </PageContent>
    </Page>
  );
}
