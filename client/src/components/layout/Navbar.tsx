import { ReactComponent as MenuIcon } from 'assets/icons/menu_icon.svg';
import { Link } from 'react-router-dom';

export const NavBar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-3 border-b border-black/10 h-14">
      <Link to="/discover">
        <h4 className="text-[1.7rem] font-bold font-Lobster text-redAmaranth">blind</h4>
      </Link>
      <button>
        <MenuIcon />
      </button>
    </nav>
  );
};
