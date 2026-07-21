import { Bell, Heart, Search, User } from "lucide-react";

const navItems = ["หน้าแรก", "โปรโมชั่น", "เมนูแนะนำ", "Meal Prep", "โปรตีน", "ไลฟ์สไตล์"];

export default function Header({ query, onQueryChange, onSearch }) {
  return (
    <header className="sticky top-0 z-50 shadow-md">
      <div className="bg-brand-green text-white">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 shrink-0">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-xl shadow">
              💪
            </div>
            <div>
              <div className="font-extrabold text-lg leading-tight tracking-tight">
                MUSCLE<span className="text-brand-yellow">-FOOD</span>
              </div>
              <div className="text-[10px] text-green-100">เพื่อนคู่ใจสายฟิต... ใกล้ๆ คุณ</div>
            </div>
          </div>

          <form
            className="hidden sm:flex flex-1 max-w-md"
            onSubmit={(e) => {
              e.preventDefault();
              onSearch?.();
            }}
          >
            <div className="flex w-full bg-white rounded-full overflow-hidden shadow-sm">
              <input
                type="text"
                value={query}
                onChange={(e) => onQueryChange(e.target.value)}
                placeholder="ค้นหาเมนู วัตถุดิบ..."
                className="flex-1 px-4 py-2 text-sm text-gray-800 outline-none"
              />
              <button
                type="submit"
                className="px-4 bg-brand-orange hover:bg-orange-600 transition-colors"
                aria-label="ค้นหา"
              >
                <Search size={18} className="text-white" />
              </button>
            </div>
          </form>

          <div className="flex items-center gap-3 text-white shrink-0">
            <button type="button" className="hover:opacity-80" aria-label="รายการโปรด">
              <Heart size={20} />
            </button>
            <button type="button" className="hover:opacity-80" aria-label="แจ้งเตือน">
              <Bell size={20} />
            </button>
            <button type="button" className="hidden md:flex items-center gap-1 text-sm hover:opacity-80">
              <User size={18} />
              เข้าสู่ระบบ
            </button>
          </div>
        </div>
      </div>

      <nav className="bg-white border-b border-gray-200 overflow-x-auto hide-scrollbar">
        <div className="max-w-6xl mx-auto px-4 flex gap-1">
          {navItems.map((item, i) => (
            <button
              key={item}
              type="button"
              className={`shrink-0 px-4 py-3 text-sm font-medium transition-colors ${
                i === 0
                  ? "text-brand-green border-b-2 border-brand-green"
                  : "text-gray-600 hover:text-brand-green"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </nav>
    </header>
  );
}

export function MobileSearch({ query, onQueryChange, onSearch }) {
  return (
    <form
      className="sm:hidden px-4 py-3 bg-white border-b"
      onSubmit={(e) => {
        e.preventDefault();
        onSearch?.();
      }}
    >
      <div className="flex bg-gray-100 rounded-full overflow-hidden">
        <input
          type="text"
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          placeholder="ค้นหาเมนู..."
          className="flex-1 px-4 py-2.5 text-sm bg-transparent outline-none"
        />
        <button type="submit" className="px-4 text-brand-green">
          <Search size={18} />
        </button>
      </div>
    </form>
  );
}
