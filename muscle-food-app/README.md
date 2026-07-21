# Muscle Food — คู่มือติดตั้งและ Deploy (Cloudflare Pages)

เว็บแอป **Muscle Meal Library** ใช้ **React + Vite + Tailwind** deploy บน **Cloudflare Pages**

โครงสร้างคล้าย [OrangeLash](https://github.com/babyballl/OrangeLash) แต่ใช้ Cloudflare แทน Vercel + Firebase

---

## ส่วนที่ 1: รันทดสอบในเครื่อง

ต้องมี [Node.js](https://nodejs.org) 18 ขึ้นไป

```bash
cd muscle-food-app
npm install
npm run dev
```

เปิด http://localhost:5173

---

## ส่วนที่ 2: Deploy ขึ้น Cloudflare Pages

### แบบผ่าน GitHub (แนะนำ)

1. Push โปรเจกต์ขึ้น GitHub
2. เข้า [Cloudflare Dashboard](https://dash.cloudflare.com) > **Workers & Pages** > **Create**
3. เลือก **Pages** > **Connect to Git**
4. เลือก repository `muscle-food`
5. ตั้งค่า Build:

| ค่า | การตั้งค่า |
|-----|-----------|
| Framework preset | Vite |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Root directory | `muscle-food-app` |

6. กด **Save and Deploy**

### แบบ Deploy จากเครื่อง (Wrangler CLI)

```bash
npm install -g wrangler
wrangler login
cd muscle-food-app
npm run build
wrangler pages deploy dist --project-name=muscle-food
```

---

## ส่วนที่ 3: ต่อ Custom Domain (ถ้ามี)

1. Cloudflare Pages > Project > **Custom domains**
2. เพิ่มโดเมนของคุณ
3. ถ้าโดเมนอยู่ใน Cloudflare แล้ว DNS จะตั้งให้อัตโนมัติ

---

## โครงสร้างโปรเจกต์

```
muscle-food/
├── index.html              # หน้าเดิม (legacy)
└── muscle-food-app/        # React app หลัก
    ├── src/
    │   ├── components/     # Header, SearchBar, MealCard
    │   ├── data/meals.js   # ข้อมูลเมนู
    │   └── App.jsx
    ├── public/_redirects   # SPA routing สำหรับ Cloudflare
    ├── wrangler.toml       # Cloudflare config
    └── package.json
```

---

## ขั้นตอนถัดไป (ถ้าต้องการ)

- **Cloudflare D1** — เก็บเมนูในฐานข้อมูล SQL
- **Cloudflare Workers** — API สำหรับ CRUD เมนู
- **Cloudflare R2** — เก็บรูปภาพเมนู

แจ้งได้ถ้าต้องการให้ช่วยเพิ่มส่วน backend บน Cloudflare
