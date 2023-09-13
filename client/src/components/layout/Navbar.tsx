import ChatSettingBtn from 'components/chat-list/ChatSettingBtn';
import LogoutBtn from 'components/profile/logout/LogoutBtn';

type Props = {
  title?: string;
};

const Navbar = (props: Props) => {
  const { title } = props;
  return (
    <header className="flex items-center justify-between flex-none my-10 ml-10 mr-4 ">
      <h1 className="text-2xl font-bold font-Lora">{title}</h1>
      {title === 'Messages' && <ChatSettingBtn />}
      {title === 'My Page' && <LogoutBtn />}
    </header>
  );
};

export default Navbar;
