import { Header } from 'components/layout/Header';
import { usePostSignUpData } from 'hooks/api/usePostSignUpData';
import { SignUpAllValues } from 'pages/SignUpPage';
import React, { useState } from 'react';

type Props = {
  signUpAllValues: SignUpAllValues;
  setSignUpAllValues: React.Dispatch<React.SetStateAction<SignUpAllValues>>;
};

export const IntroductionForm = ({ signUpAllValues, setSignUpAllValues }: Props) => {
  const [textValue, setTextValue] = useState<string>('');
  const { postSignUpDataFn, isLoading } = usePostSignUpData();

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.currentTarget;

    setTextValue(value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const updatedValues = { ...signUpAllValues, selfIntroduction: textValue };
    setSignUpAllValues(updatedValues);
    postSignUpDataFn(updatedValues);
  };

  return (
    <div className="w-full h-full">
      <Header progressWidth="1" title="Introduction" />

      <p className="w-full pr-16 mt-3 font-medium text-s h-9 pl-11 text-grayIsh">
        자기소개를 자세히 적어주시면, 상대방에게 자신이 어떤 사람인지 파악하는데 많은 도움이 됩니다.
      </p>

      <main className="mt-10 px-7">
        <form className="flex flex-col items-center justify-center" onSubmit={handleSubmit}>
          <main className=" w-full space-y-10 h-[480px] overflow-hidden">
            <textarea
              className="w-full h-full p-3 text-sm border rounded-lg outline-none resize-none font-NotoSans border-whiteLilac focus:border-black/25 focus:rounded-lg"
              placeholder="자기 소개를 적어주세요"
              id=""
              cols={10}
              rows={10}
              required
              minLength={10}
              maxLength={300}
              autoFocus
              value={textValue}
              onChange={handleChange}
            />
          </main>
          <button className="mt-14 btn-red" disabled={isLoading}>
            Continue
          </button>
        </form>
      </main>
    </div>
  );
};
