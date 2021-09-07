import React from "react";
import styled from "styled-components";

const ActiveCard: React.FC = () => {
  return (
    <Card>
      <TitleBox>
        <Title>20w19</Title>
      </TitleBox>
      <ImgBox>
        <Img />
      </ImgBox>
      <TextBox>
        <Text>제주 삼다공원 야간콘서트 공연</Text>
        <Text>문화가 있는 날 청춘마이크 연간 공연</Text>
        <Text>제주도립미술관 야간 콘서트</Text>
        <Text>제주도청 초청 공연</Text>
        <Text>MBC 테마기행 길 출연</Text>
        <Text>KBS 보물섬 홍조밴드 출연</Text>
        <Text>제주 야호 페스티벌</Text>
        <Text>제주 설민석 독서문화대전 공연</Text>
        <Text>아리랑 라디오 출연</Text>
        <Text>KCTV 곶자왈 생명수를 품다 출연</Text>
      </TextBox>
    </Card>
  );
};

export default ActiveCard;

export const Card = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const TitleBox = styled.div`
  margin-bottom: 10px;
`;

export const Title = styled.h2`
  font-size: 18px;
  color: #736e66;
`;

export const ImgBox = styled.div`
  width: 100%;
  margin-bottom: 10px;
  height: 300px;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const TextBox = styled.div``;

export const Text = styled.p`
  color: #736e66;
`;
