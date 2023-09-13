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
    userName: '',
    region: '',
    mbti: '',
    gender: '',
    interests: [],
    questions: [],
    selfIntroduction: '',
  },
});
