import { useQuery } from '@tanstack/react-query';
import { axiosClient, axiosWithAuth } from 'apis/axiosClient';
import { useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { userState } from 'recoil/user/atoms';

type authType = 'PENDING' | 'SUCCESS' | 'FAILED';

const getRefreshTokenFetcher = async () => {
  const { data } = await axiosClient.get('api/refresh');
  return data;
};

export const useVerityToken = () => {
  const { hasToken } = useRecoilValue(userState);
  const [isAuthenticated, setIsAuthenticated] = useState<authType>('PENDING');

  const setUserState = useSetRecoilState(userState);

  /* 액세스 토큰 만료인지 - 확인용 */
  const verifyResult = useQuery(['auth', 'verify'], getRefreshTokenFetcher, {
    onSuccess: (res) => {
      setUserState({
        hasToken: true,
        userId: res.data.id,
        userAccount: res.data.userId,
        userName: res.data.nickname,
        region: res.data.region,
        mbti: res.data.mbti,
        gender: res.data.gender,
        interests: res.data.interests,
        questions: res.data.questions,
        selfIntroduction: res.data.selfIntroduction,
      });
      axiosWithAuth.defaults.headers['Authorization'] = `Bearer ${res.data.accessToken}`;
      setIsAuthenticated('SUCCESS');
    },
    onError: () => {
      setIsAuthenticated('FAILED');
    },
    retry: 0,
    enabled: !!hasToken,
  });

  /* 리프레쉬 토큰은 있지만, 액세트 토큰 없을 때 - 확인용 */
  const refreshResult = useQuery(['auth', 'refresh'], getRefreshTokenFetcher, {
    onSuccess: (res) => {
      setUserState({
        hasToken: true,
        userId: res.data.id,
        userAccount: res.data.userId,
        userName: res.data.nickname,
        region: res.data.region,
        mbti: res.data.mbti,
        gender: res.data.gender,
        interests: res.data.interests,
        questions: res.data.questions,
        selfIntroduction: res.data.selfIntroduction,
      });
      axiosWithAuth.defaults.headers['Authorization'] = `Bearer ${res.data.accessToken}`;
      setIsAuthenticated('SUCCESS');
    },
    onError: () => {
      setIsAuthenticated('FAILED');
    },
    retry: 0,
    enabled: !hasToken,
  });

  return isAuthenticated;
};
