import React from "react";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Title = styled.h1`
  margin-bottom: 80px;
  margin-top: 35px;
`

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const NewsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border: 4px solid rgb(238, 238, 238);
  background: rgb(238, 238, 238) none repeat scroll 0% 0%;
  border-radius: 20px;
  justify-content: center;
  margin-bottom: 20px;
`

export const NewsTitle = styled.div`
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  color: rgb(166, 17, 44);
  padding: 10px;
`

export const NewsOtherInformation = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  justify-content: center;
`

export const NewsOtherInformationItem = styled.div`
  margin: 0 12px;
  display: flex;
`
