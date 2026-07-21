import { categories } from "../data/meals";

export default function CategoryFilter({ active, onChange }) {
  return (
    <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-1 -mx-1 px-1">
      {categories.map((cat) => (
        <button
          key={cat.id}
          type="button"
          onClick={() => onChange(cat.id)}
          className={`shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all ${
            active === cat.id
              ? "bg-brand-green text-white shadow-md"
              : "bg-white text-gray-600 border border-gray-200 hover:border-brand-green hover:text-brand-green"
          }`}
        >
          <span>{cat.emoji}</span>
          {cat.label}
        </button>
      ))}
    </div>
  );
}
