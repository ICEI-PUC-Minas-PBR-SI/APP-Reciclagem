import React from 'react';
import MaterialItem, { MaterialItemProps } from '../MaterialItem';
import styled from 'styled-components';

const MaterialListContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 16px;
  flex-direction: column;
`;

interface MaterialListProps {
  items: MaterialItemProps[];
}

const MaterialList: React.FC<MaterialListProps> = ({ items }) => (
  <MaterialListContainer>
    {items.map((item, index) => (
      <MaterialItem key={index} name={item.name} type={item.type} image={item.image} />
    ))}
  </MaterialListContainer>
);

export default MaterialList;
