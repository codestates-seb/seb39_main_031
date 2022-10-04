import { Editor } from "@toast-ui/react-editor";

interface Props {
  height?: string;
  value?: string;
  ref?: React.RefObject<Editor>;
}

const DefaultEditor = ({ height, value, ref }: Props) => {
  return (
    <Editor
      initialValue={value}
      ref={ref}
      hideModeSwitch={true}
      height={height}
      initialEditType="wysiwyg"
      toolbarItems={[
        ["bold", "italic"],
        ["link", "quote", "image", "codeblock"],
        ["ol", "ul", "heading", "hr"],
      ]}
    />
  );
};

export default DefaultEditor;
