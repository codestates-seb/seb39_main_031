import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { css } from "styled-components";

import IconButton from "../../common/Button/IconButton";

interface Props {
  direction?: "left" | "right";
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}

const customButtonStyle = css`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${(props) => props.theme.colors.cyan500};
  color: white;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05), 0 5px 5px rgba(0, 0, 0, 0.1);
  :hover {
    background: ${(props) => props.theme.colors.cyan600};
  }
`;

const CategorySlideButton = ({ direction, onClick }: Props) => {
  return (
    <IconButton onClick={onClick} customButtonStyle={customButtonStyle}>
      {direction === "left" ? (
        <MdKeyboardArrowLeft />
      ) : (
        <MdKeyboardArrowRight />
      )}
    </IconButton>
  );
};

export default CategorySlideButton;
