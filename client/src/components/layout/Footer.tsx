import React from 'react';
import { ReactComponent as Cards } from 'assets/icons/cards.svg';
import { ReactComponent as Likes } from 'assets/icons/likes.svg';
import { ReactComponent as Messages } from 'assets/icons/messages.svg';
import { ReactComponent as User } from 'assets/icons/user.svg';
import { Link } from 'react-router-dom';

const FooterBtn = ({ icon }: { icon: React.ReactNode }) => {
  return (
    <button type="button" className="flex items-center justify-center w-16 h-12">
      {icon}
    </button>
  );
};

function Footer() {
  return (
    <footer className="flex justify-around flex-none pb-8 mt-8 bg-whiteLilac">
      <Link to="/discover">
        <FooterBtn icon={<Cards />} />
      </Link>

      <FooterBtn icon={<Likes />} />

      <Link to="/chat-list">
        <FooterBtn icon={<Messages />} />
      </Link>

      <Link to="/profile">
        <FooterBtn icon={<User />} />
      </Link>
    </footer>
  );
}

export default Footer;
