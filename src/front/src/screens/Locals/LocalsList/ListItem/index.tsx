import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
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
  score?: boolean;
  subtitle: string;
  onPress: () => void;
}

export const ListItem: React.FC<ListItemProps> = ({
  title,
  subtitle,
  score,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <ListItemContainer>
        <ListItemTextContainer>
          <ListItemTitle>{title}</ListItemTitle>
          <ListItemSubtitle>{subtitle}</ListItemSubtitle>
        </ListItemTextContainer>
        {score && (
          <PointsBadge>
            <PointsText>Score</PointsText>
          </PointsBadge>
        )}
      </ListItemContainer>
    </TouchableOpacity>
  );
};
