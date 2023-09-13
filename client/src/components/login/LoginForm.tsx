import { usePostLogin } from 'hooks/api/usePostLogin';
import React, { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';

export type LoginFormValues = {
  userId: string;
  userPassword: string;
};

export const LoginForm = () => {
  const [loginInfo, setLoginInfo] = useState<LoginFormValues>({ userId: '', userPassword: '' });
  const { postLoginFn, isLoading } = usePostLogin();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (loginInfo.userId.length < 5) {
      alert('아이디는 5글자 이상입니다.');
      return;
    }
    if (loginInfo.userPassword.length < 8) {
      alert('비밀번호는 8글자 이상입니다.');
      return;
    }
    postLoginFn(loginInfo);
  };
  return (
    <>
      <Link className="mt-20 text-lg font-bold font-Lora " to="/signup">
        Sign up to continue
      </Link>
      <div className="mt-5">
        <form className="flex flex-col items-center justify-center gap-3" onSubmit={handleSubmit}>
          <input
            className="border border-whiteSmoke rounded-2xl w-[295px] h-14 text-center font-NotoSans placeholder:italic focus:border-redAmaranth focus:outline-none"
            type="text"
            placeholder="Id"
            value={loginInfo.userId}
            autoFocus
            required
            onChange={(event) =>
              setLoginInfo((prev) => ({
                ...prev,
                userId: event.target.value,
              }))
            }
          />
          <input
            className="border border-whiteSmoke rounded-2xl w-[295px] h-14 text-center font-NotoSans  placeholder:italic focus:border-redAmaranth focus:outline-none"
            type="password"
            placeholder="Password"
            value={loginInfo.userPassword}
            required
            onChange={(event) =>
              setLoginInfo((prev) => ({
                ...prev,
                userPassword: event.target.value,
              }))
            }
          />
          <button
            type="submit"
            className=" hover:shadow-xl transition duration-300 px-8 py-4 mt-3 text-base font-bold text-center rounded-2xl w-[295px] h-14 font-NotoSans text-whiteSmoke bg-redAmaranth"
            disabled={isLoading || !loginInfo.userId || !loginInfo.userPassword}
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
};
