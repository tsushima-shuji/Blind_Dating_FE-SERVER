import { useMutation, useQueryClient } from '@tanstack/react-query';
import { axiosWithAuth } from 'apis/axiosClient';
import { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';

type ApiResponse = {
  status: string;
  message: string;
  data: boolean;
};

const postLogout = async (): Promise<ApiResponse> => await axiosWithAuth.post('api/logout');

export const usePostLogout = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: postLogoutFn } = useMutation<ApiResponse, AxiosError>(postLogout, {
    onSuccess: () => {
      queryClient.removeQueries();
      navigate('/');
    },
    onError: (err: Error) => {
      alert(err.message);
    },
  });

  return { postLogoutFn };
};
