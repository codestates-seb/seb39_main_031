import styled from "styled-components";

const ModalWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 900;
`;

const ModalContainer = styled.div<{ width?: string; height?: string }>`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: ${({ width }) => (width ? width : "60%")};
  height: ${({ height }) => (height ? height : "40%")};
  max-width: 560px;
  max-height: 280px;
  padding: 16px;
  background: white;
  border-radius: 10px;
  text-align: center;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;

  .top {
    margin-bottom: 3rem;
  }

  .first-message {
    font-size: ${({ theme }) => theme.fontSize.size24};
    font-weight: 900;
  }
  .second-message {
    font-size: ${({ theme }) => theme.fontSize.size15};
    font-weight: 800;
  }

  .login {
    font-size: ${({ theme }) => theme.fontSize.size18};
    font-weight: 900;
    color: ${({ theme }) => theme.colors.cyan700};
  }
`;

const PasswordModal = () => {
  return (
    <ModalWrapper>
      <ModalContainer>
        <div>
          <div className="top">
            <span className="first-message">
              입력하신 메일로 임시 비밀번호를 전송하였습니다.
            </span>
          </div>
          <div>
            <span className="second-message">
              잠시 후 <span className="login">로그인 페이지</span>로 이동됩니다.
            </span>
          </div>
        </div>
      </ModalContainer>
    </ModalWrapper>
  );
};

export default PasswordModal;
