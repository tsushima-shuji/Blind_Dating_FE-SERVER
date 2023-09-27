import { ReactComponent as Cards } from 'assets/icons/cards.svg';
import { ReactComponent as Likes } from 'assets/icons/likes.svg';
import { ReactComponent as Messages } from 'assets/icons/messages.svg';
import { ReactComponent as User } from 'assets/icons/user.svg';
import { Link, useLocation } from 'react-router-dom';
import { FooterBtn } from './FooterBtn';

function Footer() {
  const { pathname } = useLocation();

  const btns = [
    { page: 'discover', icon: <Cards /> },
    { page: 'likes', icon: <Likes /> },
    { page: 'chat-list', icon: <Messages /> },
    { page: 'profile', icon: <User /> },
  ];

  return (
    <footer className="flex justify-around pb-5 bg-whiteLilac">
      {btns.map((btn) => (
        <Link to={`/${btn.page}`}>
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
