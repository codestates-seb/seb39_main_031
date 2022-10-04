/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable array-callback-return */
/* eslint-disable prettier/prettier */
import { rest } from "msw";

import { DetailType } from "../types/post";
import {
  fullData,
  responseForPage1,
  responseForPage2,
  responseForPage3,
  responseForPage4,
  responseForPage5,
  responseForPage6,
  responseForPage7,
  responseForPage8,
  responseForPage9,
  responseForPage10,
} from "./datalist";

type user = {
  userEmail: string;
  userPassword: string;
  userNickname: string;
}[];

const users: user = [
  {
    userEmail: "abc@naver.com",
    userPassword: "123123",
    userNickname: "손흥민",
  },
];

const productData: DetailType[] = [];

const handlers = [
  rest.get("https://groupbuying/api/", (req, res, ctx) => {
    const pageNumber = req.url.searchParams.get("page");
    let response;

    if (pageNumber === "1") {
      response = responseForPage1;
    }
    if (pageNumber === "2") {
      response = responseForPage2;
    }
    if (pageNumber === "3") {
      response = responseForPage3;
    }
    if (pageNumber === "4") {
      response = responseForPage4;
    }
    if (pageNumber === "5") {
      response = responseForPage5;
    }
    if (pageNumber === "6") {
      response = responseForPage6;
    }
    if (pageNumber === "7") {
      response = responseForPage7;
    }
    if (pageNumber === "8") {
      response = responseForPage8;
    }
    if (pageNumber === "9") {
      response = responseForPage9;
    }
    if (pageNumber === "10") {
      response = responseForPage10;
    }

    return res(ctx.status(200), ctx.delay(400), ctx.json(response));
  }),

  rest.post("/login", async (req, res, ctx) => {
    const { userEmail, userPassword } = await req.json();
    const isUser: user = [];

    users.map(user => {
      if (user.userEmail === userEmail && user.userPassword === userPassword) {
        return isUser.push(user);
      }
    });

    if (isUser) {
      console.log(isUser);
      return res(
        ctx.status(200),
        ctx.json({
          userId: "2",
          userNickname: isUser[0].userNickname,
          profileImage_uri: "https://source.unsplash.com/80x80/?cat",
        })
      );
    }

    if (userEmail === "asdf@naver.com" && userPassword === "123123") {
      return res(
        ctx.status(200),
        ctx.json({
          userId: "abc",
          userNickname: "cooker",
          profileImage_uri: "https://source.unsplash.com/80x80/?cat",
        })
      );
    }
  }),

  rest.post("/signup", async (req, res, ctx) => {
    const { email, nickname, password } = await req.json();
    console.log(email, nickname, password);
    if (email && password) {
      users.push({
        userEmail: email,
        userPassword: password,
        userNickname: nickname,
      });
    }
    return res(
      ctx.status(200),
      ctx.json({
        signup: "good",
      })
    );
  }),

  rest.get("/product/:userid/:productid", (req, res, ctx) => {
    const { userid, productid } = req.params;

    fullData.map(data => {
      if (
        data.user_id === Number(userid) &&
        data.product_id === Number(productid)
      ) {
        productData[0] = data;
      }
    });
    console.log(productData[0]);
    return res(ctx.status(200), ctx.json(productData[0]));
  }),

  rest.get("/participate/:user_id/:product_id", async (req, res, ctx) => {
    const { user_id, product_id } = req.params;

    fullData.map(data => {
      if (
        data.user_id === Number(user_id) &&
        data.product_id === Number(product_id)
      ) {
        productData[0] = data;
      }
    });
    console.log(productData[0]);
    return res(ctx.status(200), ctx.json(productData[0]));
  }),
];

export default handlers;
