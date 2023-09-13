import { Tags } from './TagsModal';

type Props = {
  data: string[] | Tags['name'][];
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  condition: (tagName: string) => boolean;
};
const TagButton = (props: Props) => {
  const { data, onClick, condition } = props;

  return (
    <>
      {data.map((tag: string | Tags['name']) => {
        const tagName = tag as string;
        return (
          <button
            type="button"
            className={`m-1 ${condition(tagName) ? 'tag-selected' : 'tag'}`}
            key={tagName}
            value={tagName}
            onClick={onClick}
          >
            {tagName}
          </button>
        );
      })}
    </>
  );
};

export default TagButton;
