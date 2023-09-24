export const SearchBar = ({ onSearch }) => {
  const onSearchBtnClick = evt => {
    evt.preventDefault();
    if (evt.target.elements.input.value.trim()) {
      onSearch(evt.target.elements.input.value);
    }
    evt.target.reset();
  };
  return (
    <div>
      <form action="" onSubmit={onSearchBtnClick}>
        <input type="text" name="input" />
        <button>Search</button>
      </form>
    </div>
  );
};
