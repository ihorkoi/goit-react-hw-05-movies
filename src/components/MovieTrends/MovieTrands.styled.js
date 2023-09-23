import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const TrandsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;
export const TrandlistItem = styled.li`
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

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
