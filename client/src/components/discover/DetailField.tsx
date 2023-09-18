import { QUESTIONS } from 'assets/config';
type Question = {
  id: number;
  status: boolean;
};

type Props = {
  answer: Question[];
};
export const DetailField = ({ answer }: Props) => {
  const answerSort = answer.sort((cur, next) => cur.id - next.id);

  return (
    <section>
      {QUESTIONS.map((question, index) => {
        return (
          <div className="mb-6" key={index}>
            <header className="mb-4 text-s">
              {index + 1}. {question}
            </header>

            <main className="flex justify-center gap-2">
              <button
                className={`${answerSort[index]?.status ? 'btn-YesOrNo-selected' : 'btn-YesOrNo'}`}
              >
                Yes
              </button>
              <button
                className={`${answerSort[index]?.status ? 'btn-YesOrNo' : 'btn-YesOrNo-selected'}`}
              >
                No
              </button>
            </main>
          </div>
        );
      })}
    </section>
  );
};
