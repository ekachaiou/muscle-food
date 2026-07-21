import { lifestyleArticles } from "../data/meals";

const categoryLabel = {
  health: "สุขภาพ",
  lifestyle: "ไลฟ์สไตล์",
};

export default function LifestyleSection() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {lifestyleArticles.map((article) => (
        <article
          key={article.id}
          className="bg-white rounded-2xl shadow-card overflow-hidden flex gap-0 hover:shadow-lg transition-shadow cursor-pointer"
        >
          <div className="w-32 sm:w-36 shrink-0">
            <img src={article.image} alt={article.title} className="w-full h-full object-cover min-h-[120px]" />
          </div>
          <div className="p-4 flex flex-col justify-center">
            <span className="text-[10px] font-bold text-brand-green uppercase tracking-wide">
              {categoryLabel[article.category]}
            </span>
            <h3 className="font-bold text-sm text-gray-900 leading-snug mt-1 line-clamp-2">
              {article.title}
            </h3>
            <p className="text-xs text-gray-500 mt-1 line-clamp-2">{article.excerpt}</p>
            <span className="text-[10px] text-gray-400 mt-2">อ่าน {article.readTime}</span>
          </div>
        </article>
      ))}
    </div>
  );
}
