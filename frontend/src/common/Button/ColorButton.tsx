import { ButtonType } from "../../types/Button";
import Button from "./ButtonForm";

export const BlueButton = ({ ...props }: ButtonType) => {
  return (
    <Button
      width="70px"
      height="30px"
      fontSize="15px"
      border="1px solid transparent"
      {...props}
    />
  );
};

export const GrayButton = ({ ...props }: ButtonType) => {
  return (
    <Button
      width="70px"
      height="30px"
      fontSize="15px"
      border="1px solid #BDBDBD"
      backgroundColor="#EEEEEE"
      color="#9E9E9E"
      hoverBackground="#E0E0E0"
      {...props}
    />
  );
};
