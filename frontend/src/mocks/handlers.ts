/* eslint-disable prettier/prettier */
import { rest } from "msw";

import {
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
];

export default handlers;
