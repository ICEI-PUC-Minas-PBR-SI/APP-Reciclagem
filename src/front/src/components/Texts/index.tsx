import styled from "styled-components/native";

export const TitleH1 = styled.Text`
  font-size: 24px;
  font-weight: 700;
`;

export const TitleH2 = styled.Text`
  font-size: 20px;
  font-weight: 700;
`;

export const TitleH3 = styled.Text`
  font-size: 18px;
  font-weight: 700;
`;

export const Subtitle = styled.Text`
  font-size: 16px;
  font-weight: 600;
`;

export const DescriptionText = styled.Text<{ small?: boolean }>`
  color: #bdbdbd;
  font-size: ${(props) => (props.small ? "12px" : "14px")};
  text-align: center;
  width: 342px;
  font-weight: 400;
`;

export const ErrorMensage = styled.Text`
  font-size: 12px;
  color: red;
`;

export const SmallText = styled.Text`
  font-size: 12px;
`;
