import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { heroSlides } from "../data/meals";

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % heroSlides.length);
        setFade(true);
      }, 300);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (index) => {
    if (index === current) return;
    setFade(false);
    setTimeout(() => {
      setCurrent(index);
      setFade(true);
    }, 300);
  };

  const prev = () => goTo((current - 1 + heroSlides.length) % heroSlides.length);
  const next = () => goTo((current + 1) % heroSlides.length);

  const slide = heroSlides[current];

  return (
    <section className="relative overflow-hidden bg-gray-900">
      <div
        className={`relative h-[280px] sm:h-[360px] md:h-[420px] transition-opacity duration-300 ${
          fade ? "opacity-100" : "opacity-0"
        }`}
      >
        <img
          src={slide.image}
          alt={slide.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className={`absolute inset-0 bg-gradient-to-r ${slide.overlay}`} />

        <div className="relative z-10 h-full max-w-6xl mx-auto px-4 flex items-center">
          <div className="max-w-lg text-white">
            <span className="inline-block bg-brand-orange text-white text-xs font-bold px-3 py-1 rounded-full mb-3 shadow-lg">
              {slide.badge}
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold leading-tight mb-2 drop-shadow-lg">
              {slide.title}
            </h1>
            <p className="text-brand-yellow font-semibold text-base md:text-lg mb-1">
              {slide.subtitle}
            </p>
            <p className="text-white/85 text-sm md:text-base mb-5 max-w-md">
              {slide.description}
            </p>
            <button
              type="button"
              className="bg-white text-brand-green hover:bg-brand-yellow hover:text-gray-900 font-bold px-6 py-2.5 rounded-full text-sm transition-all shadow-lg"
            >
              {slide.cta}
            </button>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={prev}
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur text-white flex items-center justify-center transition-colors"
        aria-label="สไลด์ก่อนหน้า"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        type="button"
        onClick={next}
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur text-white flex items-center justify-center transition-colors"
        aria-label="สไลด์ถัดไป"
      >
        <ChevronRight size={24} />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`สไลด์ ${i + 1}`}
            className={`h-2 rounded-full transition-all ${
              i === current ? "bg-brand-orange w-6" : "bg-white/50 w-2 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
