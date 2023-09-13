import InterestItem from './InterestItem';

type Props = {
  data: string[];
  name: string;
  onToggleModal: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onClick: (name: string) => void;
};

const UserInterests = (props: Props) => {
  const { data, name, onToggleModal, onClick } = props;
  return (
    <div className="flex flex-wrap h-16 gap-2 overflow-auto max-h-16">
      {data?.map((interestName) => <InterestItem key={interestName} name={interestName} />)}
      <button
        type="button"
        className="flex block h-8 p-2 border rounded text-s text-redAmaranth border-whiteLilac hover:border-redAmaranth"
        onClick={(e) => {
          onToggleModal(e);
          onClick(name);
        }}
      >
        Edit
      </button>
    </div>
  );
};

export default UserInterests;
