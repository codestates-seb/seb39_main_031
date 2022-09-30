import Cookies from "universal-cookie";

const cookies = new Cookies();

export type setCookieType = (
  cookieName: string,
  cookie: {
    [S: string]: string | object;
  },
  option?: {
    [S: string]: string | number | boolean;
  }
) => void;

export const setCookie: setCookieType = (cookieName, cookie, option) => {
  return cookies.set(cookieName, cookie, { ...option });
};

export const getCookie = (cookieName: string) => {
  return cookies.get(cookieName);
};

export const removeCookie = (cookieName: string) => {
  return cookies.remove(cookieName);
};
