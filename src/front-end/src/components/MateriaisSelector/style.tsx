import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Label = styled.label`
  color: #1c1b1f;
  font-size: 14px;
  font-weight: 500;
`;

export const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: space-around;
  width: 100%;
`;

interface TagProps {
  selected: boolean;
}

export const Tag = styled.div<TagProps>`
  display: flex;
  padding: 6px 8px;
  border-radius: 8px;
  background-color: ${({ selected }) => (selected ? '#EAEFD3' : '#F4F4F4')};

  color: #003f24;
  font-size: 14px;

  cursor: pointer;
  transition:
    background-color 0.2s,
    border-color 0.2s;

  &:hover {
    border-color: #4caf50;
  }
`;
