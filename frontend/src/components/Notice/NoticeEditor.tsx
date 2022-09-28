import "@toast-ui/editor/dist/toastui-editor.css";

import { Editor } from "@toast-ui/react-editor";
import { useRef, useState } from "react";
import styled from "styled-components";

import Button from "../../common/Button/ButtonForm";
import Card from "../../common/Card/Card";
import NoticeInput from "./NoticeInput";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const ButtonBlock = styled.div`
  display: flex;
  justify-content: flex-end;
  column-gap: 10px;
  margin-top: 1em;
`;

const RegisterButton = styled(Button)`
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

const CancelButton = styled(Button)`
  width: 70px;
  font-size: ${(props) => props.theme.fontSize.size15};
  border-radius: 4px;
  background: ${(props) => props.theme.colors.white000};
  border: 1px solid ${(props) => props.theme.colors.black500};
  color: ${(props) => props.theme.colors.black500};

  &:hover {
    background: ${(props) => props.theme.colors.black100};
  }

  &:active {
    background: ${(props) => props.theme.colors.black200};
  }
`;

interface Props {
  setIsShow: (value: React.SetStateAction<boolean>) => void;
}

const NoticeEditor = ({ setIsShow }: Props) => {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const editorRef = useRef<Editor>(null);

  const registerHandler = () => {
    if (editorRef.current) {
      setValue(editorRef.current?.getInstance().getHTML());
    }
    console.log(title);
    console.log(value);
  };

  return (
    <Container>
      <Card padding="1em" margin="0 0 2em 0">
        <NoticeInput
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></NoticeInput>
        <Editor
          ref={editorRef}
          hideModeSwitch={true}
          height="250px"
          initialEditType="wysiwyg"
          toolbarItems={[
            ["bold", "italic"],
            ["link", "quote", "image", "codeblock"],
            ["ol", "ul", "heading", "hr"],
          ]}
        />
        <ButtonBlock>
          <RegisterButton onClick={registerHandler}>등록</RegisterButton>
          <CancelButton
            onClick={() => {
              setIsShow(false);
            }}
          >
            취소
          </CancelButton>
        </ButtonBlock>
      </Card>
    </Container>
  );
};

export default NoticeEditor;
