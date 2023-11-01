import { useInfiniteQuery } from '@tanstack/react-query';
import { axiosWithAuth } from 'apis/axiosClient';
import { Interests, Question } from 'recoil/user/atoms';
type Content = {
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

type ApiResponse = {
  status: string;
  message: string;
  data: { pageNumber: number; totalPages: number; content: Content[] | [] };
};

const paginationDataFetcher = async (page: number): Promise<ApiResponse> => {
  const { data } = await axiosWithAuth.get(`api/user-list?page=${page}`);
  return data;
};

export const useGetRecommendedUserList = () => {
  const { data, isLoading, refetch } = useInfiniteQuery(
    ['recommendedUserList'],
    ({ pageParam = 0 }) => paginationDataFetcher(pageParam),
    {
      getNextPageParam: (currentPage) => {
        const nextPage = currentPage.data.pageNumber + 1;

        return nextPage === currentPage.data.totalPages ? null : nextPage;
      },
      cacheTime: 0,
    }
  );

  return { data, refetch, isLoading };
};
