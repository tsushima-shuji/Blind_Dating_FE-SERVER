import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

function Layout({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center h-screen ">
      <div className="container w-[375px] h-[812px] flex flex-col m-auto">
        <Navbar title={title} />
        {children}
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
