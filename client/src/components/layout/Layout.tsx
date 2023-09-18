import React from 'react';
import Footer from './footer/Footer';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center h-screen ">
      <div className="container w-[375px] h-[812px] flex flex-col m-auto">
        {children}
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
