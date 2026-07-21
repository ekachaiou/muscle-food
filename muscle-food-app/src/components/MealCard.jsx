import { Clock, Play, Users } from "lucide-react";

export default function MealCard({ meal, compact = false }) {
  if (compact) {
    return (
      <article className="shrink-0 w-44 bg-white rounded-2xl shadow-card overflow-hidden cursor-pointer hover:shadow-lg transition-shadow">
        <div className="relative h-28">
          <img src={meal.image} alt={meal.title} className="w-full h-full object-cover" />
          <span className="absolute top-2 left-2 bg-brand-red text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
            {meal.promo}
          </span>
        </div>
        <div className="p-3">
          <h3 className="font-bold text-sm text-gray-900 leading-tight">{meal.title}</h3>
          <p className="text-xs text-gray-500 mt-0.5 line-clamp-1">{meal.subtitle}</p>
          <div className="flex items-center justify-between mt-2">
            <span className="text-brand-green font-bold text-sm">{meal.protein}g</span>
            <span className="text-xs text-gray-400">{meal.calories} kcal</span>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="bg-white rounded-2xl shadow-card overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
        <div className="aspect-video bg-gray-200">
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${meal.youtubeId}`}
            title={meal.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
        <div className={`absolute top-3 left-3 ${meal.accent} text-white text-xs font-bold px-3 py-1 rounded-full shadow`}>
          {meal.tag}
        </div>
        <div className="absolute top-3 right-3 bg-black/50 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
          <Play size={10} fill="white" />
          วิดีโอ
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-start gap-3 mb-2">
          <img src={meal.image} alt="" className="w-14 h-14 rounded-xl object-cover shrink-0" />
          <div>
            <h2 className="text-lg font-bold text-gray-900">{meal.title}</h2>
            <p className="text-sm text-gray-500">{meal.subtitle}</p>
          </div>
        </div>

        <p className="text-sm text-gray-600 mb-3 leading-relaxed">{meal.description}</p>

        <div className="flex gap-3 text-xs text-gray-500 mb-4">
          <span className="flex items-center gap-1">
            <Clock size={13} />
            {meal.cookTime}
          </span>
          <span className="flex items-center gap-1">
            <Users size={13} />
            {meal.servings} ที่
          </span>
        </div>

        <div className="grid grid-cols-4 gap-2 mb-4">
          {[
            { value: `${meal.protein}g`, label: "Protein", color: "text-brand-green" },
            { value: `${meal.carb}g`, label: "Carb", color: "text-brand-orange" },
            { value: `${meal.fat}g`, label: "Fat", color: "text-brand-red" },
            { value: meal.calories, label: "kcal", color: "text-purple-600" },
          ].map((stat) => (
            <div key={stat.label} className="bg-gray-50 rounded-xl py-2 text-center">
              <strong className={`block text-lg font-bold ${stat.color}`}>{stat.value}</strong>
              <span className="text-[10px] text-gray-400 uppercase">{stat.label}</span>
            </div>
          ))}
        </div>

        <div className="border-t pt-3 mb-3">
          <h3 className="text-sm font-semibold text-gray-700 mb-2">🛒 วัตถุดิบ</h3>
          <div className="flex flex-wrap gap-1.5">
            {meal.ingredients.map((item) => (
              <span
                key={item}
                className="text-xs bg-green-50 text-brand-green-dark border border-green-100 px-2.5 py-1 rounded-full"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-orange-50 rounded-xl p-3">
          <h3 className="text-sm font-semibold text-brand-orange mb-2">👨‍🍳 วิธีทำ</h3>
          <ol className="text-xs text-gray-600 space-y-1.5 list-decimal list-inside">
            {meal.steps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </div>
      </div>
    </article>
  );
}
