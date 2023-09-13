import { useMutation } from '@tanstack/react-query';
import { axiosWithAuth } from 'apis/axiosClient';
import { AxiosError } from 'axios';

type ApiResponse = {
  status: string;
  message: string;
  data: boolean;
};

const postDisLikeFetcher = async (userId: number): Promise<ApiResponse> => {
  const { data } = await axiosWithAuth.post('api/unlike', { receiverId: `${userId}` });
  return data;
};

export const usePostDisLike = () => {
  const { mutate: postDisLikeFn, isLoading } = useMutation<ApiResponse, AxiosError, number>(
    postDisLikeFetcher,
    {
      onSuccess: () => {},
      onError: (error) => {
        alert(error.message);
      },
    }
  );

  return { postDisLikeFn, isLoading };
};
