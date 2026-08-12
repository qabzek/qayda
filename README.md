# QAYDA?

ҰБТ-дан кейінгі навигатор — 11-сынып оқушыларына профильдік пәндер комбинациясы бойынша мамандық, ЖОО, грант, өту балы, ауыл квотасы, кәсіп және жалақы туралы ақпарат беретін веб-сервис.

Стиль: **digital brutalism × editorial × Gen-Z**. Тіл: тек қазақ тілі (интерфейс).

## ⚠️ Деректер туралы маңызды ескерту

Бұл MVP-де әрбір сандық көрсеткіш (грант, өту балы, ауыл квотасы, жалақы, перспективалық индекс) **демо/үлгі дерек** ретінде белгіленген және UI-де сары `Үлгі дерек` бейджісімен көрсетіледі. Бұл нөмірлер QAYDA ойлап тапқан емес, бірақ ресми дереккөздермен де тексерілмеген — олар тек flow-ды көрсету үшін берілген.

**Production-ке шығармас бұрын:**
1. `src/data/groups.ts` — B-кодтар мен топ атауларын ресми классификатормен тексеру
2. `src/data/grants.ts`, `src/data/passingScores.ts`, `src/data/minimumScores.ts` — нақты сандарды testcenter.kz / egov.kz / ЖОО сайттарынан алу
3. `src/data/salaries.ts` — Enbek.kz немесе басқа ашық нарық дерегімен ауыстыру
4. `src/data/sources.ts` — әр жаңа деректің `Source` жазбасын қосу және сол `sourceId`-ды тиісті файлда пайдалану (сонда `Үлгі дерек` бейджісі жоғалып, нақты дереккөз көрсетіледі)

## Стек

- Next.js 16 (App Router, TypeScript, Turbopack)
- Tailwind CSS v4
- Framer Motion (анимациялар)
- Lucide Icons
- Fonts: Unbounded (display) + Manrope (body), `@fontsource` арқылы self-host етілген (қазақ әріптеріне — Ә Ғ Қ Ң Ө Ұ Ү Һ І — толық қолдау бар cyrillic-ext subset-імен)

## Іске қосу

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npm start
```

## Архитектура

```
src/
├── types/          — TypeScript типтері (Specialty, University, Grant, PassingScore...)
├── data/           — деректер көзі (қазір локал TS файлдар, болашақта Supabase)
│   ├── subjects.ts, combinations.ts, groups.ts, specialties.ts
│   ├── universities.ts, grants.ts, passingScores.ts, minimumScores.ts
│   ├── salaries.ts, perspectiveInputs.ts, sources.ts, quiz.ts
├── lib/
│   ├── data/index.ts   — data-access abstraction layer. UI ТЕК осы файлдан импорттайды,
│   │                      /data-ны тікелей емес. Supabase-ке көшкенде осы файлдың ішін ауыстыру жеткілікті.
│   └── perspective.ts  — перспективалық индекс есептеу (деректер жеткіліксіз болса,
│                          санды ойдан шығармай, "Дерек жеткіліксіз" қайтарады)
├── components/     — қайта пайдаланылатын UI бөліктер (BrutalistCard стилі globals.css-те)
└── app/            — беттер (App Router)
    ├── page.tsx                     — Басты бет
    ├── subjects/page.tsx            — Пән таңдау (2 қадам)
    ├── subjects/[combo]/page.tsx    — Мамандықтар тізімі (фильтр/сұрыптау)
    ├── specialties/[slug]/page.tsx  — Мамандық беті (негізгі контент беті)
    ├── universities/page.tsx        — ЖОО тізімі (қала фильтрі)
    ├── universities/[slug]/page.tsx — ЖОО беті
    ├── compare/page.tsx             — Салыстыру (макс 3 мамандық)
    ├── test/page.tsx                — "Маған не сәйкес?" тесті (детерминистік scoring, AI API жоқ)
    └── search/page.tsx              — Іздеу (десктопта header-де де бар)
```

## Мамандық қосу

1. `src/data/groups.ts` — жаңа `EducationGroup` жазбасы қосу (B-код, атауы, `subjectCombinationId`, `category`)
2. `src/data/specialties.ts` — сол `groupCode`-пен `Specialty` жазбасы қосу (сипаттама, не үйренесің, кәсіптер, компаниялар, `universityIds`)
3. `src/data/salaries.ts` — жалақы диапазоны
4. `src/data/perspectiveInputs.ts` — перспективалық индекс үшін кіріс мәндер (сұраныс/жалақы/грант/жұмыс/тренд, 0–100)
5. `src/data/grants.ts`, `src/data/passingScores.ts` — грант пен өту балы
6. `src/data/universities.ts` — тиісті ЖОО-ның `programSlugs` тізіміне жаңа slug қосу

## ЖОО қосу

`src/data/universities.ts`-ке жаңа `University` жазбасы қосу (`id`, `slug`, `name`, `city`, `programSlugs`).

## Өту балын/грантты жаңарту

`src/data/passingScores.ts` немесе `src/data/grants.ts`-те тиісті жазбаны өңдеу, `sourceId`-ды нақты дереккөзге (алдымен `src/data/sources.ts`-та жазба жасап) ауыстыру.

## Supabase-ге көшу (болашақта)

`src/lib/data/index.ts`-тегі әр функцияның денесін Supabase сұранысына ауыстыру. Функция қолтаңбалары (сигнатуралар) бірдей қалуы керек — UI компоненттерін өзгертудің қажеті жоқ.

## Белгілі шектеулер (MVP)

- Барлық сандық көрсеткіштер демо дерек (жоғарыдағы ескертуді қара)
- 8 мамандық, 5 ЖОО seed етілген — толық база кейін толықтырылады
- Auth жоқ (талап етілмейді); сүйікті/сақтау функциясы кейінге қалдырылды
- AI API пайдаланылмайды — тест детерминистік scoring-пен жұмыс істейді
