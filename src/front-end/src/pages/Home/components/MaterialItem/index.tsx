import styled from 'styled-components';

export interface MaterialItemProps {
  name: string;
  type: string;
  image: string;
}

const MaterialItemContainer = styled.div`
  align-items: center;
  display: flex;
  gap: 12px;
`;

const MaterialImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 6px;
`;

const MaterialTextContent = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
`;

const MaterialName = styled.h4`
  color: #1c1b1f;
  font-size: 16px;
  font-weight: 600;
`;

const MaterialType = styled.span`
  color: #a09cab;
  font-size: 14px;
`;

function MaterialItem({ name, type, image }: MaterialItemProps) {
  return (
    <MaterialItemContainer>
      <MaterialImage src={image} alt={name} />
      <MaterialTextContent>
        <MaterialName>{name}</MaterialName>
        <MaterialType>{type} </MaterialType>
      </MaterialTextContent>
    </MaterialItemContainer>
  );
}

export default MaterialItem;
