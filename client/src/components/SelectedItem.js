import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useParams, Redirect } from "react-router-dom";
import LargeItem from "./Items/SmallItem";

export default function SelectedItem() {
  const { items } = useSelector((state) => state.auth);
  const { itemid } = useParams();

  let findItem = items.filter((item) => {
    return item.id === Number(itemid);
  });

  return (
    <>
      {!findItem.length ? (
        <Redirect to="/error/404"></Redirect>
      ) : (
        <>
          <Section>{findItem[0].name}</Section>
          <Details style={{ margin: "50px 50px" }}>
            {findItem.map((item) => {
              return <LargeItem key={item.id} item={item} />;
            })}
          </Details>
        </>
      )}
    </>
  );
}

const Details = styled.div`
  display: flex;
  justify-content: center;
`;

const Section = styled.h1`
  display: flex;
  justify-content: center;
  margin-top: 100px;
  margin-right: 100px;
`;
