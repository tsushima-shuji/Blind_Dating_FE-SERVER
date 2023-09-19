import { atom } from 'recoil';

export type Question = {
  id: number;
  status: boolean;
};

export type Interests = {
  id: number;
  interestName: string;
};

export type UserState = {
  hasToken: boolean;
  userId: number;
  userAccount: string;
  userName: string;
  region: string;
  mbti: string;
  gender: string;

  interests: Interests[];

  questions: Question[];
  selfIntroduction: string;
};

export const userState = atom<UserState>({
  key: 'userState',
  default: {
    hasToken: false,
    userId: 0,
    userAccount: '',
    userName: '',
    region: '',
    mbti: '',
    gender: '',
    interests: [],
    questions: [],
    selfIntroduction: '',
  },
});
