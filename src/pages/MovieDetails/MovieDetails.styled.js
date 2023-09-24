import { styled } from 'styled-components';

export const Container = styled.div`
  padding: 12px;
`;

export const PageWrapper = styled.div`
  display: flex;
  padding: 12px 0;
  border-bottom: 1px solid black;
`;

export const ImgThumb = styled.div`
  margin-right: 12px;
  box-shadow: rgba(100, 100, 111, 0.4) 0px 7px 29px 0px;
`;
export const BackLink = styled.a`
  link-style: none;
`;

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const Genres = styled.ul`
  margin-bottom: 8px;
  padding-bottom: 8px;
  border-bottom: 1px solid black;
  li {
    margin-bottom: 4px;
  }
`;
