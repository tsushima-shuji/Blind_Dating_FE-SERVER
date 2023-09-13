import React from 'react';

function NoHeaderFooterLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="container flex flex-col justify-center items-center m-auto w-[375px] h-[812px]">
        {children}
      </div>
    </div>
  );
}

export default NoHeaderFooterLayout;
