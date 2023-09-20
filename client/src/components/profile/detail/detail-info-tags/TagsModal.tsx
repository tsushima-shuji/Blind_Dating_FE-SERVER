import React, { useRef, useState } from 'react';
import { INTERESTINGS_CULTURE, INTERESTINGS_SPORTS, MBTIS, REGIONS } from 'assets/config';
import { ReactComponent as Close } from 'assets/icons/close.svg';
import TagList from './TagList';

export type Tags = {
  [key: string]: {
    title: string;
    data: string[] | Tags['name'][];
  };
};

type Props = {
  title: string;
  onChange: (value: string | string[]) => void;
  onToggleModal: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onToggleBtn: () => void;
};

const DetailInfoTags = (props: Props) => {
  const { title, onChange, onToggleModal, onToggleBtn } = props;
  const [clickedValue, setClickedValue] = useState<string[]>([]);
  const outsideRef = useRef<HTMLDivElement>(null);

  const tags: Tags = {
    region: { title: '지역', data: REGIONS },
    mbti: { title: 'MBTI', data: MBTIS },
    interests: {
      title: '관심사',
      data: [
        { title: '스포츠', data: INTERESTINGS_SPORTS },
        { title: '문화 및 활동', data: INTERESTINGS_CULTURE },
      ],
    },
  };

  const selectableCount = tags[title].data.length > 2 ? 1 : 3;

  const handleClickedValue = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { value } = e.currentTarget;

    if (selectableCount > 1) {
      if (clickedValue.includes(value)) {
        setClickedValue((prev) => prev.filter((prevValue) => prevValue !== value));
      } else {
        if (clickedValue.length < 5) {
          setClickedValue((prev) => [...prev, value]);
        }
      }
    } else setClickedValue([value]);
  };

  const submitBtnCondition =
    tags[title].data.length > 2 ? clickedValue.length == selectableCount : clickedValue.length >= 3;

  const handleClickedOutside = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    const target = e.target as HTMLElement;

    if (outsideRef.current) {
      if (target === outsideRef.current) {
        onToggleBtn();
      }
    }
  };

  return (
    <div
      className="absolute inset-0 bg-black bg-opacity-50 z-1 backdrop-blur-sm modal-overlay"
      ref={outsideRef}
      onClick={handleClickedOutside}
    >
      <div className="modal-container my-auto  fixed w-[375px] h-[700px] px-10 py-20 -translate-x-1/2 -translate-y-1/2 bg-white border top-1/2 left-1/2 z-1 rounded-2xl">
        <div className="flex flex-col items-center justify-center gap-10 ">
          <header>
            <h1 className="text-lg font-bold font-Lora">{tags[title].title}</h1>
          </header>

          <button
            type="button"
            className="absolute w-6 h-6 top-3 right-3 text-black/80 z-3"
            onClick={onToggleBtn}
          >
            <Close />
          </button>

          <main className="flex flex-wrap justify-center overflow-auto max-h-[400px]">
            {tags[title].data.length > 2 ? (
              <>
                <TagList
                  data={tags[title].data}
                  onClick={handleClickedValue}
                  condition={(tagName: string) => clickedValue.includes(tagName)}
                />
              </>
            ) : (
              <>
                {tags[title].data.map((value: string | Tags['name']) => {
                  const { title: tagTitle, data: tagData } = value as Tags['name'];
                  return (
                    <React.Fragment key={tagTitle}>
                      <label
                        className="w-full mb-2 text-sm font-medium text-center font-Lora text-labelColor"
                        htmlFor={tagTitle}
                      >
                        {tagTitle}
                      </label>
                      <TagList
                        data={tagData}
                        onClick={handleClickedValue}
                        condition={(tagName: string) => clickedValue.includes(tagName)}
                      />
                    </React.Fragment>
                  );
                })}
              </>
            )}
          </main>

          <button
            className={`${submitBtnCondition ? 'btn-red-checkSuccess' : 'btn-red'}`}
            type="button"
            onClick={(e) => {
              onToggleModal(e);
              onChange(clickedValue);
            }}
            disabled={!submitBtnCondition}
          >
            확인
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailInfoTags;
