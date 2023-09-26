import AuthLayout from 'components/layout/auth-layout/AuthLayout';
import { Link } from 'react-router-dom';
import { useModal } from 'hooks/useModal';
import { LoginForm } from 'components/login/LoginForm';

function LoginPage() {
  const { isModalOpen, handleToggleModal } = useModal();

  return (
    <AuthLayout>
      <header>
        <h1 className="font-Lobster text-8xl text-redAmaranth ">blind</h1>
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
    </AuthLayout>
  );
}

export default LoginPage;
