import { BlueButton } from "../../../common/Button/BorderButton";

const ModifyButton = () => {
  const ModifyHandler = () => {
    console.log("수정");
  };

  return (
    <BlueButton width="50%" height="2.5em" onClick={ModifyHandler}>
      수정
    </BlueButton>
  );
};

export default ModifyButton;
