import { useState } from 'react';
import { ReactComponent as Cards } from 'assets/icons/cards.svg';
import { ReactComponent as Likes } from 'assets/icons/likes.svg';
import { ReactComponent as Messages } from 'assets/icons/messages.svg';
import { ReactComponent as User } from 'assets/icons/user.svg';
import { Link } from 'react-router-dom';
import { FooterBtn } from './FooterBtn';

type footerType = 'Cards' | 'Likes' | 'Messages' | 'User';

function Footer() {
  const [selectedBtn, setSelectedBtn] = useState<footerType>('Cards');

  const handleBtnClick = (btnName: footerType) => {
    setSelectedBtn(() => btnName);
  };

  return (
    <footer className="flex justify-around flex-none pb-8 mt-8 bg-whiteLilac">
      <Link to="/discover">
        <FooterBtn
          icon={<Cards />}
          isSelected={selectedBtn === 'Cards'}
          fill={selectedBtn === 'Cards' ? '#E94057' : '#ADAFBB'}
          onClick={() => handleBtnClick('Cards')}
        />
      </Link>

      <FooterBtn
        icon={<Likes />}
        isSelected={selectedBtn === 'Likes'}
        fill={selectedBtn === 'Likes' ? '#E94057' : '#ADAFBB'}
        onClick={() => handleBtnClick('Likes')}
      />

      <Link to="/chat-list">
        <FooterBtn
          icon={<Messages />}
          isSelected={selectedBtn === 'Messages'}
          fill={selectedBtn === 'Messages' ? '#E94057' : '#ADAFBB'}
          onClick={() => handleBtnClick('Messages')}
        />
      </Link>

      <Link to="/profile">
        <FooterBtn
          icon={<User />}
          isSelected={selectedBtn === 'User'}
          fill={selectedBtn === 'User' ? '#E94057' : '#ADAFBB'}
          onClick={() => handleBtnClick('User')}
        />
      </Link>
    </footer>
  );
}

export default Footer;
