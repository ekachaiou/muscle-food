import { useMemo, useState } from "react";
import Header, { MobileSearch } from "./components/Header";
import HeroCarousel from "./components/HeroCarousel";
import SectionHeader from "./components/SectionHeader";
import PromoCarousel from "./components/PromoCarousel";
import CategoryFilter from "./components/CategoryFilter";
import MealCard from "./components/MealCard";
import LifestyleSection from "./components/LifestyleSection";
import Footer from "./components/Footer";
import { meals } from "./data/meals";

function filterMeals(query, category) {
  const keyword = query.trim().toLowerCase();

  return meals.filter((meal) => {
    const matchCategory = category === "all" || meal.category === category;
    if (!matchCategory) return false;
    if (!keyword) return true;

    const haystack = [
      meal.title,
      meal.tag,
      meal.subtitle,
      meal.description,
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
  const [category, setCategory] = useState("all");

  const filteredMeals = useMemo(
    () => filterMeals(searchQuery, category),
    [searchQuery, category]
  );

  const handleSearch = () => setSearchQuery(query);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header query={query} onQueryChange={setQuery} onSearch={handleSearch} />
      <MobileSearch query={query} onQueryChange={setQuery} onSearch={handleSearch} />
      <HeroCarousel />

      <main className="max-w-6xl mx-auto px-4 py-8 space-y-10">
        <section>
          <SectionHeader title="พิเศษสำหรับคุณ" subtitle="โปรโมชั่นและเมนูแนะนำประจำสัปดาห์" />
          <PromoCarousel />
        </section>

        <section>
          <SectionHeader title="มีอะไรใหม่อยากให้ลอง" subtitle="เมนูยอดนิยมสำหรับสายฟิต" />
          <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-2 -mx-1 px-1">
            {meals.slice(0, 6).map((meal) => (
              <MealCard key={meal.id} meal={meal} compact />
            ))}
          </div>
        </section>

        <section>
          <SectionHeader title="โปรดีๆ มีให้ทุกวัน" subtitle="เลือกตามเป้าหมายของคุณ" />
          <CategoryFilter active={category} onChange={setCategory} />
        </section>

        <section>
          <SectionHeader
            title="เมนูทั้งหมด"
            subtitle={
              searchQuery
                ? `ผลการค้นหา "${searchQuery}" — ${filteredMeals.length} รายการ`
                : `${filteredMeals.length} เมนู`
            }
            onMore={false}
          />

          {filteredMeals.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-2xl shadow-card">
              <span className="text-5xl">🔍</span>
              <p className="text-gray-500 mt-4 font-medium">ไม่พบเมนูที่ค้นหา</p>
              <button
                type="button"
                onClick={() => {
                  setQuery("");
                  setSearchQuery("");
                  setCategory("all");
                }}
                className="mt-4 text-brand-green font-semibold text-sm hover:underline"
              >
                ล้างตัวกรอง
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
              {filteredMeals.map((meal) => (
                <MealCard key={meal.id} meal={meal} />
              ))}
            </div>
          )}
        </section>

        <section>
          <SectionHeader title="ไลฟ์สไตล์" subtitle="สาระน่ารู้สำหรับสายฟิต" />
          <LifestyleSection />
        </section>
      </main>

      <Footer />
    </div>
  );
}
