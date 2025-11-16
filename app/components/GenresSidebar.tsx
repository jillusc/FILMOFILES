import { genres } from "@/app/data/genres";

interface Props {
  selectedGenre: number | null;
  onSelectGenre: (value: number) => void;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

export default function GenreSidebar({
  selectedGenre,
  onSelectGenre,
  setPage,
}: Props) {
  return (
    <aside className="w-[18%]">
      <h2 className="mb-4 text-lg font-semibold text-lightgrey ml-2.5">
        Genres
      </h2>

      <ul className="space-y-2">
        {genres.map((genre) => {
          const isSelected = genre.id === selectedGenre;

          return (
            <li key={genre.id}>
              <button
                onClick={() => {
                  onSelectGenre(genre.id);
                  setPage(1);
                }}
                className={`
                  w-35
                  text-sm
                  flex items-center justify-between
                  pl-3 py-1
                  rounded-full
                  
                  ${
                    isSelected
                      ? `
                        border border-[#FF5C39]
                        bg-darkteal
                        text-lightgrey
                        font-bold
                      `
                      : `
                        border border-transparent
                        text-lightgrey
                        hover:bg-[#154646]
                        hover:font-bold
                      `
                  }
                `}
              >
                {genre.name}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
