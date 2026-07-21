import { promos } from "../data/meals";

export default function PromoCarousel() {
  return (
    <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-2 -mx-1 px-1">
      {promos.map((promo) => (
        <article
          key={promo.id}
          className="shrink-0 w-64 rounded-2xl overflow-hidden shadow-card cursor-pointer hover:scale-[1.02] transition-transform bg-white"
        >
          <div className="relative h-36">
            <img src={promo.image} alt={promo.title} className="w-full h-full object-cover" />
            <div className={`absolute inset-0 bg-gradient-to-t ${promo.color} opacity-60`} />
            <span className="absolute top-3 right-3 bg-brand-red text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
              {promo.badge}
            </span>
          </div>
          <div className="p-4">
            <h3 className="font-bold text-gray-900 leading-tight">{promo.title}</h3>
            <p className="text-gray-500 text-sm mt-1">{promo.subtitle}</p>
            <p className="text-brand-green text-xs font-medium mt-2">{promo.period}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
