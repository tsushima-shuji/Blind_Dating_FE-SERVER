import { useQuery } from '@tanstack/react-query';
import { axiosWithAuth } from 'apis/axiosClient';

const fetchChatRooms = async () => {
  const { data } = await axiosWithAuth.get(`api/chatroom`);
  return data;
};

export const useGetChatRooms = () => {
  const { isLoading, isError, data, isSuccess } = useQuery(['rooms'], fetchChatRooms);
  return { isLoading, isError, data, isSuccess };
};
