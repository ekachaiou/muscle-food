import { useMemo, useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import MealCard from "./components/MealCard";
import { meals } from "./data/meals";

function filterMeals(query) {
  const keyword = query.trim().toLowerCase();
  if (!keyword) return meals;

  return meals.filter((meal) => {
    const haystack = [
      meal.title,
      meal.tag,
      ...meal.ingredients,
    ]
      .join(" ")
      .toLowerCase();

    return haystack.includes(keyword);
  });
}

export default function App() {
  const [query, setQuery] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredMeals = useMemo(() => filterMeals(searchQuery), [searchQuery]);

  return (
    <div className="min-h-screen bg-slate-100">
      <Header />

      <main className="w-[90%] max-w-6xl mx-auto py-8">
        <SearchBar
          value={query}
          onChange={setQuery}
          onSubmit={() => setSearchQuery(query)}
        />

        {filteredMeals.length === 0 ? (
          <p className="text-center text-gray-500 py-12">ไม่พบเมนูที่ค้นหา</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {filteredMeals.map((meal) => (
              <MealCard key={meal.id} meal={meal} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
