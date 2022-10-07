/* eslint-disable prettier/prettier */
import "@toast-ui/editor/dist/toastui-editor.css";

import { Editor } from "@toast-ui/react-editor";
import { useRef } from "react";
import { useMutation } from "react-query";
import styled from "styled-components";

import { imageUpload } from "../../config/API/api";

const TextContent = styled.div`
  width: 100%;
  margin: 2rem 0;
  > label {
    font-weight: bolder;
    font-size: ${({ theme }) => theme.fontSize.size15};
  }
`;

const EditorComponent = styled.div`
  margin-top: 1rem;
`;

interface Props {
  value?: string;
  editorRef?: React.RefObject<Editor>;
  setEditor?: React.Dispatch<React.SetStateAction<string>>;
}

const TextEditor = ({ value, setEditor }: Props) => {
  const formData = new FormData();
  const editorRef = useRef<Editor>(null);

  const { mutate } = useMutation((formData: FormData) =>
    imageUpload(formData, "editor")
  );

  const onUploadImage = async (
    blob: Blob | File,
    callback: (url: string, text?: string) => void
  ) => {
    formData.append("file", blob);
    mutate(formData, {
      onSuccess: data => {
        const url = data.data.data;
        callback(url, `${url}`); // 사진 화면에 보여주기
      },
      onError: error => {
        console.log(error);
      },
    });

    return false;
  };

  const onChangeHandler = () => {
    const data = editorRef.current?.getInstance().getHTML();
    setEditor && data && setEditor(data);
  };

  return (
    <TextContent>
      <label htmlFor="textArea">상세 설명</label>
      <EditorComponent>
        <Editor
          placeholder="내용을 입력해주세요."
          initialValue={value}
          ref={editorRef}
          initialEditType="wysiwyg"
          hideModeSwitch={true}
          language="ko-KR"
          onChange={onChangeHandler}
          toolbarItems={[
            ["heading", "bold", "italic", "strike"],
            ["hr", "quote"],
            ["ul", "ol", "task", "indent", "outdent"],
            ["table", "image", "link"],
          ]}
          hooks={{
            addImageBlobHook: onUploadImage,
          }}
        ></Editor>
      </EditorComponent>
    </TextContent>
  );
};

export default TextEditor;
