/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import axios from "axios";
import InfiniteScroll from "react-infinite-scroller";
import { useInfiniteQuery } from "react-query";
import styled from "styled-components";

import { Preview } from "../../types/post";
import PreviewItem from "../Preview/PreviewItem";

const Container = styled.div`
  display: flex;
`;

const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 30%);
  grid-row-gap: 40px;
  grid-column-gap: 5%;
`;

const initialUrl = "https://groupbuying/api/?page=1";

const fetchUrl = async (url: string) => {
  const response = await fetch(url);
  return response.json();
};

const ProductDatas = () => {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isError,
    error,
    isFetching,
  } = useInfiniteQuery(
    "[product]",
    ({ pageParam = initialUrl }) => fetchUrl(pageParam),
    {
      getNextPageParam: lastPage => lastPage.next || undefined,
    }
  );

  const fetchNext = () => {
    fetchNextPage();
  };

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>Error!</div>;

  return (
    <Container>
      <InfiniteScroll loadMore={fetchNext} hasMore={hasNextPage}>
        <Grid>
          {data &&
            data.pages.map(pageData => {
              return pageData.results.map((el: Preview) => {
                return (
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
                );
              });
            })}
        </Grid>
      </InfiniteScroll>
    </Container>
  );
};

export default ProductDatas;
