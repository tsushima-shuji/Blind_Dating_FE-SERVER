type Props = {
  onSubmit: () => void;
  isSubmitActive: boolean;
};

const UserInfoEditBtn = (props: Props) => {
  const { isSubmitActive, onSubmit } = props;
  return (
    <section className="w-full px-8">
      <button
        type="button"
        className="w-full h-12 text-sm font-bold transition duration-200 border rounded-xl border-whiteLilac disabled:text-labelColor text-redAmaranth enabled:hover:border-redAmaranth enabled:hover:text-whiteSmoke enabled:hover:bg-redAmaranth"
        onClick={onSubmit}
        disabled={!isSubmitActive}
      >
        수정하기
      </button>
    </section>
  );
};

export default UserInfoEditBtn;
