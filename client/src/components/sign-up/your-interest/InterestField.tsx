import React from 'react';
import { useRecoilState } from 'recoil';
import { interestState } from 'recoil/sign-up/atoms';

type Props = {
  label: string;
  interestings: string[];
};
export const InterestField = ({ label, interestings }: Props) => {
  const [seletedInterest, setSeletedInterest] = useRecoilState(interestState);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { value } = e.currentTarget;

    if (seletedInterest.length < 5 && !seletedInterest.includes(value)) {
      setSeletedInterest((prev) => [...prev, value]);
    }

    if (seletedInterest.includes(value)) {
      const updatedInterests = seletedInterest.filter(
        (selectedInterest) => selectedInterest !== value
      );
      setSeletedInterest(updatedInterests);
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
            className={`${seletedInterest.includes(interest) ? 'tag-selected' : 'tag'}`}
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
