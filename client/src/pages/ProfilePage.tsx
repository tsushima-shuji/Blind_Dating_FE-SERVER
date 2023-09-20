import Header from 'components/layout/Header';
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
  const { region, mbti, selfIntroduction, interests, userName, userAccount } =
    useRecoilValue(userState);
  const { mutate } = usePostEditProfile();
  const [values, setValues] = useState<UserInfo>({
    region,
    mbti,
    selfIntroduction,
    interests: interests.map((interest) => interest.interestName),
  });
  const setUserState = useSetRecoilState(userState);
  const [isTextareaActive, setIsTextareaActive] = useState<boolean>(false);
  const [isSubmitActive, setIsSubmitActive] = useState<boolean>(false);

  const handleValueChange = (field: string, value: string | string[]) => {
    setIsSubmitActive(true);
    const selectedValue = value.length === 1 ? value[0] : value;
    setValues((prev) => ({ ...prev, [field]: selectedValue }));
  };

  const handleSubmit = () => {
    mutate(values);
    const convertInterests = values.interests.map((name, id) => ({ id, interestName: name }));
    setUserState((prev) => ({ ...prev, ...values, interests: convertInterests }));
    setIsSubmitActive(false);
  };

  const handleTextArea = () => {
    setIsTextareaActive(true);
  };

  return (
    <>
      <Header title="My Page" />
      <main className="flex-auto h-[70%] py-10 sm:py-0 overflow-auto">
        <UserInfo nickname={userName} id={userAccount} />
        <UserDetailFields
          onChange={handleValueChange}
          isTextareaActive={isTextareaActive}
          onToggleTextarea={handleTextArea}
          {...values}
        />
        <UserInfoEditBtn
          onSubmit={() => {
            setIsTextareaActive(false);
            handleSubmit();
          }}
          isSubmitActive={isSubmitActive}
        />
      </main>
    </>
  );
};

export default ProfilePage;
