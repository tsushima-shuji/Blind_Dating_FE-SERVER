import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useVerityToken } from './../hooks/useVerifyToken';
import { useRecoilValue } from 'recoil';
import { userState } from 'recoil/user/atoms';
import { useQueryClient } from '@tanstack/react-query';
import Layout from 'components/layout/Layout';

export const ProtectedRouter = () => {
  const queryClient = useQueryClient();
  const isAuthenticated = useVerityToken();
  const { hasToken } = useRecoilValue(userState);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated === 'FAILED') {
      queryClient.clear();
      alert('로그인 해주세요');
      navigate('/');
    }
  }, [isAuthenticated]);

  if (!hasToken && isAuthenticated !== 'SUCCESS') return <>로딩 중</>;
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};
