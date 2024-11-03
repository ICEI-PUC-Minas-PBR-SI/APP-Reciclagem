import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: column;
  gap: 4px;
  margin-bottom: 12px;
`;

export const Label = styled.Text`
  color: #1c1b1f;
  font-size: 14px;
  font-weight: 500;
`;

export const TagsContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: space-between;
`;

interface TagProps {
  selected: boolean;
}

export const Tag = styled.TouchableOpacity<TagProps>`
  padding: 6px 8px;
  border-radius: 8px;
  background-color: ${({ selected }) => (selected ? "#EAEFD3" : "#F4F4F4")};
  border-width: 1px;
  border-color: ${({ selected }) => (selected ? "#4CAF50" : "transparent")};

  justify-content: center;
  align-items: center;

  flex-grow: 1;

  transition: background-color 0.2s, border-color 0.2s;
`;
