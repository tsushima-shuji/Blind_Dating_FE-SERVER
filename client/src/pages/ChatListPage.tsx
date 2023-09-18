import ChatList from 'components/chat-list/ChatList';
import Navbar from 'components/layout/Navbar';

function ChatListPage() {
  return (
    <>
      <Navbar title="Messages" />
      <main className="flex-auto h-[70%] ">
        <ChatList />
      </main>
    </>
  );
}

export default ChatListPage;
