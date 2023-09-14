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
  const { data, isLoading, isSuccess, hasNextPage, refetch } = useGetRecommendedUserList();

  useEffect(() => {
    if (data) {
      setCurrentUserIndex(0);
    }
  }, [isSuccess, isLoading, data]);

  if (isLoading) return <LoadingSpinner />;

  if (!data || !data.pages[0]?.data?.content || !data.pages[0].data.content[currentUserIndex])
    return <NoUserListData />;

  const dataPath = data.pages[0].data;

  return (
    <>
      {dataPath.content[currentUserIndex] && (
        <>
          <RecommendedUserCard {...dataPath.content[currentUserIndex]} />
          <LikeDisLikeBox
            userId={dataPath.content[currentUserIndex].id}
            currentUserIndex={currentUserIndex}
            setCurrentUserIndex={setCurrentUserIndex}
            hasNextPage={hasNextPage}
            refetch={refetch}
          />
        </>
      )}
    </>
  );
}

export default DiscoverUser;
