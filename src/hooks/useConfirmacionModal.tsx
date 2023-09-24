import { useState } from "react";

type ConfirmacionModalHook = {
  modalVisible: boolean;
  showModal: (message: string) => void;
  hideModal: () => void;
};

const useConfirmacionModal = (): ConfirmacionModalHook => {
  const [modalVisible, setModalVisible] = useState(false);
  const [ , setModalMessage] = useState("");
  const [ , setModalCallback] = useState<() => void>(() => {});

  const showModal = (message: string) => {
    setModalMessage(message);
    setModalVisible(true);
  };

  const hideModal = () => {
    setModalMessage("");
    setModalCallback(() => {});
    setModalVisible(false);
  };

  return { modalVisible, showModal, hideModal };
};

export default useConfirmacionModal;
