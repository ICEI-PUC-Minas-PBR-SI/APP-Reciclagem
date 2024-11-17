import React from "react";
import { View, Text, Image } from "react-native";
import {
  ListItemContainer,
  ListItemImage,
  ListItemTextContainer,
  ListItemTitle,
  ListItemSubtitle,
  PointsBadge,
  PointsText,
} from "./style";

interface ListItemProps {
  title: string;
  type: string;
  imageSource: string;
}

export const ListItem: React.FC<ListItemProps> = ({
  title,
  imageSource,
  type,
}) => {
  return (
    <ListItemContainer>
      <ListItemTextContainer>
        <ListItemTitle>{title}</ListItemTitle>
      </ListItemTextContainer>
      <PointsBadge>
        <PointsText>{type}</PointsText>
      </PointsBadge>
    </ListItemContainer>
  );
};
