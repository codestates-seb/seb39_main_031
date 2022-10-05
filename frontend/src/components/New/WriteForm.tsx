import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { categories } from "../../assets/Selector/SeletorOptions";
import Button from "../../common/Button/ButtonForm";
import InputForm from "../../common/Input/InputForm";
import CategorySelector from "../../common/Select/CategorySelector";
import SelectForm from "../../common/Select/SelectForm";
import ImgUpload from "./ImgUpload";
import TextEditor from "./TextEditor";

const EditForm = styled.form`
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
  column-gap: 50px;
`;

const WriteForm = () => {
  const navigate = useNavigate();

  const onChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(event.target.value);
  };

  const writeButtonHandler = () => {
    console.log("작성 버튼");
  };

  const cancelButtonHandler = () => {
    console.log("취소 버튼");
    navigate(-1);
  };

  return (
    <EditForm>
      <CategorySelector
        lableText="카테고리"
        options={categories}
        onChangeHandler={onChangeHandler}
      />
      <InputForm lableText="상품명" type="text" marginBottom="2rem" />
      <ImgUpload />
      <InputForm lableText="단위" type="text" marginBottom="2rem" />
      <InputForm lableText="단위 당 금액" type="text" marginBottom="2rem" />
      <InputForm lableText="총수량" type="number" marginBottom="2rem" />
      <DateComponent>
        <InputForm lableText="시작 날짜" type="date" width="48%" />
        <InputForm lableText="종료 날짜" type="date" width="48%" />
      </DateComponent>
      <SelectForm label1="지역" label2="동네" />
      <TextEditor />
      <ButtonContent>
        <Button onClick={writeButtonHandler} width="150px" height="2.5rem">
          작성
        </Button>
        <Button
          backgroundColor="#BDBDBD"
          hoverBackground="#9E9E9E"
          onClick={cancelButtonHandler}
          width="150px"
          height="2.5rem"
        >
          취소
        </Button>
      </ButtonContent>
    </EditForm>
  );
};

export default WriteForm;
