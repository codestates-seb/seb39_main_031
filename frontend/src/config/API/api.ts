/* eslint-disable prettier/prettier */
import { participateProduct } from "../../types/participate";
import Axios from "./axios";

// 로그인
export const userLogin = async (body: loginUser) => {
  const url = "/members/login";
  return Axios.post(url, body);
};

// 회원가입
export const userSignup = async (body: signupUser) => {
  const url = "/members";
  return Axios.post(url, body);
};

// 비밀번호찾기
export const userPassword = async (email: string) => {
  const url = `/members/${email}/find`;
  return Axios.post(url);
};

// 공동구매 카테고리 조회
export const categoryProductList = async (page: string, category: string) => {
  const url = `/products?page=${page}&category=${category}`;
  return Axios.get(url);
};

// 공동구매 게시글 상세 조회
export const detailProduct = async (productId: string) => {
  const url = `/products/${productId}`;
  return Axios.get(url);
};

//! HOME
// 마감임박 공구목록 조회
export const endedProductList = async () => {
  const url = "/products/deadline?page=1";
  return Axios.get(url);
};

//! 게시글
// 글 작성
export const createProduct = async (body: productCreate, token: string) => {
  const url = "/products";
  return Axios.post(url, body, {
    headers: {
      Authorization: token,
    },
  });
};
// 글 수정
export const reviseProduct = async (productId: string, body: productRevise) => {
  const url = `/products/${productId}`;
  return Axios.patch(url, body);
};

// 글 상태 수정
export const stateProduct = async (productId: string, body: productState) => {
  const url = `/products/${productId}`;
  return Axios.patch(url, body);
};

// 글 삭제
export const deleteProduct = async (productId: string) => {
  const url = `/products/${productId}`;
  return Axios.delete(url);
};

//! 공지사항
// 공지사항 목록 조회
export const noticeList = async (productId: string, page: number) => {
  const url = `/products/${productId}/notices?page=${page}`;
  return Axios.get(url);
};

// 공지사항 등록
export const createNotice = async (productId: string, body: noticeCreate) => {
  const url = `/products/${productId}/notices`;
  return Axios.post(url, body);
};

// 공지사항 수정
export const reviseNotice = async (
  productId: string,
  noticeId: string,
  body: noticeRevise
) => {
  const url = `/products/${productId}/notices/${noticeId}`;
  return Axios.patch(url, body);
};

// 공지사항 삭제
export const deleteNotice = async (productId: string, noticeId: string) => {
  const url = `/products/${productId}/notices/${noticeId}`;
  return await Axios.delete(url);
};

//! image 업로드
export const imageUpload = async (body: any, type: string) => {
  const url = `/image/upload?type=${type}`;
  return await Axios.post(url, body, {
    headers: {
      "Content-Type": `multipart/form-data`,
    },
  });
};

// 공동구매 참여
export const enteredProduct = async (
  body: participateProduct,
  token: string
) => {
  const url = "/EnteredUser";
  return Axios.post(url, body, {
    headers: {
      Authorization: token,
    },
  });
};

//! userInfo
// 내가 참여한 공구
export const myParticipateList = async (token: string) => {
  const url = "/EnteredUser/entered";
  return Axios.get(url, {
    headers: {
      Authorization: token,
    },
  });
};

//? Type

// 로그인
export type loginUser = {
  email: string;
  password: string;
};

// 회원가입
export type signupUser = {
  username: string;
  email: string;
  password: string;
  region: string;
  town: string;
};

// 공지사항 타입
export type noticeCreate = {
  title: string;
  body: string;
};

export type noticeRevise = {
  title: string;
  body: string;
};

// 공동구매 글 타입
export type productCreate = {
  title: string;
  body: string;
  goalQuantity: number;
  unit: number;
  unitPerPrice: number;
  region: string;
  town: string;
  category: string;
  endedTime: string;
  productImage: string;
};

export type productRevise = {
  title: string;
  body: string;
  goalQuantity: number;
  unit: string;
  unitPerPrice: number;
  state: string;
  endedTime: string;
};

export type productState = {
  state: string;
};
