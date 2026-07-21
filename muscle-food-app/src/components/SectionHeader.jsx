import { ChevronRight } from "lucide-react";

export default function SectionHeader({ title, subtitle, onMore }) {
  return (
    <div className="flex items-end justify-between mb-4 px-1">
      <div>
        <h2 className="text-xl font-bold text-gray-900">{title}</h2>
        {subtitle && <p className="text-sm text-gray-500 mt-0.5">{subtitle}</p>}
      </div>
      {onMore !== false && (
        <button
          type="button"
          className="flex items-center gap-0.5 text-brand-green text-sm font-semibold hover:underline shrink-0"
        >
          ดูเพิ่มเติม
          <ChevronRight size={16} />
        </button>
      )}
    </div>
  );
}
