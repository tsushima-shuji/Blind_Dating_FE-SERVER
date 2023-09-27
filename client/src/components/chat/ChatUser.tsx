import { ReactComponent as Exit } from 'assets/icons/exit.svg';
import { ReactComponent as Trash } from 'assets/icons/trash.svg';
import { useNavigate } from 'react-router-dom';

type Props = { user: string; onDelete: () => void };

const ChatUser = (props: Props) => {
  const { user, onDelete } = props;
  const navigate = useNavigate();

  return (
    <section className="flex items-center w-full gap-2 px-8 py-8 max-h-[15%]">
      <div className="flex items-center justify-center flex-none w-12 h-12 text-xl font-bold rounded-full text-white/90 bg-grayLignt">
        {user.slice(0, 1)}
      </div>
      <div className="flex flex-col flex-1">
        <h2 className="text-lg font-bold font-Lora">{user}</h2>
        {/* <b className="mx-1 text-xs text-labelColor">{status}</b> */}
      </div>

      <button
        type="button"
        aria-label="채팅 삭제"
        className="flex-none w-12 h-12 p-3 border text-s text-labelColor border-whiteSmoke rounded-xl hover:text-redAmaranth hover:border-redAmaranth sm:hidden"
        onClick={onDelete}
      >
        <Trash />
      </button>
      <button
        type="button"
        className="flex-none w-12 h-12 p-3 border text-s text-labelColor border-whiteSmoke rounded-xl hover:text-redAmaranth hover:border-redAmaranth"
        aria-label="채팅 나가기"
        onClick={() => {
          navigate('/chat-list');
        }}
      >
        <Exit />
      </button>
    </section>
  );
};

export default ChatUser;
