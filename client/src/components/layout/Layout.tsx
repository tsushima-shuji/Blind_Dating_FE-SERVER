import React from 'react';
import Footer from './footer/Footer';
import { NavBar } from './NavBar';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center w-full h-screen ">
      <div className="container bg-white  sm:w-[375px] h-full flex flex-col overflow-hidden">
        <NavBar />
        {children}
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
