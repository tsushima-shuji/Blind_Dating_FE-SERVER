import { useMutation } from '@tanstack/react-query';
import { axiosClient, axiosWithAuth } from 'apis/axiosClient';
import { LoginFormValues } from 'components/login/LoginForm';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { Interests, Question, userState } from 'recoil/user/atoms';


type ApiResponse = {
  message: string;
  status: string;
  data: {
    accessToken: string;
    id: number;
    nickname: string;
    region: string;
    mbti: string;
    gender: string;
    interests: Interests[];
    questions: Question[];
    selfIntroduction: string;
  };
};

const postLoginFetcher = async (loginInfo: LoginFormValues): Promise<ApiResponse> => {
  const { data } = await axiosClient.post<ApiResponse>('api/login', loginInfo);
  return data;
};

export const usePostLogin = () => {
  const navigate = useNavigate();
  const setUserState = useSetRecoilState(userState);

  const { mutate: postLoginFn, isLoading } = useMutation<ApiResponse, Error, LoginFormValues>(
    postLoginFetcher,
    {
      onSuccess: (res) => {
        setUserState({
          hasToken: true,
          userId: res.data.id,
          userName: res.data.nickname,
          region: res.data.region,
          mbti: res.data.mbti,
          gender: res.data.gender,
          interests: res.data.interests,
          questions: res.data.questions,
          selfIntroduction: res.data.selfIntroduction,
        });
        axiosWithAuth.defaults.headers['Authorization'] = `Bearer ${res.data.accessToken}`;
        navigate('/discover');
      },
      onError: () => {
        alert('아이디 및 비밀번호를 다시 확인해주세요.');
      },
    }
  );

  return {
    isLoading,
    postLoginFn,
  };
};
