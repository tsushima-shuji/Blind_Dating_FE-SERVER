import React from 'react';

type Props = {
  icon: React.ReactNode;
  isSelected: boolean;
  fill: string;
  label: string;
};

export const FooterBtn = (props: Props) => {
  const { icon, isSelected, fill, label } = props;
  const iconWithProps = React.cloneElement(icon as React.ReactElement, { fill, stroke: fill });

  return (
    <button
      type="button"
      aria-label={label}
      className={`flex items-center justify-center pt-1 w-16 h-12 border-t-2 transition duration-75 ${
        isSelected ? ' border-redAmaranth/80' : 'border-whiteLilac'
      }`}
    >
      {iconWithProps}
    </button>
  );
};
