import React, { ReactNode } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

type LayoutPageProps = {
  children: ReactNode;
};

const LayoutPage: React.FC<LayoutPageProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default LayoutPage;
