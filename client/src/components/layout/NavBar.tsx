import { Link } from 'react-router-dom';
import { useModal } from 'hooks/useModal';
import { usePostLogout } from 'hooks/api/usePostLogout';
import { ReactComponent as MenuIcon } from 'assets/icons/menu_icon.svg';
import { ReactComponent as CloseIcon } from 'assets/icons/close_icon.svg';

export const NavBar = () => {
  const { isModalOpen, handleToggleBtn } = useModal();
  const { postLogoutFn } = usePostLogout();

  const handleLogout = () => {
    postLogoutFn();
  };

  const PAGE_LIST = [
    { to: '/discover', name: '좋아요' },
    { to: '/chat-list', name: '메세지' },
    { to: '/profile', name: '프로필' },
  ];

  return (
    <nav className="relative flex items-center justify-between px-6 py-3 border-b border-black/10 h-14">
      <Link to="/discover">
        <h4 className="text-[1.7rem] font-bold font-Lobster text-redAmaranth">blind</h4>
      </Link>
      <button aria-label="nav bar 열기" onClick={handleToggleBtn}>
        {isModalOpen ? <CloseIcon /> : <MenuIcon />}
      </button>
      {isModalOpen && (
        <section className="absolute top-[56px] right-0 left-0 bg-white h-[100vh] w-full px-6 z-50">
          <ul
            className="flex flex-col gap-8 py-8 font-semibold text-nightRider/80 font-NotoSans"
            onClick={handleToggleBtn}
          >
            {PAGE_LIST.map((page) => (
              <Link key={page.to} to={page.to}>
                <li>{page.name}</li>
              </Link>
            ))}
          </ul>

          <ul className="py-6 font-semibold border-t border-black/10 text-grayIsh font-NotoSans">
            <li>
              <button onClick={handleLogout}>로그아웃</button>
            </li>
          </ul>
        </section>
      )}
    </nav>
  );
};
