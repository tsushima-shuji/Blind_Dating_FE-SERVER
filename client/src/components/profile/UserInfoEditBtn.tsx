type Props = {
  onSubmit: () => void;
};

const UserInfoEditBtn = ({ onSubmit }: Props) => {
  return (
    <section className="w-full px-8">
      <button
        type="button"
        className="w-full h-12 text-sm font-bold border rounded-xl border-whiteLilac text-redAmaranth hover:border-redAmaranth"
        onClick={onSubmit}
      >
        수정하기
      </button>
    </section>
  );
};

export default UserInfoEditBtn;
