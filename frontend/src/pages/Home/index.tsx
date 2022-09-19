import { useState } from "react";

import Button from "../../common/Button/button";
import Modal from "../../common/Modal/Modal";

const Home = () => {
  const [visible, setVisible] = useState(false);
  const exampleClickHandler = () => {
    setVisible(!visible);
  };

  return (
    <>
      <h1>Home</h1>
      <Button onClick={exampleClickHandler}>Btn</Button>
      <Modal visible={visible} onClick={exampleClickHandler} />
    </>
  );
};

export default Home;
