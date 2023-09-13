import { useMutation } from '@tanstack/react-query';
import { axiosClient } from 'apis/axiosClient';
import { SignUpAllValues } from 'pages/SignUpPage';
import { useNavigate } from 'react-router-dom';

type ApiResponse = {
  message: string;
  status: string;
  data: null;
};

const postSignUpFetcher = async (userData: SignUpAllValues): Promise<ApiResponse> => {
  const { data } = await axiosClient.post<ApiResponse>('api/signup', userData);
  return data;
};

export const usePostSignUpData = () => {
  const navigate = useNavigate();

  const { mutate: postSignUpDataFn, isLoading } = useMutation<ApiResponse, Error, SignUpAllValues>(
    postSignUpFetcher,
    {
      onSuccess: (res) => {
        alert(res.message);
        navigate('/');
      },
      onError: (res) => {
        alert(res.message);
      },
    }
  );

  return {
    isLoading,
    postSignUpDataFn,
  };
};
