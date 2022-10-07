/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import axios from "axios";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroller";
import { useInfiniteQuery } from "react-query";
import styled from "styled-components";

import PreviewItem from "./PreviewItem";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-row-gap: 40px;
  grid-column-gap: 20px;
  padding: 0 1em;

  @media (min-width: ${(props) => props.theme.breakPoints.mobile}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${(props) => props.theme.breakPoints.tablet}) {
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 40px;
  }
`;

type Props = {
  selected?: string;
};

const PreviewList = ({ selected }: Props) => {
  const { data, fetchNextPage, hasNextPage, isLoading, isFetching } =
    useInfiniteQuery(
      ["category", selected],
      async ({ pageParam = 1 }) => {
        let url = "";
        if (selected) {
          url = `&category=${selected}`;
        }
        if (selected === "전체") {
          url = "";
        }
        return axios
          .get(
            `${process.env.REACT_APP_API_URL}/products?page=${pageParam}` +
              `${url}`
          )
          .then(({ data }) => {
            console.log({
              selected,
              returnedData: data,
            });
            return data;
          });
      },
      {
        getNextPageParam: lastPage => {
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
<<<<<<< HEAD
      <InfiniteScroll loadMore={fetchNext} hasMore={hasNextPage}>
        <Grid>
          {data &&
            data.pages.map(pageData => {
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
=======
      <Grid>
        {data.map((el) => (
          <PreviewItem
            key={el.product_id}
            product_id={el.product_id}
            user_id={el.user_id}
            image_uri={el.image_uri}
            title={el.title}
            user_name={el.user_name}
            town={el.town}
            goal_num={el.goal_num}
            state_num={el.state_num}
            ended_time={el.ended_time}
          />
        ))}
      </Grid>
>>>>>>> 9505c159d54c485712e579d4fc969f69a62744ef
    </Container>
  );
};

export default PreviewList;
