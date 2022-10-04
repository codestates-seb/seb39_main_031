import { BiSearch } from "react-icons/bi";
import styled from "styled-components";

const InputTagBox = styled.div<InputProps>`
  display: flex;
  width: ${({ width }) => (width ? width : "100%")};
  justify-content: center;
  align-items: center;
  position: relative;

  .icon {
    font-size: 20px;
    color: ${(props) => {
      return props.theme.colors.black400;
    }};
    position: absolute;
    right: auto;
    left: 0.7em;
    top: 47%;
    margin-top: -9px;
    pointer-events: none;
  }

  .disable {
    display: none;
  }
`;

const InputTag = styled.input<InputProps>`
  width: 100%;
  height: 50px;
  padding: 8px;
  padding-left: 40px;
  border: 3px solid
    ${({ borderColor }) => (borderColor ? borderColor : "#EEEEEE")};
  border-radius: 30px;
  font-size: ${(props) => props.theme.fontSize.size15};

  &::placeholder {
    color: ${(props) => props.theme.colors.black400};
  }

  &:focus {
    outline: none;
    border-color: ${(props) => {
      return props.theme.colors.cyan200;
    }};
  }

  &.disable {
    display: none;
  }
`;

interface InputProps {
  placeholder?: string;
  path?: string;
  width?: string;
  borderColor?: string;
}

const SearchInput = ({ placeholder, path, width, borderColor }: InputProps) => {
  return (
    <InputTagBox width={width}>
      <InputTag
        className={path === "/" ? "disable" : ""}
        placeholder={placeholder}
        borderColor={borderColor}
      />
      <BiSearch className={path === "/" ? "disable" : "icon"} />
    </InputTagBox>
  );
};

export default SearchInput;
