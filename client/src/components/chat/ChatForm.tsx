import React, { useState } from 'react';
import { ReactComponent as Send } from 'assets/icons/send.svg';

type Props = {
  onMessage: (message: string) => void;
  roomStatus: boolean;
};

const ChatForm = (props: Props) => {
  const { onMessage, roomStatus } = props;
  const [value, setValue] = useState<string>('');

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.code === 'Enter' && !e.shiftKey && !e.nativeEvent.isComposing) {
      e.preventDefault();
      if (!value.length) {
        return;
      }
      const target = e.target as HTMLTextAreaElement;
      onMessage(target.value);
      setValue('');
    }
  };

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onMessage(value);
    setValue('');
  };

  return (
    <section className="w-full max-h-[15%] px-8 py-8">
      <form className="flex gap-2">
        <textarea
          className="w-full p-2 text-sm border rounded resize-none border-whiteLilac"
          placeholder="your message"
          onKeyDown={handleKeyDown}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          disabled={!roomStatus}
        />
        <button
          type="button"
          className="flex-none px-3 text-white border rounded border-redAmaranth bg-redAmaranth text-s disabled:border-whiteLilac disabled:text-labelColor disabled:bg-white"
          onClick={handleClick}
          disabled={!value.length || !roomStatus}
          aria-label="채팅 전송"
        >
          <Send />
        </button>
      </form>
    </section>
  );
};

export default ChatForm;
