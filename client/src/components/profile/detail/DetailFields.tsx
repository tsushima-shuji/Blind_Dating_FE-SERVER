import { useModal } from 'hooks/useModal';
import UserInterests from './Interests/InterestsList';
import UserIntrodudction from './Introduction';
import UserLocationMBTI from './LocationMBTI';

import { useState } from 'react';
import TagsModal from './detail-info-tags/TagsModal';

type Props = {
  interests: string[];
  selfIntroduction: string;
  region: string;
  mbti: string;
  onChange: (field: string, value: string | string[]) => void;
};

type DetailInfo = {
  title: '지역' | 'MBTI' | '관심사' | '자기소개';
  position: 'right' | 'bottom';
  content: React.ReactNode;
};

const UserDetailFields = (props: Props) => {
  const { interests, selfIntroduction, region, mbti, onChange } = props;
  const { isModalOpen, handleToggleModal } = useModal();
  const [clickedField, setClickedField] = useState<string>('');

  const handleFocus = (name: string) => {
    setClickedField(name);
  };

  const handleChangeValue = (value: string | string[]) => {
    onChange(clickedField, value);
  };

  const detailInfo: DetailInfo[] = [
    {
      title: '지역',
      position: 'right',
      content: (
        <UserLocationMBTI
          data={region}
          onToggleModal={handleToggleModal}
          onClick={handleFocus}
          name="region"
        />
      ),
    },
    {
      title: 'MBTI',
      position: 'right',
      content: (
        <UserLocationMBTI
          data={mbti}
          onToggleModal={handleToggleModal}
          onClick={handleFocus}
          name="mbti"
        />
      ),
    },
    {
      title: '관심사',
      position: 'bottom',
      content: (
        <UserInterests
          data={interests}
          name="interests"
          onToggleModal={handleToggleModal}
          onClick={handleFocus}
        />
      ),
    },
    {
      title: '자기소개',
      position: 'bottom',
      content: (
        <UserIntrodudction
          data={selfIntroduction}
          name="selfIntroduction"
          onFocus={handleFocus}
          onChange={handleChangeValue}
        />
      ),
    },
  ];

  return (
    <section>
      <form className="flex flex-col gap-6 px-8 py-6">
        {isModalOpen && (
          <TagsModal
            title={clickedField}
            onChange={handleChangeValue}
            onToggleModal={handleToggleModal}
          />
        )}
        {detailInfo.map((field) => (
          <div
            key={field.title}
            className={`flex ${
              field.position === 'bottom' ? 'flex-col gap-2' : 'justify-between items-center'
            }`}
          >
            <label className="w-20 text-s text-labelColor">{field.title}</label>
            {field.content}
          </div>
        ))}
      </form>
    </section>
  );
};

export default UserDetailFields;
