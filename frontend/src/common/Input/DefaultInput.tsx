import { BiSearch } from "react-icons/bi";
import styled from "styled-components";

interface InputProps {
  placeholder?: string;
  path?: string;
  width?: string;
}

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
    left: 0.5em;
    top: 47%;
    margin-top: -9px;
    pointer-events: none;
  }

  .disable {
    display: none;
  }
`;

const InputTag = styled.input`
  width: 100%;
  padding: 8px;
  padding-left: 30px;
  border: 1px solid
    ${(props) => {
      return props.theme.colors.black300;
    }};
  border-radius: 4px;
  font-size: ${(props) => {
    return props.theme.fontSize.size15;
  }};

  &::placeholder {
    color: ${(props) => {
      return props.theme.colors.black400;
    }};
  }

  &:focus {
    outline: none;
    border-color: ${(props) => {
      return props.theme.colors.cyan100;
    }};
    box-shadow: 0 0 0 3px #dcfafa;
  }

  &.disable {
    display: none;
  }
`;

const DefaultInput = ({ placeholder, path, width }: InputProps) => {
  return (
    <InputTagBox width={width}>
      <InputTag
        className={path === "/" ? "disable" : ""}
        placeholder={placeholder}
      />
      <BiSearch className={path === "/" ? "disable" : "icon"} />
    </InputTagBox>
  );
};

export default DefaultInput;
