import { ReactComponent as NoChatList } from 'assets/icons/noChatList.svg';

export const NoChatListData = () => {
  return (
    <div className="pb-10">
      <NoChatList className="mb-12" />
      <p className="mb-3 text-lg font-extrabold text-center font-NotoSans">Enable notification’s</p>
      <p className="font-medium text-center text-s text-black/50 font-NotoSans">
        채팅 가능한 유저가 존재하지 않습니다.
      </p>
    </div>
  );
};
