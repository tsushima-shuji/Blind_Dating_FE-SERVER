import { selector } from 'recoil';
import { interestState } from './atoms';

export const interestCountState = selector({
  key: 'interestCountState',
  get: ({ get }) => {
    const selectedInterests = get(interestState);

    return selectedInterests.length;
  },
});
