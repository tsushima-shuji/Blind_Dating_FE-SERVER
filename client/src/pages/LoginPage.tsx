import NoHeaderFooterLayout from 'components/layout/NoHeaderFooterLayout';
import { Link } from 'react-router-dom';
import { useModal } from 'hooks/useModal';
import { LoginForm } from 'components/login/LoginForm';
import facebook from 'assets/icons/facebook.png';
import google from 'assets/icons/google.png';
import apple from 'assets/icons/apple.png';

function LoginPage() {
  const { isModalOpen, handleToggleModal } = useModal();

  return (
    <NoHeaderFooterLayout>
      <header>
        <h1 className="mt-8 font-Lobster text-8xl text-redAmaranth ">blind</h1>
      </header>
      {isModalOpen ? (
        <LoginForm />
      ) : (
        <>
          <Link className="mt-56 text-lg font-bold font-Lora " to="/signup">
            Sign up to continue
          </Link>

          <button
            onClick={handleToggleModal}
            className="hover:shadow-xl transition duration-300 px-8 py-4 mt-6 text-base font-bold text-center rounded-2xl w-[295px] h-14 font-NotoSans text-whiteSmoke bg-redAmaranth"
          >
            Login
          </button>
        </>
      )}

      <div className="border-t border-labelColor w-[300px] mt-16"></div>

      <section className="flex gap-5 mt-8">
        <div className="flex items-center justify-center w-16 h-16 border border-whiteSmoke rounded-2xl">
          <img src={facebook} alt="facebook icon" />
        </div>
        <div className="flex items-center justify-center w-16 h-16 border border-whiteSmoke rounded-2xl">
          <img src={google} alt="google icon" />
        </div>
        <div className="flex items-center justify-center w-16 h-16 border border-whiteSmoke rounded-2xl">
          <img src={apple} alt="apple icon" />
        </div>
      </section>
    </NoHeaderFooterLayout>
  );
}

export default LoginPage;
