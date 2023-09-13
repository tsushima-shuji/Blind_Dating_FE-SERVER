import { useModal } from 'hooks/useModal';
import { DetailField } from './DetailField';
import { Interests, Question } from 'recoil/user/atoms';
import { ReactComponent as ArrowRight } from 'assets/icons/Arrow_Right.svg';

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
  const { nickname, region, mbti, interests, questions, selfIntroduction } = userInfo;
  const { isModalOpen, handleToggleBtn } = useModal();
  const interestsSort = interests.sort((cur, next) => cur.id - next.id);

  return (
    <>
      {isModalOpen ? (
        <main className="h-[30rem] w-80 rounded-xl border-2 border-redAmaranth/90  bg-white shadow-3xl">
          <section className="flex justify-end pt-3 pr-2 mb-3">
            <button type="button" className="flex items-center" onClick={handleToggleBtn}>
              <div className="font-bold text-nightRider text-s font-NotoSans">Back </div>
              <ArrowRight />
            </button>
          </section>

          <section className="px-5 overflow-auto h-5/6">
            <DetailField answer={questions} />
          </section>
        </main>
      ) : (
        <main className="h-[30rem] w-80 rounded-xl border-2 border-redAmaranth/90  bg-redAmaranth/90 shadow-3xl">
          <section className="flex justify-end pt-3 pr-2">
            <button type="button" className="flex items-center" onClick={handleToggleBtn}>
              <div className="font-bold text-s text-nightRider font-NotoSans">More </div>
              <ArrowRight />
            </button>
          </section>

          <header className="flex justify-between w-full px-8 pt-3 mb-6">
            <div>
              <p className="text-xl font-bold text-white font-Lora">{nickname}</p>
              <p>
                <span className="text-sm text-white font-Lora ">#{region}</span>{' '}
                <span className="text-sm text-white font-Lora ">#{mbti}</span>
              </p>
            </div>

            <div className="flex items-center justify-center text-lg font-bold bg-white rounded-full shadow-3xl w-14 h-14"></div>
          </header>

          <section className="flex flex-col w-full h-64 gap-3 px-8 mb-4 whitespace-normal ">
            <p className="text-base font-semibold text-white font-Lora ">about</p>
            <pre className="h-full overflow-y-auto font-medium text-white break-words whitespace-pre-wrap text-s font-Lora no-scrollbar">
              {selfIntroduction}
            </pre>
          </section>

          <section className="px-8">
            <p className="text-sm font-bold text-white font-Lora ">제 관심사는</p>
            {interestsSort.map((interest) => {
              return (
                <span className="text-sm font-bold text-white font-Lora " key={interest.id}>
                  {interest.interestName}{' '}
                </span>
              );
            })}
            <span className="text-sm font-bold text-white font-Lora ">입니다.</span>
          </section>
        </main>
      )}
    </>
  );
};
