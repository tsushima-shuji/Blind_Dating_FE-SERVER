import { useState } from 'react';

type Props = {
  data: string;
  name: string;
  onFocus: (name: string) => void;
  onChange: (value: string | string[]) => void;
};

const UserIntrodudction = (props: Props) => {
  const { data, onChange, onFocus, name } = props;
  const [textValue, setTextValue] = useState(data);

  return (
    <div>
      <textarea
        className="w-full h-24 p-3 text-sm border outline-none resize-none rounded-xl border-whiteLilac focus:border-labelColor "
        value={textValue}
        required
        minLength={10}
        maxLength={300}
        onFocus={() => onFocus(name)}
        onChange={(e) => {
          setTextValue(e.target.value);
          onChange(e.target.value);
        }}
      />
    </div>
  );
};

export default UserIntrodudction;
