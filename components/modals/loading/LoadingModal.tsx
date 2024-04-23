import {
  ModalsActionsEnum,
  useModalsDispatch,
  useModalsStore,
} from "../../../context/modal";
import Modal from "../../ui/modal";

export const LoadingModal = () => {
  const {
    loading: { open, title, text },
  } = useModalsStore();
  const dispatchModals = useModalsDispatch();

  const closeModal = () => {
    dispatchModals({
      type: ModalsActionsEnum.SHOW_LOADING,
      payload: {
        open: false,
        title,
        text,
      },
    });
  };
  return (
    <Modal title={title} isOpen={open} closeModal={closeModal}>
      <div className="flex flex-col gap-6 h-full">
        {text && text.map((value: string) => <p key={value}>{value}</p>)}
        <div className="flex flex-col items-center justify-center gap-6">
          <span className="loading loading-bars loading-lg"></span>
        </div>
      </div>
    </Modal>
  );
};
