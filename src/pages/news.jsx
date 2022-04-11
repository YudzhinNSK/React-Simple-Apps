import React, { useEffect } from "react";
import { Title, Wrapper } from "./styles/style";
import { useDispatch, useSelector } from "react-redux";
import { getNews } from "../redux/actions/actionCreator";
import { SingleNews } from "../components/singleNews";

export const News =
  ({}) => {
    const { latestNews } = useSelector(store => store?.news || {});
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getNews());
    }, [dispatch])

    return (
      <Wrapper>
        <Title>
          News Page
        </Title>
        {latestNews.length ? (
          <div>
            {latestNews.map((news) =>
              (<SingleNews
                news={news}
              />)
            )}
          </div>
        ) : (
          <div>
            Hello! Welcome to simple SPA React App!
          </div>
        )}
      </Wrapper>
    );
  };