<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# הפינה החמה

אתר מאפייה בבאר שבע. העסק מוכר, האתר הישן ב-Wix שבור. כאן בונים את האתר החדש.

## מה לקרוא קודם

1. `content/README.md` — איפה חיים השעות, הטלפון והתפריט
2. `content/business.json` — פרטי העסק
3. `.cursor/rules/` — כללים קצרים לפי סוג קובץ

## מבנה

```
content/                 מקור האמת (JSON בלבד)
src/app/                 עמודים: / /menu /about /visit
src/components/          מעטפת, לוגו, שעות
src/lib/content.ts       טעינת ה-JSON לקומפוננטות
public/photos/           תמונות אמיתיות בלבד
```

## אסור

- להמציא מנות, מחירים, שעות, כשרות או רשתות חברתיות
- להחזיר ווידג'טים של Wix, חנות, או התחברות
- לשנות טקסט שיווקי בתוך JSX במקום `content/copy.json`
- להשתמש בתמונות סטוק של מאפים

## מותר / רצוי

- לעצב מחדש קומפוננטות כל עוד הנתונים מגיעים מ-`content/`
- להחליף את הלוגו ב-SVG/PNG רשמי כשיגיע מהעסק
- לסמן `needsConfirmation: false` רק אחרי שהבעלים אישרו

## הרצה

```bash
npm run dev
```

האתר נפתח ב-http://localhost:3000
