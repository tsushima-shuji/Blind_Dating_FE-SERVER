import Layout from 'components/layout/Layout';
import { LikeDisLikeBox } from 'components/discover/LikeDisLikeBox';
import { RecommendedUserCard } from 'components/discover/RecommendedUserCard';
import { useGetRecommendedUserList } from 'hooks/api/useGetRecommendedUserList';
import { useEffect, useState } from 'react';
import { Interests, Question } from 'recoil/user/atoms';

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

function DiscoverPage() {
  const [currentUserIndex, setCurrentUserIndex] = useState<number>(0);
  const { data, isLoading, isSuccess, refetch } = useGetRecommendedUserList();

  useEffect(() => {
    if (data) {
      setCurrentUserIndex(0);
    }
  }, [isSuccess, isLoading, data]);

  if (!data || !data.pages[0]?.data?.content || !data.pages[0].data.content[currentUserIndex])
    return (
      <Layout title="Discover">
        <main className="flex flex-auto">유저 데이터 없습니다.</main>
      </Layout>
    );

  if (isLoading)
    return (
      <Layout title="Discover">
        <main className="flex flex-auto">데이터 로딩중</main>
      </Layout>
    );

  const dataPath = data.pages[0].data;

  return (
    <Layout title="Discover">
      <main className="flex flex-col items-center justify-center flex-auto">
        {dataPath.content[currentUserIndex] && (
          <>
            <RecommendedUserCard {...dataPath.content[currentUserIndex]} />
            <LikeDisLikeBox
              userId={dataPath.content[currentUserIndex].id}
              currentUserIndex={currentUserIndex}
              setCurrentUserIndex={setCurrentUserIndex}
              refetch={refetch}
              dataLength={dataPath.content.length}
            />
          </>
        )}
      </main>
    </Layout>
  );
}

export default DiscoverPage;
