import React from 'react';

function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center w-full h-screen ">
      <div className="container bg-white  sm:w-[375px] h-full flex flex-col items-center justify-center">
        {children}
      </div>
    </div>
  );
}

export default AuthLayout;
