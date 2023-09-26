import Header from 'components/layout/Header';
import Profile from 'components/profile/Profile';

const ProfilePage = () => {
  return (
    <>
      <Header title="My Page" />
      <main className="flex-auto h-[70%] py-10 sm:py-0 overflow-auto">
        <Profile />
      </main>
    </>
  );
};

export default ProfilePage;
