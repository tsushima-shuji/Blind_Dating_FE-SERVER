import {
  useForm,
  FieldValues,
  UseFormRegister,
  UseFormWatch,
  FieldErrors,
  SubmitHandler,
} from 'react-hook-form';

type UseHookFormReturnType<T extends FieldValues> = {
  register: UseFormRegister<T>;
  handleSubmit: (onValid: SubmitHandler<T>) => (e?: React.BaseSyntheticEvent) => Promise<void>;
  errors: FieldErrors<T>;
  watch: UseFormWatch<T>;
};

export const useHookForm = <T extends FieldValues>(): UseHookFormReturnType<T> => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<T>();

  return { register, handleSubmit, errors, watch };
};
