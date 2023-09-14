import { ReactComponent as NoUserList } from 'assets/icons/noUserList.svg';

export const NoUserListData = () => {
  return (
    <div className="pb-10">
      <NoUserList className="mb-12" />
      <p className="mb-3 text-lg font-extrabold text-center font-NotoSans">Search friend’s</p>
      <p className="font-medium text-s text-black/50 font-NotoSans">
        더 이상 추천할 유저가 존재하지 않습니다.
      </p>
    </div>
  );
};
