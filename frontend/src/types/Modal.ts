/* eslint-disable @typescript-eslint/no-empty-interface */
// eslint-disable-next-line import/named
import { CSSProp } from "styled-components";

// modal component
export interface StyledModalProps {
  customModalStyle?: CSSProp;
}

export interface ModalType extends StyledModalProps {
  onClick?: () => void;
  onClose?: () => void;
  children?: React.ReactNode;
}

// modal redux
interface NotJoinProps {
  image_uri: string;
  title: string;
  state_price: number;
  quantity: number;
}

interface DeleteProps {}

interface EndProps {}

interface JoinProps {}

interface RatingProps {}

export interface ModalState {
  modalType: string;
  isVisible: boolean;
  notjoinProps: NotJoinProps;
  deleteProps: DeleteProps;
  endProps: EndProps;
  joinProps: JoinProps;
  ratingProps: RatingProps;
}
