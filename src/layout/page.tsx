// src/layout/MainLayout.tsx

import React from 'react';
import Header from '@/app/components/header/Navigation';
// import Footer from '@/components/footer/page';

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="main-layout">
      {/* <Header /> */}
      <main>{children}</main>
      {/* <Footer /> */}
    </div>
  );
};

export default MainLayout;
