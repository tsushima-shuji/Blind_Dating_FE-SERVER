import { Link, useLocation } from 'react-router-dom';
import { FooterBtn } from './FooterBtn';
import { ReactComponent as Cards } from 'assets/icons/cards.svg';
import { ReactComponent as Likes } from 'assets/icons/likes.svg';
import { ReactComponent as Messages } from 'assets/icons/messages.svg';
import { ReactComponent as User } from 'assets/icons/user.svg';

function Footer() {
  const { pathname } = useLocation();

  const FOOTER_BTNS = [
    { page: 'discover', icon: <Cards /> },
    { page: 'likes', icon: <Likes /> },
    { page: 'chat-list', icon: <Messages /> },
    { page: 'profile', icon: <User /> },
  ];

  return (
    <footer className="flex justify-around pb-5 bg-whiteLilac">
      {FOOTER_BTNS.map((btn) => (
        <Link key={btn.page} to={`/${btn.page}`}>
          <FooterBtn
            icon={btn.icon}
            isSelected={pathname === `/${btn.page}`}
            fill={pathname === `/${btn.page}` ? '#E94057' : '#ADAFBB'}
            label={`${btn.page} 페이지로 이동`}
          />
        </Link>
      ))}
    </footer>
  );
}

export default Footer;
