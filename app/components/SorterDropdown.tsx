"use client";
import { useState } from "react";
import { FaCaretDown } from "react-icons/fa";

interface Props {
  sortOrder: string;
  onSelectSortOrder: (value: string) => void;
}

const sortOptions = [
  { value: "popularity", label: "Popularity" },
  { value: "az", label: "Title (A–Z)" },
  { value: "za", label: "Title (Z–A)" },
  { value: "rating", label: "Rating" },
  { value: "newest", label: "Release Date (Newest)" },
];

export default function SorterDropdown({
  sortOrder,
  onSelectSortOrder,
}: Props) {
  const [open, setOpen] = useState(false);

  const current = sortOptions.find((o) => o.value === sortOrder);

  return (
    <div className="px-10 flex justify-end">
      <div className="relative inline-block">
        <button onClick={() => setOpen(!open)} className="dropdown-btn">
          {current ? current.label : "Popularity"}
          <FaCaretDown className="h-4 w-4 ml-2 text-lightgrey" />
        </button>

        {open && (
          <div className="dropdown-menu absolute left-0 top-full mt-1 w-full">
            <ul className="py-1">
              {sortOptions.map((option) => (
                <li key={option.value}>
                  <button
                    className="dropdown-item w-full text-left"
                    onClick={() => {
                      onSelectSortOrder(option.value);
                      setOpen(false);
                    }}
                  >
                    {option.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
