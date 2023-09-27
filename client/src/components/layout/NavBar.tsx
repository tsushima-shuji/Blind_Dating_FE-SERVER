import { useModal } from 'hooks/useModal';
import { Link } from 'react-router-dom';
import { ReactComponent as MenuIcon } from 'assets/icons/menu_icon.svg';
import { ReactComponent as CloseIcon } from 'assets/icons/close_icon.svg';
import { usePostLogout } from 'hooks/api/usePostLogout';

export const NavBar = () => {
  const { isModalOpen, handleToggleBtn } = useModal();
  const { postLogoutFn } = usePostLogout();

  const handleLogout = () => {
    postLogoutFn();
  };
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
            <Link to="/discover">
              <li>좋아요</li>
            </Link>

            <Link to="/chat-list">
              <li>메세지</li>
            </Link>

            <Link to="/profile">
              <li>프로필 </li>
            </Link>
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
