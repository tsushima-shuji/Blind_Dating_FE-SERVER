import ChatList from 'components/chat-list/ChatList';
import Header from 'components/layout/Header';

function ChatListPage() {
  return (
    <>
      <Header title="Messages" />
      <main className="flex-auto h-[70%] ">
        <ChatList />
      </main>
    </>
  );
}

export default ChatListPage;
