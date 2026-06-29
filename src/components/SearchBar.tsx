import { useState } from "react";
import { SearchIcon } from "lucide-react";

interface SearchBarProps {
  placeholder?: string;
}

export function SearchBar({ placeholder = "Buscar..." }: SearchBarProps) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: integrate with search API (Cloud Function)
    console.log("Search:", query);
  };

  return (
    <form onSubmit={handleSubmit} className="relative w-full max-w-xl mx-auto">
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-full border border-gray-300 bg-white dark:bg-gray-700 py-2 pl-10 pr-4 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
      <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
    </form>
  );
}
