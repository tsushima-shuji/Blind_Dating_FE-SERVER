import React, { useState } from 'react';

type Props = {
  label: string;
  interestings: string[];
  collectAnswers: string[];
  setCollectAnswers: React.Dispatch<React.SetStateAction<string[]>>;
};
export const InterestField = (props: Props) => {
  const { label, interestings, collectAnswers, setCollectAnswers } = props;

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { value } = e.currentTarget;

    if (collectAnswers.length < 5 && !collectAnswers.includes(value)) {
      setCollectAnswers((prev) => [...prev, value]);
    }

    if (collectAnswers.includes(value)) {
      const updatedInterests = collectAnswers.filter(
        (selectedInterest) => selectedInterest !== value
      );
      setCollectAnswers(updatedInterests);
    }
  };
  return (
    <section className="flex flex-wrap justify-center gap-1.5 mb-4">
      <label
        className="w-full mb-2 text-sm font-medium text-center font-Lora text-labelColor"
        htmlFor={label}
      >
        {label}
      </label>
      {interestings.map((interest) => {
        return (
          <button
            className={`${collectAnswers.includes(interest) ? 'tag-selected' : 'tag'}`}
            key={interest}
            type="button"
            value={interest}
            onClick={handleClick}
          >
            {interest}
          </button>
        );
      })}
    </section>
  );
};
