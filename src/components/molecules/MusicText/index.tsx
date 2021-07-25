import React from "react";
import styled from "styled-components";

const MusicText = () => {
  return (
    <Container>
      <TitleBox>
        <Title>미 어게인(Me Again)</Title>
      </TitleBox>
      <SelectBox>
        <SelectButtons>메인</SelectButtons>
        <SelectButtons>사용 후기</SelectButtons>
        <SelectButtons>쇼핑몰</SelectButtons>
      </SelectBox>
      <TextBox>
        <Text>비교 불가능한</Text>
        <Text>나만의 사운드</Text>
      </TextBox>
    </Container>
  );
};

export default MusicText;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 585px;
  height: 100%;
`;
export const TitleBox = styled.div`
  width: 100%;
  border-bottom: 3px solid #ffffff;
  padding: 10px 0;
`;

export const Title = styled.h1`
  color: #ffffff;
  font-size: 26px;
  font-weight: bold;
  letter-spacing: 1.8px;
`;

export const SelectBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-top: 20px;
`;

export const SelectButtons = styled.button`
  color: #ffffff;
  font-size: 15px;
  padding: 0;
  margin-right: 30px;
`;

export const TextBox = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const Text = styled.p`
  color: #ffffff;
  font-size: 50px;
  font-weight: bold;
`;
