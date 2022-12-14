/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { categories } from "../../assets/Selector/SeletorOptions";
import Button from "../../common/Button/ButtonForm";
import InputForm from "../../common/Input/InputForm";
import CategorySelector from "../../common/Select/CategorySelector";
import SelectForm from "../../common/Select/SelectForm";
import { createProduct, productCreate } from "../../config/API/api";
import { getCookie } from "../../config/Cookie";
import { useAppDispatch, useAppSelector } from "../../hooks/Redux";
import { newProductActions } from "../../redux/newProductSlice";
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
  const [selectRegion, setSelectRegion] = useState<string>("");
  const [selectTown, setSelectTown] = useState<string>("");
  const [editor, setEditor] = useState<string>("");
  const navigate = useNavigate();
  const { authorization } = getCookie("userInfo");

  const dispatch = useAppDispatch();
  const { mutate } = useMutation((body: productCreate) =>
    createProduct(body, authorization)
  );

  const {
    title,
    category,
    unit,
    unitPerPrice,
    region,
    town,
    goalQuantity,
    body,
    endedTime,
    productImage,
  } = useAppSelector((state) => state.newProduct);

  useEffect(() => {
    dispatch(newProductActions.regionHandler({ region: selectRegion }));
  }, [selectRegion]);

  useEffect(() => {
    dispatch(newProductActions.townHandler({ town: selectTown }));
  }, [selectTown]);

  useEffect(() => {
    dispatch(
      newProductActions.bodyHandler({
        body: editor,
      })
    );
  }, [editor]);

  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate() > 9 ? date.getDate() : "0" + date.getDate();
  const toDay = `${year}-${month}-${day}`;

  const newProductHandler = (evnet: React.FormEvent<HTMLFormElement>) => {
    evnet.preventDefault();

    mutate(
      {
        title: title,
        body: body,
        goalQuantity: goalQuantity,
        unit: 1,
        unitPerPrice: unitPerPrice,
        region: region,
        town: town,
        category: category,
        endedTime: endedTime,
        productImage: productImage,
      },
      {
        onSuccess: (data) => {
          navigate("/groupbuying");
        },
        onError: (error) => {
          console.log(error);
        },
      }
    );
  };

  const writeButtonHandler = () => {};

  const cancelButtonHandler = () => {
    navigate(-1);
  };

  return (
    <EditForm onSubmit={newProductHandler}>
      <CategorySelector
        lableText="????????????"
        options={categories}
        onChangeHandler={(event: React.ChangeEvent<HTMLSelectElement>) => {
          dispatch(
            newProductActions.categoryHandler({ category: event.target.value })
          );
        }}
      />
      <InputForm
        lableText="?????????"
        type="text"
        marginBottom="2rem"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          dispatch(
            newProductActions.titleHandler({ title: event.target.value })
          );
        }}
      />
      <ImgUpload />
      <InputForm
        lableText="??????"
        type="text"
        marginBottom="2rem"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          dispatch(newProductActions.unitHandler({ unit: event.target.value }));
        }}
      />
      <InputForm
        lableText="?????? ??? ??????"
        type="number"
        marginBottom="2rem"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          dispatch(
            newProductActions.unitPerPriceHandler({
              unitPerPrice: parseInt(event.target.value),
            })
          );
        }}
      />
      <InputForm
        lableText="?????????"
        type="number"
        marginBottom="2rem"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          dispatch(
            newProductActions.goalQuantityHandler({
              goalQuantity: parseInt(event.target.value),
            })
          );
        }}
      />
      <DateComponent>
        <InputForm
          lableText="?????? ??????"
          type="date"
          width="48%"
          value={toDay}
        />
        <InputForm
          lableText="?????? ??????"
          type="date"
          width="48%"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            dispatch(
              newProductActions.endedTimeHandler({
                endedTime: new Date(event.target.value).toISOString(),
              })
            );
          }}
        />
      </DateComponent>
      <SelectForm
        label1="??????"
        label2="??????"
        onSelectRegion={setSelectRegion}
        onSelectTown={setSelectTown}
      />
      <TextEditor setEditor={setEditor} />
      <ButtonContent>
        <Button onClick={writeButtonHandler} width="150px" height="2.5rem">
          ??????
        </Button>
        <Button
          backgroundColor="#BDBDBD"
          hoverBackground="#9E9E9E"
          onClick={cancelButtonHandler}
          width="150px"
          height="2.5rem"
        >
          ??????
        </Button>
      </ButtonContent>
    </EditForm>
  );
};

export default WriteForm;
