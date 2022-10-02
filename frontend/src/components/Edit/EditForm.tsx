import { Editor } from "@toast-ui/react-editor";
import { FormEvent, useRef, useState } from "react";
import styled from "styled-components";

import { categories } from "../../assets/Selector/SeletorOptions";
import Button from "../../common/Button/ButtonForm";
import InputForm from "../../common/Input/InputForm";
import CategorySelector from "../../common/Select/CategorySelector";
import SelectForm from "../../common/Select/SelectForm";
import { EditType } from "../../types/post";
import TextEditor from "../New/TextEditor";
import EditImage from "./EditImage";

const FormContainer = styled.form`
  width: 100%;
`;

const DateComponent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

const ButtonContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const EditForm = ({
  user_id,
  product_id,
  title,
  image_uri,
  category,
  goal_num,
  generated_time,
  ended_time,
  region,
  town,
  body = "",
}: EditType) => {
  const editorRef = useRef<Editor>(null);

  const [eTitle, setETitle] = useState(title);
  const [eCategory, setECategory] = useState(category);
  const [goalNum, setGoalNum] = useState(String(goal_num));
  const [generatedTime, setGeneratedTime] = useState(generated_time);
  const [endedTime, setEndedTime] = useState(ended_time);
  const [eRegion, setERegion] = useState<string>("");
  const [eTown, setETown] = useState<string>("");
  const [imageURI, setImageURI] = useState(image_uri);

  const editHandler = (e: FormEvent) => {
    e.preventDefault();

    const body = {
      eTitle,
      eCategory,
      goalNum,
      generatedTime,
      endedTime,
      eRegion,
      eTown,
      imageURI,
      body: editorRef.current?.getInstance().getHTML(),
    };

    console.log(body);
  };

  return (
    <FormContainer onSubmit={editHandler}>
      <CategorySelector
        lableText="카테고리"
        options={categories}
        onChangeHandler={(e) => setECategory(e.target.value)}
        selected={category}
      />
      <InputForm
        defaultValue={eTitle}
        lableText="상품명"
        type="text"
        marginBottom="2rem"
        onChange={(e) => setETitle(e.target.value)}
      />
      <EditImage image_uri={image_uri} setImageURI={setImageURI} />
      <InputForm lableText="단위" type="text" marginBottom="2rem" />
      <InputForm lableText="단위 가격" type="text" marginBottom="2rem" />
      <InputForm
        value={String(goalNum)}
        lableText="총수량"
        type="number"
        marginBottom="2rem"
        onChange={(e) => setGoalNum(e.target.value)}
      />
      <DateComponent>
        <InputForm
          defaultValue={generatedTime}
          lableText="시작 날짜"
          type="date"
          width="48%"
          onChange={(e) => setGeneratedTime(e.target.value)}
        />
        <InputForm
          defaultValue={endedTime}
          lableText="종료 날짜"
          type="date"
          width="48%"
          onChange={(e) => setEndedTime(e.target.value)}
        />
      </DateComponent>
      <SelectForm
        label1="지역"
        label2="동네"
        selectRegion={region}
        selectTown={town}
        onSelectRegion={setERegion}
        onSelectTown={setETown}
      />
      <TextEditor value={body} editorRef={editorRef} />
      <ButtonContent>
        <Button width="50%" height="2.5rem">
          작성하기
        </Button>
      </ButtonContent>
    </FormContainer>
  );
};

export default EditForm;
