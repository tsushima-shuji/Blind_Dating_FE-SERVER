import { useMutation, useQueryClient } from '@tanstack/react-query';
import { axiosWithAuth } from 'apis/axiosClient';
import { UserInfo } from 'components/profile/Profile';

const postEditProfile = async (userInfo: UserInfo) => {
  const { data } = await axiosWithAuth.put('api/user', userInfo);

  return data;
};

export const usePostEditProfile = () => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation(postEditProfile, {
    onSuccess: () => {
      queryClient.invalidateQueries(['profile']);
    },
    onError: (err: Error) => {
      alert(err.message);
    },
  });

  return { mutate };
};
