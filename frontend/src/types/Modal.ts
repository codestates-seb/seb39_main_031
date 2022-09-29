export type ModalType = {
  visible?: boolean;
  width?: string;
  height?: string;
  onClick?: () => void;
};

export type DeleteModalType = {
  visible?: boolean;
  width?: string;
  height?: string;
  onDelete?: () => void;
  onCancel?: () => void;
};
