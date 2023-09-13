import Layout from 'components/layout/Layout';
import UserDetailFields from 'components/profile/detail/DetailFields';
import UserInfo from 'components/profile/UserInfo';
import UserInfoEditBtn from 'components/profile/UserInfoEditBtn';
import { usePostEditProfile } from 'hooks/api/usePostEditProfile';
import { useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { userState } from 'recoil/user/atoms';

export type UserInfo = {
  region: string;
  mbti: string;
  selfIntroduction: string;
  interests: string[];
};

const ProfilePage = () => {
  const userInfo = useRecoilValue(userState);
  const { mutate } = usePostEditProfile();
  const [values, setValues] = useState<UserInfo>({
    region: userInfo.region,
    mbti: userInfo.mbti,
    selfIntroduction: userInfo.selfIntroduction,
    interests: userInfo.interests?.map((interest) => interest.interestName),
  });
  const setUserState = useSetRecoilState(userState);

  const handleValueChange = (field: string, value: string | string[]) => {
    const selectedValue = value.length === 1 ? value[0] : value;
    setValues((prev) => ({ ...prev, [field]: selectedValue }));
  };

  const handleSubmit = () => {
    mutate(values);
    const convertInterests = values.interests.map((name, id) => ({ id, interestName: name }));
    setUserState((prev) => ({ ...prev, ...values, interests: convertInterests }));
  };

  return (
    <Layout title="My Page">
      <main className="flex-auto">
        <UserInfo nickname={userInfo.userName} id={userInfo.userId} />
        <UserDetailFields
          onChange={handleValueChange}
          selfIntroduction={userInfo.selfIntroduction}
          interests={userInfo.interests?.map((interest) => interest.interestName)}
          region={userInfo.region}
          mbti={userInfo.mbti}
          values={values}
        />
        <UserInfoEditBtn onSubmit={handleSubmit} />
      </main>
    </Layout>
  );
};

export default ProfilePage;
