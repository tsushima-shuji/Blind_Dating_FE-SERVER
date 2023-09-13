import { useNavigate } from 'react-router-dom';
import DeleteChatBtn from './DeleteChatBtn';
import { useRecoilValue } from 'recoil';
import { chatsSettingBtnState } from 'recoil/chat/atoms';

const ChatItem = ({ ...props }) => {
  const { otherUserNickname: user, updatedAt, roomId, recentMessage, unReadCount, onClick } = props;
  const navigate = useNavigate();
  const isClickedButton = useRecoilValue(chatsSettingBtnState);

  const updated = new Date(updatedAt).toLocaleDateString();

  return (
    <>
      <li className="flex py-2 hover:bg-redAmaranth/10">
        <button
          type="button"
          className="flex items-center w-full gap-4 overflow-hidden text-left hover:cursor-pointer"
          onClick={() => {
            navigate(`/chat-list/${roomId}`);
          }}
        >
          <div className="flex items-center justify-center flex-none w-12 h-12 text-xl font-bold rounded-full text-white/90 bg-grayLignt">
            {user ? user.slice(0, 1) : '?'}
          </div>
          <div className={`h-10 text-sm truncate  basis-${isClickedButton ? '36' : '40'} flex-1 `}>
            <b>{user || '(알 수 없음)'}</b>
            <p className="mt-0.5">{recentMessage}</p>
          </div>
          <div className="flex flex-col items-end justify-between h-10 ">
            <span className="text-xs font-bold text-labelColor">{updated}</span>
            {unReadCount ? (
              <div className="h-4.5 w-9 truncate text-right text-whiteSmoke">
                <span className="px-2 py-1 text-xs rounded-full bg-redAmaranth">{unReadCount}</span>
              </div>
            ) : (
              <div className="w-5 h-5" />
            )}
          </div>
        </button>
        {isClickedButton && <DeleteChatBtn onClick={onClick} />}
      </li>
      <hr className="border-labelColor" />
    </>
  );
};

export default ChatItem;
