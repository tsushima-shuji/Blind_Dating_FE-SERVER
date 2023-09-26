import { useModal } from 'hooks/useModal';
import { DetailField } from './DetailField';
import { Interests, Question } from 'recoil/user/atoms';
import { useEffect } from 'react';

type Props = {
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

export const RecommendedUserCard = (userInfo: Props) => {
  const { id, nickname, region, mbti, interests, questions, selfIntroduction } = userInfo;
  const { isModalOpen, handleToggleBtn } = useModal();
  const interestsSort = interests.sort((cur, next) => cur.id - next.id);

  useEffect(() => {
    if (isModalOpen) {
      handleToggleBtn();
    }
  }, [id]);

  return (
    <>
      {isModalOpen ? (
        <article className="h-[27rem] sm:h-[30rem] w-full space-y-4 overflow-auto rounded-lg border-2 px-2 pt-2 pb-4 border-redAmaranth/90  bg-white shadow-3xl">
          <section className="flex justify-end ">
            <button type="button" className="flex items-center" onClick={handleToggleBtn}>
              <div className="text-xs font-medium text-nightRider font-NotoSans">{`<< Back`}</div>
            </button>
          </section>

          <section className="h-[90%] px-5 overflow-auto scrollbar">
            <DetailField answer={questions} />
          </section>
        </article>
      ) : (
        <article className="h-[27rem] sm:h-[30rem] w-full rounded-lg border-2 px-2 pt-2 pb-4 border-redAmaranth/90  bg-redAmaranth/90 shadow-3xl">
          <section className="flex justify-end ">
            <button type="button" onClick={handleToggleBtn}>
              <div className="text-xs font-medium text-whiteLilac/80 font-NotoSans">{`More >>`}</div>
            </button>
          </section>

          <header className="flex justify-start w-full gap-4 px-4 pt-2 mb-6">
            <div className="flex items-center justify-center text-lg font-bold bg-white rounded-full shadow-3xl w-14 h-14"></div>

            <div className="pt-2">
              <p className="text-xl font-bold text-white font-Lora">{nickname}</p>
              <p className="mt-[-4px]">
                <span className="font-light text-white text-s font-Lora ">#{region}</span>{' '}
                <span className="font-light text-white text-s font-Lora ">#{mbti}</span>
              </p>
            </div>
          </header>

          <section className="flex flex-col w-full h-[55%] sm:h-[60%] gap-3 mb-4 whitespace-normal px-6 ">
            <p className="text-base font-semibold text-white font-Lora ">about</p>
            <pre className="h-full overflow-y-auto font-medium text-white break-words whitespace-pre-wrap text-s font-Lora no-scrollbar">
              {selfIntroduction}
            </pre>
          </section>

          <section className="px-6">
            <p className="text-sm font-bold text-white font-Lora">제 관심사는</p>
            {interestsSort.map((interest) => {
              return (
                <span className="text-sm font-bold text-white font-Lora " key={interest.id}>
                  {interest.interestName}{' '}
                </span>
              );
            })}
            <span className="text-sm font-bold text-white font-Lora ">입니다.</span>
          </section>
        </article>
      )}
    </>
  );
};
