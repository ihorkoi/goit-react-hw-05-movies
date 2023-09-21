export const SearchBar = ({ onSearch }) => {
  return (
    <div>
      <form action="" onSubmit={onSearch}>
        <input type="text" name="input" />
        <button>Search</button>
      </form>
    </div>
  );
};
