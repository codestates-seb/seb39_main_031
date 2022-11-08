/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { useRef, useState } from "react";
import { AiOutlinePicture } from "react-icons/ai";
import { RiDeleteBin5Line } from "react-icons/ri";
import styled from "styled-components";

import Button from "../../common/Button/ButtonForm";

const ImgContainer = styled.div`
  width: 100%;
  margin-bottom: 2rem;
  > label {
    font-weight: bolder;
    font-size: ${({ theme }) => theme.fontSize.size15};
  }
`;

const ImgContent = styled.div`
  width: 80%;
  margin: 2rem auto;
  > img {
    width: 100%;
    height: 100%;
  }
`;
const ButtonContent = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  > input {
    display: none;
  }
`;

interface Props {
  image_uri: string;
  setImageURI: React.Dispatch<React.SetStateAction<string>>;
}

const EditImage = ({ image_uri, setImageURI }: Props) => {
  const [fileImage, setFileImage] = useState(image_uri);

  const titleImgRef: React.RefObject<HTMLInputElement> =
    useRef<HTMLInputElement>(null);

  const onImgChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const formData = new FormData();
    const file = event.target.files;

    file ? setFileImage(URL.createObjectURL(file[0])) : null;
    file ? formData.append("file", file[0]) : null;
    setImageURI(fileImage);
  };

  const onInputClickHandler = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    titleImgRef.current?.click();
  };

  const onImgDeleteHandler = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    URL.revokeObjectURL(fileImage);
    setFileImage("");
  };

  return (
    <ImgContainer>
      <label htmlFor="titleImg">대표 이미지</label>
      <ImgContent>
        {fileImage && (
          <img alt="upload_image" src={fileImage} style={{ margin: "auto" }} />
        )}
      </ImgContent>
      <ButtonContent>
        <input
          type="file"
          id="titleImg"
          accept="image/*"
          name="file"
          ref={titleImgRef}
          onChange={onImgChangeHandler}
        />
        <Button onClick={onInputClickHandler}>
          <AiOutlinePicture size="40" />
        </Button>
        {fileImage && (
          <Button onClick={onImgDeleteHandler}>
            <RiDeleteBin5Line size="40" />
          </Button>
        )}
      </ButtonContent>
    </ImgContainer>
  );
};

export default EditImage;
