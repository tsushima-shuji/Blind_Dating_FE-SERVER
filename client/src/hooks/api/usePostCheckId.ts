import { useMutation } from '@tanstack/react-query';
import { axiosClient } from 'apis/axiosClient';
import { AxiosError } from 'axios';

type ApiResponse = {
  status: string;
  message: string;
  data: boolean;
};

const postIdCheckFetcher = async (userId: string): Promise<ApiResponse> => {
  const { data } = await axiosClient.post('api/check-userId', { userId: userId });
  return data;
};

export const usePostCheckId = (
  setIsDuplicatedId: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const { mutate: postCheckIdFn, isLoading } = useMutation<ApiResponse, AxiosError, string>(
    postIdCheckFetcher,
    {
      onSuccess: (res) => {
        if (res.data) {
          setIsDuplicatedId(true);
          alert('사용 가능한 아이디입니다.');
        }
        if (!res.data) {
          setIsDuplicatedId(false);
          alert(res.message);
        }
      },
      onError: (error) => {
        alert(error.message);
      },
    }
  );

  return { postCheckIdFn, isLoading };
};
