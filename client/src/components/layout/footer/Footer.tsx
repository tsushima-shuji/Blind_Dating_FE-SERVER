import { ReactComponent as Cards } from 'assets/icons/cards.svg';
import { ReactComponent as Likes } from 'assets/icons/likes.svg';
import { ReactComponent as Messages } from 'assets/icons/messages.svg';
import { ReactComponent as User } from 'assets/icons/user.svg';
import { Link, useLocation } from 'react-router-dom';
import { FooterBtn } from './FooterBtn';

function Footer() {
  const { pathname } = useLocation();

  return (
    <footer className="flex justify-around pb-5 bg-whiteLilac">
      <Link to="/discover">
        <FooterBtn
          icon={<Cards />}
          isSelected={pathname === '/discover'}
          fill={pathname === '/discover' ? '#E94057' : '#ADAFBB'}
        />
      </Link>

      <Link to="/likes">
        <FooterBtn
          icon={<Likes />}
          isSelected={pathname === '/likes'}
          fill={pathname === '/likes' ? '#E94057' : '#ADAFBB'}
        />
      </Link>

      <Link to="/chat-list">
        <FooterBtn
          icon={<Messages />}
          isSelected={pathname === '/chat-list'}
          fill={pathname === '/chat-list' ? '#E94057' : '#ADAFBB'}
        />
      </Link>

      <Link to="/profile">
        <FooterBtn
          icon={<User />}
          isSelected={pathname === '/profile'}
          fill={pathname === '/profile' ? '#E94057' : '#ADAFBB'}
        />
      </Link>
    </footer>
  );
}

export default Footer;
