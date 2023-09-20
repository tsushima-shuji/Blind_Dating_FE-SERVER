import ChatSettingBtn from 'components/chat-list/ChatSettingBtn';

type Props = {
  title: string;
};

const Header = ({ title }: Props) => {
  return (
    <header className="items-center justify-between hidden mt-4 mb-10 ml-10 mr-4 sm:flex">
      <h1 className="text-2xl font-bold font-Lora">{title}</h1>
      {title === 'Messages' && <ChatSettingBtn />}
    </header>
  );
};

export default Header;
