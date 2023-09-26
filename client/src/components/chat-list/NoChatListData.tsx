import { ReactComponent as NoChatList } from 'assets/icons/noChatList.svg';

export const NoChatListData = () => {
  return (
    <section className="flex flex-col items-center justify-center mt-20">
      <NoChatList className="mb-6" />
      <p className="mb-3 text-lg font-extrabold text-center font-NotoSans">Enable notification’s</p>
      <p className="font-medium text-center text-s text-black/50 font-NotoSans">
        매칭된 유저가 있을 시 채팅방이 생성됩니다.
      </p>
    </section>
  );
};
