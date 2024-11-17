import React from "react";
import styled from "styled-components/native";

type TabTitleProps = {
  title: string;
  selected: boolean;
};

const TabTitle = ({ title, selected }: TabTitleProps) => {
  return <Title selected={selected}>{title}</Title>;
};

const Title = styled.Text<{ selected: boolean }>`
  font-size: 14px;
  line-height: 14px;
  text-align: center;
  width: 100%;
  color: ${({ selected }) => (selected ? "#fff" : "#000")};
`;

export default TabTitle;
