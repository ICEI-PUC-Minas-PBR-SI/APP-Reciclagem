import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: column;
  flex: 1;
  gap: 8px;
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
