import React from "react";
import { Text, View } from "react-native";
import styled from "styled-components/native";
import { DescriptionText } from "../Texts";

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
      <DescriptionText>{subtitle}</DescriptionText>
    </Container>
  );
};

export default TitlePage;

const Container = styled(View)`
  align-items: center;
  gap: 4px;
`;

const Title = styled(Text)`
  font-size: 24px;
  font-weight: bold;
  color: #1a1a1a;
`;
