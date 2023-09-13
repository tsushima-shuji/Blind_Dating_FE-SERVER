import { ProgressBar } from 'components/ui/ProgressBar';

type Props = {
  progressWidth: string;
  title: string;
};

export const Header = ({ progressWidth, title }: Props) => {
  return (
    <header>
      <ProgressBar progressWidth={progressWidth} />
      <h1 className="text-3xl font-bold pl-11 font-Lora">{title}</h1>
    </header>
  );
};
