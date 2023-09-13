const ChatMessageItem = ({ ...props }) => {
  const { message, writerId, user, created } = props;
  return (
    <li
      className={`flex flex-col font-Lora max-w-[80%] ${
        +writerId === +user ? 'justify-self-end ' : 'justify-self-start'
      }`}
    >
      <p
        className={`p-4 text-sm rounded-lg break-all ${
          +writerId === +user
            ? 'bg-whiteSmoke rounded-br-none'
            : 'bg-redAmaranth/10 rounded-bl-none'
        }`}
      >
        {message}
      </p>
      <span className={`text-xs text-labelColor ${writerId === user ? 'text-right' : ''}`}>
        {created.slice(-11, -3)}
      </span>
    </li>
  );
};

export default ChatMessageItem;
