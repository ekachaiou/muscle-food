export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-12">
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-full bg-brand-green flex items-center justify-center text-sm">
              💪
            </div>
            <span className="font-extrabold text-white text-lg">
              MUSCLE<span className="text-brand-yellow">-FOOD</span>
            </span>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed">
            รวมเมนูอาหารสำหรับสายฟิต โปรตีนสูง ทำเองได้ที่บ้าน พร้อมวิดีโอและข้อมูลโภชนาการ
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-white mb-3">เมนู</h3>
          <ul className="space-y-2 text-sm">
            {["โปรโมชั่น", "เมนูแนะนำ", "Meal Prep", "โปรตีนสูง", "คำนวณแคล"].map((item) => (
              <li key={item}>
                <button type="button" className="hover:text-brand-orange transition-colors">
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-white mb-3">ติดตามเรา</h3>
          <div className="flex gap-3">
            {["Facebook", "Instagram", "YouTube", "Line"].map((social) => (
              <button
                key={social}
                type="button"
                className="w-9 h-9 rounded-full bg-gray-700 hover:bg-brand-green transition-colors text-xs font-bold flex items-center justify-center"
              >
                {social[0]}
              </button>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-6">© 2026 Muscle-Food. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
