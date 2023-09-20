import { useState } from 'react';

type Props = {
  data: string;
  name: string;
  isTextareaActive: boolean;
  onToggleTextarea: (name: string) => void;
  onChange: (value: string | string[]) => void;
};

const UserIntrodudction = (props: Props) => {
  const { data, onChange, name, isTextareaActive, onToggleTextarea } = props;
  const [textValue, setTextValue] = useState(data);

  return (
    <>
      {isTextareaActive ? (
        <textarea
          className="w-full h-24 p-3 text-sm border outline-none resize-none rounded-xl border-whiteLilac focus:border-redAmaranth"
          value={textValue}
          required
          minLength={10}
          maxLength={300}
          autoFocus
          onFocus={(e) => {
            const target = e.target as HTMLTextAreaElement;
            target.selectionStart = textValue.length;
          }}
          onChange={(e) => {
            setTextValue(e.target.value);
            onChange(e.target.value);
          }}
        />
      ) : (
        <button
          type="button"
          className="w-full h-24 p-3 text-sm border rounded-xl border-whiteLilac text-start"
          onClick={() => {
            onToggleTextarea(name);
          }}
        >
          <span className="block h-full">{textValue}</span>
        </button>
      )}
    </>
  );
};

export default UserIntrodudction;
