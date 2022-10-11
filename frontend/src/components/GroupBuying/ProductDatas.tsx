/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import axios from "axios";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroller";
import { useInfiniteQuery, useQuery } from "react-query";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import PreviewItem from "../Preview/PreviewItem";

const Container = styled.section`
  @media (min-width: ${(props) => props.theme.breakPoints.tablet}) {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-row-gap: 20px;
  padding: 0 1em;

  @media (min-width: ${(props) => props.theme.breakPoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 25px;
    grid-row-gap: 40px;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.desktop}) {
    grid-template-columns: repeat(3, 1fr);
    padding: 0;
  }
`;

const ProductDatas = () => {
  //! page url이 바뀔 때 마다 api url을 바꿔서 쏘기
  const { regions, towns } = useParams();

  const { data, fetchNextPage, hasNextPage, isLoading, isFetching } =
    useInfiniteQuery(
      ["product", regions, towns],
      async ({ pageParam = 1 }) => {
        let url = "";
        if (regions) {
          url = `&region=${regions}`;
        }
        if (towns && regions) {
          url = `&region=${regions}&&town=${towns}`;
        }
        return await axios
          .get(
            `${process.env.REACT_APP_API_URL}/products?page=${pageParam}` +
              `${url}`
          )
          .then(({ data }) => {
            console.log({
              region: regions,
              returnedData: data,
            });
            return data;
          });
      },
      {
        getNextPageParam: (lastPage) => {
          const lastNum = lastPage.pageInfo.totalPages;
          const nextNum = lastPage.pageInfo.page + 1;
          if (nextNum > lastNum) return null;
          return nextNum;
        },
        refetchOnMount: true,
      }
    );

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  const fetchNext = () => {
    fetchNextPage();
  };

  return (
    <Container>
      <InfiniteScroll loadMore={fetchNext} hasMore={hasNextPage}>
        <Grid>
          {data &&
            data.pages.map((pageData) => {
              return pageData.data.map((el: any) => {
                return (
                  <PreviewItem
                    key={el.productId}
                    product_id={el.productId}
                    user_id={el.userId}
                    image_uri={el.productImg[0]}
                    title={el.title}
                    user_name={el.username}
                    town={el.town}
                    goal_num={el.goalQuantity}
                    state_num={el.stateQuantity}
                    ended_time={el.endedTime}
                  />
                );
              });
            })}
        </Grid>
      </InfiniteScroll>
    </Container>
  );
};

export default ProductDatas;
