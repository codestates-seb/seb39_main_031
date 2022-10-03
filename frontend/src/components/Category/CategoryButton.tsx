import styled from "styled-components";

const Container = styled.button`
  border: 2px solid transparent;
  padding: 0;
  width: auto;
  background: ${(props) => props.theme.colors.white000};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10%;
  align-items: center;
  padding-bottom: 10px;
  transition: background-color 0.2s linear;

  &.active {
    background: ${(props) => props.theme.colors.black100};
  }
`;

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  width: 60px;
  height: 60px;
  margin: 10px;
  color: ${(props) => props.theme.colors.black900};
`;

const Text = styled.div`
  font-size: 15px;
  color: ${(props) => props.theme.colors.black900};

  ${Container}:hover & {
    font-weight: 900;
  }

  ${Container}.active & {
    font-weight: 900;
  }
`;

interface Props {
  className: string;
  label: string;
  icon: JSX.Element;
  onClick: () => void;
}

const CategoryButton = ({ className, label, icon, onClick }: Props) => {
  return (
    <Container onClick={onClick} className={className}>
      <Icon>{icon}</Icon>
      <Text>{label}</Text>
    </Container>
  );
};

export default CategoryButton;
