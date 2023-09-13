import { useRecoilValue } from 'recoil';
import ChatMessageItem from './ChatMessageItem';
import { chatDataState } from 'recoil/chat/atoms';
import { userState } from 'recoil/user/atoms';

const ChatMessageDate = ({ date }: { date: string }) => {
  return (
    <li className="my-2">
      <div className="relative text-center">
        <hr className="absolute left-0 w-full border-t border-whiteLilac bottom-1/2" />
        <span className="relative z-10 p-2 text-xs bg-white text-labelColor">
          {date.slice(0, 12)}
        </span>
      </div>
    </li>
  );
};

type Props = {
  scrollRef: React.RefObject<HTMLDivElement>;
  sectionRef: React.RefObject<HTMLElement>;
};

const ChatMessages = ({ scrollRef, sectionRef }: Props) => {
  const messages = useRecoilValue(chatDataState);
  const { userId } = useRecoilValue(userState);

  const messageDates: string[] = [];
  const dataWithDate = [];

  for (let i = messages.length - 1; i >= 0; i--) {
    const created = new Date(messages[i].createdAt).toLocaleString();
    if (messageDates[messageDates.length - 1] !== created.slice(0, 11)) {
      messageDates.push(created.slice(0, 11));
      dataWithDate.push(<ChatMessageDate key={messages[i].createdAt} date={created} />);
    }
    dataWithDate.push(
      <ChatMessageItem id={+messages[i].id} message={messages[i].message} writerId={+messages[i].writerId} key={messages[i].id} user={userId} created={created} {...messages[i]} />
    );
  }

  return (
    <section className="px-10 py-2.5 flex-1 w-full h-[70%] overflow-auto" ref={sectionRef}>
      <div ref={scrollRef} />
      <ul className="grid grid-cols-1 gap-2 ">{dataWithDate}</ul>
    </section>
  );
};

export default ChatMessages;
