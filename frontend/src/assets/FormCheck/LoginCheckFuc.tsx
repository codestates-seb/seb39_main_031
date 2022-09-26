export const loginEmailCheck = (
  text: string,
  setValid: (message: string) => void
) => {
  if (text.length === 0) {
    setValid("이메일은 필수정보 입니다.");
  }
  if (text.length > 0) {
    setValid("");
  }
};

export const loginPasswordCheck = (
  num: string,
  setValid: (message: string) => void
) => {
  if (num.length === 0) {
    setValid("비밀번호는 필수정보 입니다.");
  }
  if (num.length > 0) {
    setValid("");
  }
};
