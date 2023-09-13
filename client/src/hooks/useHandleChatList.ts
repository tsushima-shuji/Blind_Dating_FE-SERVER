import { Stomp } from '@stomp/stompjs';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { chatListState } from 'recoil/chat/atoms';
import { userState } from 'recoil/user/atoms';
import SockJS from 'sockjs-client';

const useHandleChatList = () => {
  const client = Stomp.over(() => new SockJS(`${import.meta.env.VITE_API_ADDRESS}/stomp/chatroom`));
  const setChatList = useSetRecoilState(chatListState);
  const { userId } = useRecoilValue(userState);

  const connectHandler = () => {
    client.connect({}, () => {
      client.subscribe('/sub/chatroom/' + userId, (content) => {
        if (content) {
          const data = JSON.parse(content.body);
          setChatList(data.rooms);
        }
      });
    });
  };

  const disconnectHandler = () => {
    client.disconnect();
  };

  const exitHandler = (roomId: string | undefined) => {
    if (client.connected) {
      client.send(
        '/pub/chat/disconnect',
        {},
        JSON.stringify({ chatRoomId: roomId, writerId: userId })
      );
    } else {
      client.connect({}, () => {
        client.send(
          '/pub/chat/disconnect',
          {},
          JSON.stringify({ chatRoomId: roomId, writerId: userId })
        );
      });
    }
  };

  return { connectHandler, disconnectHandler, exitHandler };
};

export default useHandleChatList;
