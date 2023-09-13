import { FieldValues, Path, RegisterOptions, UseFormRegister } from 'react-hook-form';

type InputProps<T extends FieldValues> = {
  className: string;
  id: Path<T>;
  label?: string;
  placeholder: string;
  type: string;
  register: UseFormRegister<T>;
  rules?: RegisterOptions;
  error?: string;
  autoFocus?: boolean;
  message?: string;
};

const InputField = <T extends FieldValues>({
  id,
  label,
  placeholder,
  type,
  className,
  register,
  rules,
  error,
  autoFocus,
  message,
}: InputProps<T>) => {
  return (
    <div className="flex flex-col mb-1.5">
      <label className="mb-1.5 pl-2  text-black/60 label font-medium" htmlFor={id}>
        {label}
      </label>
      <input
        className={className}
        type={type}
        id={id}
        placeholder={placeholder}
        autoFocus={autoFocus}
        {...register(id, rules)}
      />
      {error ? (
        <p className="pt-1.5 pl-2 text-ss font-NotoSans text-redAmaranth">{error}</p>
      ) : (
        <p className="pt-1.5 pl-2 text-ss font-NotoSans text-labelColor">{message}</p>
      )}
    </div>
  );
};

export default InputField;
