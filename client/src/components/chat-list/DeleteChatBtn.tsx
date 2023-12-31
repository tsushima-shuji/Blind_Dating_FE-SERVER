import { ReactComponent as Trash } from 'assets/icons/trash.svg';

const DeleteChatBtn = ({ onClick }: { onClick: () => void }) => {
  return (
    <button
      type="button"
      className="min-w-[28px] h-12 pl-2 text-redAmaranth "
      onClick={onClick}
      aria-label="채팅 삭제"
    >
      <Trash />
    </button>
  );
};

export default DeleteChatBtn;
