import Layout from 'components/layout/Layout';
import ChatList from 'components/chat-list/ChatList';

function ChatListPage() {
  return (
    <Layout title="Messages">
      <main className="flex-auto h-[70%] ">
        <ChatList />
      </main>
    </Layout>
  );
}

export default ChatListPage;
