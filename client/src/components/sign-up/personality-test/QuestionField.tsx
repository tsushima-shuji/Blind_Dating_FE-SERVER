import React, { useState } from 'react';

type Props = {
  question: string;
  index: number;
  setCollectAnswers: React.Dispatch<React.SetStateAction<(boolean | null)[]>>;
  setCollectAnswersCount: React.Dispatch<React.SetStateAction<number>>;
};

export const QuestionField = (props: Props) => {
  const { question, index, setCollectAnswers, setCollectAnswersCount } = props;
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const handleAnswerClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { value } = e.currentTarget;

    const answer = value === 'yes' ? true : false;

    setSelectedAnswer(value);

    setCollectAnswers((prev) => {
      const updatedAnswers = [...prev];
      updatedAnswers[index - 1] = answer;

      const nullArr = updatedAnswers.filter((val) => val !== null);

      setCollectAnswersCount(nullArr.length);
      return updatedAnswers;
    });
  };

  return (
    <section className="space-y-6">
      <p className="font-medium text-start text-s text-black/80 font-Lora">
        {index}. {question}
      </p>
      <div className="flex justify-center gap-2.5">
        <button
          type="button"
          value="yes"
          className={`${selectedAnswer === 'yes' ? 'btn-YesOrNo-selected' : 'btn-YesOrNo'}`}
          onClick={handleAnswerClick}
        >
          Yes
        </button>
        <button
          type="button"
          value="no"
          className={`${selectedAnswer === 'no' ? 'btn-YesOrNo-selected' : 'btn-YesOrNo'}`}
          onClick={handleAnswerClick}
        >
          No
        </button>
      </div>
    </section>
  );
};
