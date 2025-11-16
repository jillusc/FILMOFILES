interface Props {
  searchTerm: string;
  onSearchTermChange: (value: string) => void;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

function SearchBar({ searchTerm, onSearchTermChange, setPage }: Props) {
  return (
    <div className="w-full">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => {
          onSearchTermChange(e.target.value);
          setPage(1);
        }}
        placeholder="Search all films..."
        className="
    w-full
    px-3 py-1
    rounded-full
    bg-[#154646]
    text-lightgrey
    text-sm
    border border-[#868686]
    placeholder-[#b5b5b5]
    focus:outline-none
    focus:ring-1
    focus:ring-[#417272]
  "
      />
    </div>
  );
}

export default SearchBar;
