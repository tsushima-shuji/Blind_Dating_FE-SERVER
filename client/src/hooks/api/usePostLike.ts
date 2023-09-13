import { useMutation } from '@tanstack/react-query';
import { axiosWithAuth } from 'apis/axiosClient';
import { AxiosError } from 'axios';

type ApiResponse = {
  status: string;
  message: string;
  data: boolean;
};

const postLikeFetcher = async (userId: number): Promise<ApiResponse> => {
  const { data } = await axiosWithAuth.post('api/like', { receiverId: `${userId}` });
  return data;
};

export const usePostLike = () => {
  const { mutate: postLikeFn, isLoading } = useMutation<ApiResponse, AxiosError, number>(
    postLikeFetcher,
    {
      onSuccess: () => {},
      onError: (error) => {
        alert(error.message);
      },
    }
  );

  return { postLikeFn, isLoading };
};
