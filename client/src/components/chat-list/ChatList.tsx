import useHandleChatList from 'hooks/useHandleChatList';
import ChatItem from './ChatItem';
import { useGetChatRooms } from 'hooks/api/useGetChatRooms';
import { useEffect } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { chatListState, chatsSettingBtnState } from 'recoil/chat/atoms';
import { NoChatListData } from './NoChatListData';

function ChatList() {
  const { connectHandler, disconnectHandler, exitHandler } = useHandleChatList();
  const { isLoading, isError, data } = useGetChatRooms();
  const setChatList = useSetRecoilState(chatListState);
  const chatList = useRecoilValue(chatListState);
  const setIsClicked = useSetRecoilState(chatsSettingBtnState);

  useEffect(() => {
    if (data) {
      setChatList(data?.data);
    }
  }, [data, setChatList]);

  useEffect(() => {
    connectHandler();

    return () => {
      disconnectHandler();
      setIsClicked(false);
    };
  }, []);

  const handleExit = (chatRoomId: string) => {
    exitHandler(chatRoomId);
    setChatList((prev) => prev.filter((room) => room.roomId !== chatRoomId));
  };

  if (isLoading || isError) {
    return (
      <ul className="flex flex-col items-center flex-1 w-full h-8 gap-2 px-8 overflow-auto">
        <div
          className="flex-1 inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-labelColor border-r-white align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status"
        >
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
      </ul>
    );
  }

  return (
    <>
      {chatList?.length ? (
        <ul className="flex flex-col w-full h-full px-8 overflow-auto flex-3">
          {chatList.map((chat) => (
            <ChatItem key={chat.roomId} onClick={() => handleExit(chat.roomId)} {...chat} />
          ))}
        </ul>
      ) : (
        <main className="flex items-center justify-center mt-20">
          <NoChatListData />
        </main>
      )}
    </>
  );
}

export default ChatList;
