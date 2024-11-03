import React from "react";
import { Text, View } from "react-native";
import styled from "styled-components/native";

const TitlePage = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Container>
  );
};

export default TitlePage;

const Container = styled(View)`
  align-items: center;
  gap: 8px;
`;

const Title = styled(Text)`
  font-size: 24px;
  font-weight: 700;
  color: #1a1a1a;
`;

const Subtitle = styled(Text)`
  font-size: 14px;
  color: #9e9e9e;
  text-align: center;
  width: 330px;
`;
