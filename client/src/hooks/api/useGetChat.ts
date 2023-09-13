import { useInfiniteQuery } from '@tanstack/react-query';
import { axiosWithAuth } from 'apis/axiosClient';

type RoomId = string | undefined;
type ChatId = number | undefined;

const fetchChatData = async (roomId: RoomId, chatId: ChatId) => {
  const { data } = await axiosWithAuth.get(`api/chatroom/${roomId}`, {
    params: { chatId: chatId || 0 },
  });

  return {
    data: data.data,
    prevMessageId: data.data.chatList[data.data.chatList.length - 1]?.id - 1,
  };
};

export const useGetChatData = (roomId: RoomId) => {
  const { isLoading, data, isError, fetchNextPage, hasNextPage } = useInfiniteQuery(
    ['chatroom', roomId],
    ({ pageParam }) => fetchChatData(roomId, pageParam),
    {
      getNextPageParam: (lastPage) => {
        if (lastPage.data.chatList.length < 30) {
          return undefined;
        }
        return lastPage.prevMessageId;
      },
    }
  );
  return { isLoading, data, isError, fetchNextPage, hasNextPage };
};
