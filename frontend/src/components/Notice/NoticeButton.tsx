import styled from "styled-components";

import Button from "../../common/Button/ButtonForm";

const ButtonContainer = styled(Button)`
  width: 70px;
  font-size: ${(props) => props.theme.fontSize.size15};
  border-radius: 4px;
  background: ${(props) => props.theme.colors.white000};
  border: 1px solid ${(props) => props.theme.colors.cyan600};
  color: ${(props) => props.theme.colors.cyan700};

  &:hover {
    background: ${(props) => props.theme.colors.black100};
  }

  &:active {
    background: ${(props) => props.theme.colors.black200};
  }
`;

interface Props {
  onClick: () => void;
}

const NoticeButton = ({ onClick }: Props) => {
  return <ButtonContainer onClick={onClick}>글쓰기</ButtonContainer>;
};

export default NoticeButton;
