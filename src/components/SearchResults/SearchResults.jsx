export const SearchResults = ({ movies }) => {
  return (
    <ul>
      {movies.map(result => {
        return <li>{result.original_title}</li>;
      })}
    </ul>
  );
};
