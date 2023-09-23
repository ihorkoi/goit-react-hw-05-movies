import {
  ImgThumb,
  TrandsList,
  StyledLink,
  TrandlistItem,
} from './MovieTrands.styled';

export const MovieTrends = ({ movies }) => {
  return (
    <>
      <h1>Trending</h1>
      <TrandsList>
        {movies.map(({ id, poster_path, original_title }) => {
          return (
            <TrandlistItem key={id}>
              <StyledLink to={`movies/${id}`}>
                <ImgThumb>
                  <img
                    src={'https://image.tmdb.org/t/p/w300' + poster_path}
                    alt={original_title}
                  />
                </ImgThumb>
              </StyledLink>
            </TrandlistItem>
          );
        })}
      </TrandsList>
    </>
  );
};
