import { useState } from 'react';

type ModalHookReturnType = {
  isModalOpen: boolean;
  handleToggleModal: (e: React.MouseEvent<HTMLButtonElement>) => void;
  handleToggleBtn: () => void;
};

export const useModal = (): ModalHookReturnType => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  /* 이벤트 전파 x ver */
  const handleToggleModal = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (e.target === e.currentTarget) {
      setIsModalOpen((prevIsModalOpen) => !prevIsModalOpen);
    }
  };

  /* 이벤트 전파 o ver */
  const handleToggleBtn = () => {
    setIsModalOpen((prevIsModalOpen) => !prevIsModalOpen);
  };

  return { isModalOpen, handleToggleModal, handleToggleBtn };
};
