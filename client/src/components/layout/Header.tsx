import ChatSettingBtn from 'components/chat-list/ChatSettingBtn';

type Props = {
  title: string;
};

const Header = ({ title }: Props) => {
  return (
    <header className="hidden pt-6 pb-8 pl-8 pr-6 sm:flex sm:items-center sm:justify-between">
      <h1 className="text-2xl font-bold font-Lora">{title}</h1>
      {title === 'Messages' && <ChatSettingBtn />}
    </header>
  );
};

export default Header;
