import { IMessage } from '@stomp/stompjs';
import { atom } from 'recoil';

export const chatsSettingBtnState = atom<boolean>({
  key: 'chatsSettingBtnState',
  default: false,
});

export const chatDataState = atom<Record<string | number, keyof IMessage>[]>({
  key: 'chatDataState',
  default: [],
});

export const chatListState = atom<Record<string | number, keyof IMessage>[]>({
  key: 'chatListState',
  default: [],
});

export const updatedChatState = atom<boolean>({
  key: 'updatedChatState',
  default: false,
});
