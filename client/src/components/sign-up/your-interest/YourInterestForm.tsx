import React, { useState } from 'react';
import { Header } from 'components/layout/auth-layout/Header';
import { SignUpAllValues } from 'pages/SignUpPage';
import { InterestField } from './InterestField';
import { INTERESTINGS_CULTURE, INTERESTINGS_SPORTS } from 'assets/config';

type Props = {
  onNext: () => void;
  setSignUpAllValues: React.Dispatch<React.SetStateAction<SignUpAllValues>>;
};

export const YourInterestForm = ({ onNext, setSignUpAllValues }: Props) => {
  const [collectAnswers, setCollectAnswers] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSignUpAllValues((prev) => ({ ...prev, interests: collectAnswers }));
    onNext();
  };

  const INTEREST_FIELDS = [
    {
      label: '스포츠',
      interestings: INTERESTINGS_SPORTS,
      collectAnswers,
      setCollectAnswers,
    },
    {
      label: '문화 및 활동',
      interestings: INTERESTINGS_CULTURE,
      collectAnswers,
      setCollectAnswers,
    },
  ];

  return (
    <div className="w-full h-full">
      <Header progressWidth="4/5" title="Your interests" />

      <p className="w-full pr-16 mt-3 font-medium text-s h-9 pl-11 text-grayIsh">
        관심사 선택은 상대방에게 내가 어떤 관심사를 가진 사람인지 알리는데 많은 도움이 됩니다.
      </p>

      <main className="pb-5 mt-10 px-9">
        <form className="flex flex-col items-center justify-center w-full" onSubmit={handleSubmit}>
          <main className="h-[480px] overflow-y-auto no-scrollbar">
            {INTEREST_FIELDS.map((field) => (
              <InterestField
                label={field.label}
                interestings={field.interestings}
                collectAnswers={field.collectAnswers}
                setCollectAnswers={field.setCollectAnswers}
              />
            ))}
          </main>

          <button
            className={`mt-14 ${collectAnswers.length < 3 ? 'btn-red' : 'btn-red-checkSuccess'}`}
            disabled={collectAnswers.length < 3}
          >{`Continue ( ${collectAnswers.length} / 5 )`}</button>
        </form>
      </main>
    </div>
  );
};
