// eslint-disable-next-line import/named
import { CSSProp } from "styled-components";

export interface StyledModalProps {
  customModalStyle?: CSSProp;
}

export interface ModalType extends StyledModalProps {
  visible?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
}

export interface DeleteModalType extends ModalType {
  onDelete?: () => void;
  onCancel?: () => void;
}

export interface ProductModalInfo {
  image_uri: string;
  title: string;
  state_price: number;
  userNickname: string;
  quantity: number;
}

export interface ProductModalType extends ModalType, ProductModalInfo {
  modalTitle?: string;
  onCheck?: () => void;
  onCancel?: () => void;
}
