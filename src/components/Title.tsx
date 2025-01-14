import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.div`
  .title h1 {
    position: relative;
    margin-bottom: 1rem;
    padding-bottom: 1rem;

    &::after {
      content: '';
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: 0;
      width: 100px;
      height: 4px;
      background-color: #000;
    }

    span {
      color: #10b981;
    }
  }

  /* Deskripsi */
  .deskripsi {
    margin-top: 0.5rem;
    text-align: center;
  }
`;

interface TitleProps {
  title: string;
  deskripsi: string;
  title1: string;
}

const Title: React.FC<TitleProps> = ({ title, deskripsi, title1 }) => {
  return (
    <StyledTitle>
      <div className="title text-center">
        <h1 className="my-3 text-3xl font-bold">
          {title} <span>{title1}</span>
        </h1>
        <section className="deskripsi">
          <p>{deskripsi}</p>
        </section>
      </div>
    </StyledTitle>
  );
};

export default Title;
