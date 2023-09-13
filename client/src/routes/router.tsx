import App from 'App';
import { createBrowserRouter } from 'react-router-dom';
import LoginPage from 'pages/LoginPage';
import SignUpPage from 'pages/SignUpPage';
import DiscoverPage from 'pages/DiscoverPage';
import ChatListPage from 'pages/ChatListPage';
import ChatPage from 'pages/ChatPage';
import ProfilePage from 'pages/ProfilePage';
import { ProtectedRouter } from './ProtectedRouter';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <LoginPage /> },
      { path: '/signup', element: <SignUpPage /> },
      {
        element: <ProtectedRouter />,
        children: [
          { path: '/discover', element: <DiscoverPage /> },
          { path: '/chat-list', element: <ChatListPage /> },
          { path: '/chat-list/:chatId', element: <ChatPage /> },
          { path: '/profile', element: <ProfilePage /> },
        ],
      },
    ],
  },
]);

export default router;
