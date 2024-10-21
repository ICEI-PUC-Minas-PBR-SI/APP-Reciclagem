import styled, { css } from 'styled-components';

export const Card = styled.div<{ active?: boolean; disabled?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 6px;
  max-width: 120px;
  min-width: 96px;
  align-items: center;
  border-radius: 6px;
  padding: 6px;
  width: 100%;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  transition:
    transform 0.2s,
    opacity 0.2s;

  ${({ active }) =>
    active
      ? css`
          background-color: #003f24;
          border: none;
        `
      : css`
          background-color: transparent;
          border: 1px solid #e5e5e5;
          color: black;
          opacity: ${({ disabled }: any) => (disabled ? 0.8 : 1)};
        `}

  &:hover {
    ${({ disabled }) =>
      !disabled &&
      css`
        transform: scale(1.05);
      `}
  }
`;

export const CircleIcon = styled.div<{ active?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 24px;
  height: 48px;
  width: 48px;

  background-color: ${({ active }) => (active ? '#eaefd30f' : 'transparent')};
`;

export const IconWrapper = styled.div`
  font-size: 24px;
  text-align: center;
`;

export const Title = styled.div<{ active?: boolean }>`
  font-size: 14px;
  font-weight: 500;
  color: ${({ active }) => (active ? '#fff' : '#000')};
  text-align: center;
`;

export const ButtonsGroupContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  gap: 16px;
`;
