import { ReactComponent as Setting } from 'assets/icons/setting-config.svg';
import { ReactComponent as Close } from 'assets/icons/close.svg';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { chatsSettingBtnState } from 'recoil/chat/atoms';

const ChatSettingBtn = () => {
  const setIsClicked = useSetRecoilState(chatsSettingBtnState);
  const isClicked = useRecoilValue(chatsSettingBtnState);

  return (
    <button
      type="button"
      className="w-12 h-12 p-3 border text-redAmaranth border-whiteLilac rounded-xl hover:border-redAmaranth"
      onClick={() => setIsClicked((prev) => !prev)}
      aria-label="채팅 설정"
    >
      {isClicked ? <Close /> : <Setting />}
    </button>
  );
};

export default ChatSettingBtn;
