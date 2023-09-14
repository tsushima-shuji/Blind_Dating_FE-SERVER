import { useInfiniteQuery } from '@tanstack/react-query';
import { axiosWithAuth } from 'apis/axiosClient';

const paginationDataFetcher = async (page: number) => {
  const { data } = await axiosWithAuth.get(`api/user-list?page=${page}`);
  return data;
};

export const useGetRecommendedUserList = () => {
  const { data, isLoading, isSuccess, refetch } = useInfiniteQuery(
    ['recommendedUserList'],
    ({ pageParam = 0 }) => paginationDataFetcher(pageParam),
    {
      getNextPageParam: (currentPage) => {
        const nextPage = currentPage.data.pageNumber + 1;

        return nextPage === currentPage.data.totalPages ? null : nextPage;
      },
    }
  );

  return { data, refetch, isLoading, isSuccess };
};
