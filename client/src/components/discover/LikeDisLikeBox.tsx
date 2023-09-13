import React from 'react';
import { ReactComponent as ThumbUp } from 'assets/icons/thumbUp.svg';
import { ReactComponent as ThumbDown } from 'assets/icons/thumbDown.svg';
import { usePostLike } from 'hooks/api/usePostLike';
import { usePostDisLike } from 'hooks/api/usePostDisLike';

type Props = {
  userId: number;
  currentUserIndex: number;
  setCurrentUserIndex: React.Dispatch<React.SetStateAction<number>>;
  hasNextPage: boolean | undefined;
  refetch: () => void;
};

export const LikeDisLikeBox = ({
  userId,
  setCurrentUserIndex,
  currentUserIndex,
  hasNextPage,
  refetch,
}: Props) => {
  const { postLikeFn } = usePostLike();
  const { postDisLikeFn } = usePostDisLike();

  const handleLike = () => {
    if (currentUserIndex === 9) {
      if (hasNextPage) {
        postLikeFn(userId, {
          onSuccess: () => {
            refetch();
          },
        });
      } else {
        postLikeFn(userId);
      }
    } else {
      postLikeFn(userId);
      setCurrentUserIndex(currentUserIndex + 1);
    }
  };

  const handleDisLike = () => {
    if (currentUserIndex === 9) {
      if (hasNextPage) {
        postDisLikeFn(userId, {
          onSuccess: () => {
            refetch();
          },
        });
      } else {
        postDisLikeFn(userId);
      }
    } else {
      postDisLikeFn(userId);
      setCurrentUserIndex(currentUserIndex + 1);
    }
  };
  return (
    <div className="flex justify-center gap-8 mt-8">
      <button className="flex items-center justify-center bg-white rounded-full shadow-3xl w-14 h-14">
        <ThumbDown onClick={handleDisLike} />
      </button>
      <button className="flex items-center justify-center bg-white rounded-full shadow-3xl w-14 h-14 ">
        <ThumbUp onClick={handleLike} />
      </button>
    </div>
  );
};
