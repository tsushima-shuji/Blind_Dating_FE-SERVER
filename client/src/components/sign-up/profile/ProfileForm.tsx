import React, { useState } from 'react';
import InputField from 'components/sign-up/profile/InputField';
import { useHookForm } from 'hooks/useHookForm';
import { SubmitHandler } from 'react-hook-form';
import { SignUpAllValues } from 'pages/SignUpPage';
import { usePostCheckNickname } from 'hooks/api/usePostCheckNickname';
import { usePostCheckId } from 'hooks/api/usePostCheckId';
import { Header } from 'components/layout/auth-layout/Header';

type Props = {
  onNext: () => void;
  setSignUpAllValues: React.Dispatch<React.SetStateAction<SignUpAllValues>>;
};

export type SignUpFormValues = {
  userId: string;
  nickname: string;
  userPassword: string;
  passwordCheck?: string;
};

export const ProfileForm = ({ onNext, setSignUpAllValues }: Props) => {
  const [duplicatedId, setDuplicatedId] = useState<string>('');
  const [isDuplicatedId, setIsDuplicatedId] = useState<boolean>(false);
  const [duplicatedNickname, setDuplicatedNickname] = useState<string>('');
  const [isDuplicatedNickname, setIsDuplicatedNickname] = useState<boolean>(false);

  const { register, handleSubmit, errors, watch } = useHookForm<SignUpFormValues>();
  const { postCheckIdFn } = usePostCheckId(setIsDuplicatedId);
  const { postCheckNicknameFn } = usePostCheckNickname(setIsDuplicatedNickname);

  const userPassword = watch('userPassword');
  const userId = watch('userId');
  const userNickname = watch('nickname');

  const onSubmit: SubmitHandler<SignUpFormValues> = (signUpFormValues) => {
    if (!isDuplicatedId) return alert('아이디 중복체크를 해주세요');
    if (!isDuplicatedNickname) return alert('닉네임 중복체크를 해주세요');
    if (duplicatedId !== userId) {
      setIsDuplicatedId(false);
      return alert('아이디를 다시 중복체크를 해주세요');
    }
    if (duplicatedNickname !== userNickname) {
      setIsDuplicatedNickname(false);
      return alert('닉네임을 다시 중복체크를 해주세요');
    }

    delete signUpFormValues.passwordCheck;

    setSignUpAllValues(signUpFormValues);
    onNext();
  };

  const handleCheckId = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const regex = /^[A-Za-z0-9가-힣]{5,20}$/;

    if (userId === undefined) {
      alert('아이디를 입력해주세요.');
      return;
    }

    if (userId.length < 5) {
      alert('아이디는 최소 5글자 이상입니다.');
      return;
    }

    if (!regex.test(userId)) {
      alert('아이디는 영문 대소문자, 글자 단위 한글, 숫자만 가능합니다.');
      return;
    }
    setDuplicatedId(userId);
    postCheckIdFn(userId);
  };

  const handleNickname = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const regex = /^[A-Za-z0-9가-힣]{5,20}$/;

    if (userNickname === undefined) {
      alert('닉네임을 입력해주세요.');
      return;
    }

    if (userNickname.length < 2) {
      alert('닉네임은 최소 2글자 이상입니다.');
      return;
    }

    if (!regex.test(userNickname)) {
      alert('닉네임은 영문 대소문자, 글자 단위 한글, 숫자만 가능합니다.');
      return;
    }

    setDuplicatedNickname(userNickname);
    postCheckNicknameFn(userNickname);
  };

  return (
    <div className="w-full h-full">
      <Header progressWidth="1/5" title="Profile" />

      <p className="w-full pr-16 mt-3 font-medium text-s h-9 pl-11 text-grayIsh">
        닉네임은 상대방에게 보이는 이름으로 사용됩니다.
      </p>

      <main className="pb-5 mt-10 px-9">
        <form
          className="flex flex-col items-center justify-between w-full"
          onSubmit={handleSubmit(onSubmit)}
        >
          <main className="h-[480px] space-y-2">
            <section className="flex items-center justify-around gap-3">
              <InputField
                className="input-md"
                type="text"
                label="아이디"
                id="userId"
                placeholder="id"
                autoFocus={true}
                error={errors.userId?.message}
                message="5~20글자, 영문 대소문자, 한글, 숫자"
                register={register}
                rules={{
                  required: '아이디를 입력해주세요',
                  maxLength: { value: 20, message: '20글자 이하 입력해주세요' },
                  minLength: {
                    value: 5,
                    message: '5글자 이상 입력해주세요',
                  },
                  pattern: {
                    value: /^[A-za-z0-9가-힣]{5,20}$/,
                    message: '가능한 문자: 영문 대소문자, 한글, 숫자',
                  },
                }}
              />
              <button
                className={`mt-3 mb-6 btn-check ${isDuplicatedId ? 'btn-checkSuccess' : ''}`}
                onClick={handleCheckId}
                disabled={!!errors?.userId}
              >
                {isDuplicatedId ? '확인' : '중복확인'}
              </button>
            </section>

            <section className="flex items-center justify-between gap-3">
              <InputField
                className="input-md"
                type="text"
                id="nickname"
                label="닉네임"
                register={register}
                placeholder="nickname"
                error={errors.nickname?.message}
                message="2~20글자, 영문 대소문자, 한글, 숫자"
                rules={{
                  required: '닉네임을 입력해주세요',
                  maxLength: { value: 20, message: '20글자 이하 입력해주세요' },
                  minLength: {
                    value: 3,
                    message: '3글자 이상 입력해주세요',
                  },
                  pattern: {
                    value: /^[A-za-z0-9가-힣]{3,20}$/,
                    message: '가능한 문자: 영문 대소문자, 한글, 숫자',
                  },
                }}
              />

              <button
                className={`mt-3 mb-6  btn-check ${isDuplicatedNickname ? 'btn-checkSuccess' : ''}`}
                onClick={handleNickname}
                disabled={!!errors?.nickname}
              >
                {isDuplicatedNickname ? '확인' : '중복확인'}
              </button>
            </section>

            <div className="flex flex-col items-start gap-3">
              <section>
                <InputField
                  className="input-md"
                  type="password"
                  id="userPassword"
                  label="비밀번호"
                  placeholder="********"
                  error={errors.userPassword?.message}
                  message="8~20글자, 모든 문자 가능"
                  register={register}
                  rules={{
                    required: '비밀번호를 입력해주세요',
                    maxLength: { value: 20, message: '20글자 이하 입력해주세요' },
                    minLength: {
                      value: 8,
                      message: '8글자 이상 입력해주세요',
                    },
                    pattern: {
                      value: /^[A-Za-z0-9가-힣!@#$%^&*()\-_=+\\|[\]{};:'",.<>?/]{8,20}$/,
                      message: '가능한 문자: 특수문자, 영문 대소문자, 한글, 숫자',
                    },
                  }}
                />
              </section>

              <section>
                <InputField
                  className="input-md"
                  type="password"
                  id="passwordCheck"
                  label="비밀번호 확인"
                  register={register}
                  error={errors.passwordCheck?.message}
                  placeholder="********"
                  rules={{
                    required: '비밀번호를 다시 입력해주세요',
                    validate: (passwordCheck) =>
                      passwordCheck === userPassword || '비밀번호가 일치하지 않습니다',
                  }}
                />
              </section>
            </div>
          </main>

          <button className="mt-14 btn-red-checkSuccess">Continue</button>
        </form>
      </main>
    </div>
  );
};
