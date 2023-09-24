import styled from 'styled-components';

export const ResultsList = styled.ul`
  margin-top: 12px;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;
export const ResultslistItem = styled.li`
  overflow: hidden;
  height: 450px;
  border-radius: 4px;
  transition: transform 250ms;
  &:hover {
    transform: scale(1.03);
  }
`;
export const ImgThumb = styled.div`
  width: 300px;
`;
