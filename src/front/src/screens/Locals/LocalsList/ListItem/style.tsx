import styled from "styled-components/native";

export const ListItemContainer = styled.View`
  flex-direction: row;
  padding: 8px 0;
  align-items: center;
  gap: 12px;
`;

export const ListItemImage = styled.Image`
  height: 64px;
  width: 80px;
  border-radius: 12px;
`;

export const ListItemTextContainer = styled.View`
  flex: 1;
  gap: 2px;
`;

export const ListItemTitle = styled.Text`
  font-size: 16px;
  line-height: 24px;
`;

export const ListItemSubtitle = styled.Text`
  font-size: 14px;
  line-height: 20px;
  color: #a09cab;
`;

export const PointsBadge = styled.View`
  background-color: #eaefd3;
  border-radius: 6px;
  padding: 4px 8px;
`;

export const PointsText = styled.Text`
  font-size: 10px;
  color: #2f8f31;
  font-weight: bold;
`;
