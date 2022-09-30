import "@toast-ui/editor/dist/toastui-editor.css";

import { Editor } from "@toast-ui/react-editor";
import styled from "styled-components";

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
}

const TextEditor = ({ value, editorRef }: Props) => {
  const onUploadImage = async (
    blob: Blob | File,
    callback: (url: string, text?: string) => void
  ) => {
    // const url = await uploadImage(blob) // DB에 저장하기
    // callback(url, 'alt text') // 사진 화면에 보여주기
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
          toolbarItems={[
            ["heading", "bold", "italic", "strike"],
            ["hr", "quote"],
            ["ul", "ol", "task", "indent", "outdent"],
            ["table", "image", "link"],
          ]}
          hooks={{ addImageBlobHook: onUploadImage }}
        ></Editor>
      </EditorComponent>
    </TextContent>
  );
};

export default TextEditor;
