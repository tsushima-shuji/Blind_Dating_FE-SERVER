import React from 'react';

type Props = {
  progressWidth: string;
};

export const ProgressBar = ({ progressWidth }: Props) => {
  const widthConfig: Record<string, string> = {
    '1/5': 'w-1/5',
    '2/5': 'w-2/5',
    '3/5': 'w-3/5',
    '4/5': 'w-4/5',
    '1': 'w-full',
  };

  return (
    <div className="w-full h-2 mb-9 bg-grayLignt">
      <div
        className={`${widthConfig[progressWidth]} h-full duration-300 ease-in-out bg-redAmaranth`}
      ></div>
    </div>
  );
};
