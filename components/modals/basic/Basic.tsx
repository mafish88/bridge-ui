import Modal from "../../ui/modal";
import {
  ModalsActionsEnum,
  useModalsDispatch,
  useModalsStore,
} from "../../../context/modal";

export const Basic = () => {
  const {
    basic: { open, title, content },
  } = useModalsStore();
  const dispatchModals = useModalsDispatch();

  const closeModal = () => {
    dispatchModals({
      type: ModalsActionsEnum.SHOW_BASIC,
      payload: {
        open: false,
        title: "",
        content: null,
      },
    });
  };

  return (
    <Modal title={title} isOpen={open} showCancel closeModal={closeModal}>
      {content}
    </Modal>
  );
};
