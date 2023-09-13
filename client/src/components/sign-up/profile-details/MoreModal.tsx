import { CheckFormValues } from 'components/sign-up/profile-details/ProfileDetailsForm';
import { useModal } from 'hooks/useModal';
import React, { useState } from 'react';

type Props = {
  name: string;
  tags: string[];
  title: string;
  selectableCount?: number | 1;
  setCollectValues: React.Dispatch<React.SetStateAction<CheckFormValues>>;
};

export const MoreModal = (props: Props) => {
  const { name, tags, title, selectableCount = 1, setCollectValues } = props;

  const [clickedValue, setClickedValue] = useState<string[]>([]);
  const { isModalOpen, handleToggleModal } = useModal();

  const handleClickedValue = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { value } = e.currentTarget;

    if (selectableCount > 1 && clickedValue.length < selectableCount) {
      setClickedValue((prev) => [...prev, value]);
    } else setClickedValue([value]);
  };

  const handleConfirm = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (selectableCount === 1) {
      const [singleValue] = clickedValue;
      setCollectValues((prev) => ({ ...prev, [name]: singleValue }));
    } else {
      setCollectValues((prev) => ({ ...prev, [name]: clickedValue }));
    }
    handleToggleModal(e);
  };

  return (
    <>
      {isModalOpen && (
        <div className="absolute inset-0 bg-black bg-opacity-50 z-1 backdrop-blur-sm modal-overlay">
          <div className="modal-container my-auto  fixed w-[375px] h-[700px] px-10 py-20 -translate-x-1/2 -translate-y-1/2 bg-white border top-1/2 left-1/2 z-1 rounded-2xl">
            <div className="flex flex-col items-center justify-center gap-10 ">
              <header>
                <h1 className="text-lg font-bold font-Lora">{title}</h1>
              </header>

              <main className="flex flex-wrap justify-center overflow-auto max-h-[400px]">
                {tags.map((tag) => {
                  return (
                    <button
                      className={`m-1 ${clickedValue.includes(tag) ? 'tag-selected' : 'tag'} `}
                      key={tag}
                      type="button"
                      value={tag}
                      onClick={handleClickedValue}
                    >
                      {tag}
                    </button>
                  );
                })}
              </main>

              <button
                className={`${
                  clickedValue.length == selectableCount ? 'btn-red-checkSuccess' : 'btn-red'
                }`}
                type="button"
                onClick={handleConfirm}
                disabled={clickedValue.length !== selectableCount}
              >
                확인
              </button>
            </div>
          </div>
        </div>
      )}
      <button className="tag" type="button" onClick={handleToggleModal}>
        보기
      </button>
    </>
  );
};
