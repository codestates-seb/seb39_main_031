import styled from "styled-components";

const InputContainer = styled.input`
  margin-bottom: 1em;
  border: none;
  border-bottom: 1px solid ${(props) => props.theme.colors.black300};
  padding: 0.5em 1.5em;
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
}

const NoticeInput = ({ onChange }: Props) => {
  return (
    <InputContainer placeholder="제목" onChange={onChange} maxLength={30} />
  );
};

export default NoticeInput;
