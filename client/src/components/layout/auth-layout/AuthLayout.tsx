import React from 'react';

function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center w-full h-screen ">
      <div className="container flex flex-col items-center bg-white w-full justify-center h-full  m-auto sm:w-[375px] ">
        {children}
      </div>
    </div>
  );
}

export default AuthLayout;
