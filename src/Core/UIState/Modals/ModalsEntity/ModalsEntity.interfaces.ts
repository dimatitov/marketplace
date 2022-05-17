export interface IModalProps {
  onClose?: () => void;
  onConfirm?: (context?: Record<string, any>) => void;
  onCancel?: (context?: Record<string, any>) => void;
  modalTitle?: string;
  tooltip?: string;
}

export interface ModalsEntityState {
  openedModal: string;
  modalProps: IModalProps;
}
