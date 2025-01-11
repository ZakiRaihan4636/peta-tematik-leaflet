'use client';
import React, { ReactNode } from 'react';
import styled from 'styled-components';

const StyledComponent = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 1rem;
`;

interface ContainerPageProps {
  children: ReactNode;
}

const ContainerPage: React.FC<ContainerPageProps> = ({ children }) => {
  return <StyledComponent>{children}</StyledComponent>;
};

export default ContainerPage;
