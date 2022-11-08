/* eslint-disable prettier/prettier */
import "@toast-ui/editor/dist/toastui-editor.css";

import { Editor } from "@toast-ui/react-editor";
import axios from "axios";
import { useRef, useState } from "react";
import { useMutation } from "react-query";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import { BlueButton, GrayButton } from "../../../common/Button/BorderButton";
import Card from "../../../common/Card/Card";
import DefaultEditor from "../../../common/Editor/DefaultEditor";
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

interface Props {
  setIsShow: (value: React.SetStateAction<boolean>) => void;
}
interface notice {
  title: string;
  body: string;
}

const NoticeEditor = ({ setIsShow }: Props) => {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const editorRef = useRef<Editor>(null);
  const { product_id } = useParams();

  const { mutate } = useMutation(
    async (notice: notice) =>
      await axios.post(`/products/${product_id}/notices`, notice)
  );

  const registerHandler = () => {
    if (editorRef.current) {
      setValue(editorRef.current?.getInstance().getHTML());
    }
    mutate({ title, body: value });
  };

  return (
    <Container>
      <Card padding="1em" margin="0 0 2em 0">
        <NoticeInput
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        ></NoticeInput>
        <DefaultEditor ref={editorRef} height="250px" />
        <ButtonBlock>
          <BlueButton onClick={registerHandler}>등록</BlueButton>
          <GrayButton
            onClick={() => {
              setIsShow(false);
            }}
          >
            취소
          </GrayButton>
        </ButtonBlock>
      </Card>
    </Container>
  );
};

export default NoticeEditor;
