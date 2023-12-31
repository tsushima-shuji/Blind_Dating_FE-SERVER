import { LikeDisLikeBox } from 'components/discover/LikeDisLikeBox';
import { RecommendedUserCard } from 'components/discover/RecommendedUserCard';
import { useGetRecommendedUserList } from 'hooks/api/useGetRecommendedUserList';
import { useEffect, useState } from 'react';
import { Interests, Question } from 'recoil/user/atoms';
import { NoUserListData } from 'components/discover/NoUserListData';
import { LoadingSpinner } from 'components/ui/LoadingSpinner';

type UserInfo = {
  id: number;
  userId: string;
  nickname: string;
  region: string;
  mbti: string;
  gender: string;
  interests: Interests[];
  questions: Question[];
  selfIntroduction: string;
};

export type UserList = {
  totalPage: number;
  pageNumber: number;
  content: UserInfo[];
};

function DiscoverUser() {
  const [currentUserIndex, setCurrentUserIndex] = useState<number>(0);
  const { data, isLoading, refetch } = useGetRecommendedUserList();

  useEffect(() => {
    if (data) {
      setCurrentUserIndex(0);
    }
  }, [data]);

  if (isLoading) return <LoadingSpinner />;

  if (!data || !data.pages[0]?.data?.content || !data.pages[0].data.content[currentUserIndex])
    return <NoUserListData />;

  const dataPath = data.pages[0].data;

  return (
    <>
      {dataPath.content[currentUserIndex] && (
        <section className="flex flex-col items-center justify-center w-full h-full gap-3 px-3 sm:justify-start sm:px-0 sm:gap-10 flex-3">
          <RecommendedUserCard {...dataPath.content[currentUserIndex]} />
          <LikeDisLikeBox
            userId={dataPath.content[currentUserIndex].id}
            currentUserIndex={currentUserIndex}
            setCurrentUserIndex={setCurrentUserIndex}
            refetch={refetch}
            dataLength={dataPath.content.length}
          />
        </section>
      )}
    </>
  );
}

export default DiscoverUser;
