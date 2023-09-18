import React, { useState } from 'react';
import { QuestionField } from './QuestionField';
import { QUESTIONS } from 'assets/config';
import { SignUpAllValues } from 'pages/SignUpPage';
import { Header } from 'components/layout/Header';

type Props = {
  onNext: () => void;
  setSignUpAllValues: React.Dispatch<React.SetStateAction<SignUpAllValues>>;
};

const PersonalityTestForm = ({ onNext, setSignUpAllValues }: Props) => {
  const [collectAnswers, setCollectAnswers] = useState<(boolean | null)[]>(Array(8).fill(null));
  const [collectAnswersCount, setCollectAnswersCount] = useState<number>(0);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSignUpAllValues((prev) => ({ ...prev, questions: collectAnswers }));
    onNext();
  };

  return (
    <div className="w-full h-full">
      <Header progressWidth="3/5" title="Personality test" />

      <p className="w-full pr-16 mt-3 font-medium text-s h-9 pl-11 text-grayIsh">
        질문에 대한 답변은 상대방에게 내가 어떤 사람인지 알리는데 많은 도움이 됩니다.
      </p>

      <main className="px-6 mt-10">
        <form className="flex flex-col items-center justify-center w-full " onSubmit={handleSubmit}>
          <main className="space-y-10 pl-1 h-[480px] overflow-y-auto scrollbar">
            {QUESTIONS.map((question, index) => {
              return (
                <QuestionField
                  key={index}
                  question={question}
                  index={index + 1}
                  setCollectAnswers={setCollectAnswers}
                  setCollectAnswersCount={setCollectAnswersCount}
                />
              );
            })}
          </main>
          <button
            className={`mt-14 ${collectAnswersCount === 8 ? 'btn-red-checkSuccess' : 'btn-red'}`}
            disabled={collectAnswersCount !== 8}
          >
            {`Continue ( ${collectAnswersCount} / 8 ) `}
          </button>
        </form>
      </main>
    </div>
  );
};

export default PersonalityTestForm;
