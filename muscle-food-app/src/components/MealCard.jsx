export default function MealCard({ meal }) {
  return (
    <article className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="aspect-video">
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

      <div className="p-5">
        <span className="inline-block bg-green-600 text-white text-sm px-3 py-1 rounded-full mb-2">
          {meal.tag}
        </span>

        <h2 className="text-xl font-semibold text-gray-900 mb-3">{meal.title}</h2>

        <div className="grid grid-cols-4 gap-2 text-center mb-4">
          <div>
            <strong className="block text-blue-600 text-xl">{meal.protein}g</strong>
            <span className="text-sm text-gray-500">Protein</span>
          </div>
          <div>
            <strong className="block text-blue-600 text-xl">{meal.carb}g</strong>
            <span className="text-sm text-gray-500">Carb</span>
          </div>
          <div>
            <strong className="block text-blue-600 text-xl">{meal.fat}g</strong>
            <span className="text-sm text-gray-500">Fat</span>
          </div>
          <div>
            <strong className="block text-blue-600 text-xl">{meal.calories}</strong>
            <span className="text-sm text-gray-500">Calories</span>
          </div>
        </div>

        <div>
          <h3 className="font-medium text-gray-800 mb-2">วัตถุดิบ</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            {meal.ingredients.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
