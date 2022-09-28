import React from "react";
import styled from "styled-components";

const InputContainer = styled.input`
  width: 200px;
  margin-bottom: 2em;
  border: none;
  border-bottom: 1px solid ${(props) => props.theme.colors.black300};
  padding: 0.5em;
  font-size: ${(props) => props.theme.fontSize.size15};

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.cyan400};
  }

  &::placeholder {
    color: ${(props) => props.theme.colors.black400};
  }
`;

interface Props {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyUp?: (e: any) => void;
}

const KeywordInput = ({ onChange, onKeyUp }: Props) => {
  return (
    <InputContainer
      placeholder="키워드를 입력하세요"
      onChange={onChange}
      onKeyUp={onKeyUp}
      maxLength={20}
    />
  );
};

export default KeywordInput;
