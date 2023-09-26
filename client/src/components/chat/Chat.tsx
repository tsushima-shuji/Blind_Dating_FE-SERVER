import React, { useEffect } from 'react';
import ChatUser from './ChatUser';
import ChatMessages from './ChatMessages';
import ChatForm from './ChatForm';
import useInfiniteScroll from 'hooks/UseInfiniteScroll';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { useQueryClient } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { useGetChatData } from 'hooks/api/useGetChat';
import useHandleChat from 'hooks/api/useHandleChat';
import { chatDataState, updatedChatState } from 'recoil/chat/atoms';
import { userState } from 'recoil/user/atoms';

const Chat = () => {
  const { chatId } = useParams();
  const { userId } = useRecoilValue(userState);
  const { data, isError, isLoading, fetchNextPage, hasNextPage } = useGetChatData(chatId);
  const { connectHandler, disconnectHandler, sendHandler, exitHandler } = useHandleChat();
  const setChatData = useSetRecoilState(chatDataState);
  const queryClient = useQueryClient();
  const chatData = useRecoilValue(chatDataState);
  const setUpdatedChatState = useSetRecoilState(updatedChatState);

  useEffect(() => {
    connectHandler(chatId);

    return () => {
      disconnectHandler();
      queryClient.clear();
      setChatData([]);
    };
  }, []);

  useEffect(() => {
    if (data) {
      const prevChatData = data.pages[data.pages.length - 1].data.chatList;

      if (!chatData.find((chat) => chat.id === prevChatData[0].id)) {
        setChatData((prev) => [...prev, ...prevChatData]);
      }
    }
  }, [data, setChatData]);

  const onIntersect = async (entry: IntersectionObserverEntry, observer: IntersectionObserver) => {
    observer.unobserve(entry.target);
    if (entry.isIntersecting && hasNextPage) {
      setUpdatedChatState(false);
      fetchNextPage();
    }
  };

  const { top, section } = useInfiniteScroll(onIntersect, chatData.length);

  if (isError || isLoading) {
    return <></>;
  }

  const handleMessage = (message: string) => {
    const content = {
      chatRoomId: chatId,
      writerId: userId,
      message,
    };
    sendHandler(content);
  };

  const onDeleteChat = () => {
    exitHandler(chatId);
  };

  return (
    <>
      <ChatUser user={data?.pages[0].data.otherUserNickname} onDelete={onDeleteChat} />
      <ChatMessages scrollRef={top} sectionRef={section} />
      <ChatForm onMessage={handleMessage} roomStatus={data?.pages[0].data.roomStatus} />
    </>
  );
};

export default Chat;
