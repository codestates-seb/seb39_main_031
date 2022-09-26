export const SignupEmailCheck = (
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

export const SignupNicknameCheck = (
  text: string,
  setValid: (message: string) => void
) => {
  if (text.length < 3) {
    setValid("닉네임은 3글자 이상 되어야 합니다.");
  }
  if (text.length > 2) {
    setValid("");
  }
  if (text.length === 0) {
    setValid("닉네임은 필수정보 입니다.");
  }
};

export const SignupPasswordCheck = (
  num: string,
  setValid: (message: string) => void
) => {
  if (num.length < 5 || num.length > 30) {
    setValid("5~30글자 이내로 입력해 주십시오.");
  } else if (num.length === 0) {
    setValid("비밀번호는 필수정보 입니다.");
  } else {
    setValid("");
  }
};

export const SignupPasswordCheck2 = (
  num: string,
  password: string,
  setValid: (message: string) => void
) => {
  if (num !== password) {
    setValid("비밀번호가 일치하지 않습니다.");
  }
  if (num === password) {
    setValid("");
  }
};
