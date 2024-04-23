import { CheckIcon, CloseIcon, InfoIcon, WarningIcon } from "../../ui/icons";
import Modal from "../../ui/modal";
import {
  ModalsActionsEnum,
  useModalsDispatch,
  useModalsStore,
} from "@/context/modal";

export const Alert = () => {
  const {
    alert: { open, type, message, title },
  } = useModalsStore();
  const dispatchModals = useModalsDispatch();

  const closeModal = () => {
    dispatchModals({
      type: ModalsActionsEnum.SHOW_ALERT,
      payload: {
        open: false,
        type,
        message,
      },
    });
  };

  const alertIcons = {
    info: <InfoIcon className="stroke-info shrink-0" />,
    warning: <WarningIcon className="stroke-warning shrink-0" />,
    success: <CheckIcon className="text-success shrink-0" />,
    error: <CloseIcon className="text-error shrink-0" />,
  };
  const icon = alertIcons[type];

  return (
    <Modal
      title={title || ""}
      titleIcon={icon}
      isOpen={open}
      closeModal={closeModal}
      showCancel
    >
      <div className="flex flex-col items-center gap-4">
        {message &&
          message.map((text: string) => (
            <p className="space-y-2" key={text}>
              {text}
            </p>
          ))}
      </div>
    </Modal>
  );
};
