# Calculator App (TypeScript + Express + Jest + Playwright)

## Структура
```
calculator-app/
├─ src/
│  ├─ calc.ts
│  └─ server.ts
├─ public/
│  └─ index.html
├─ tests/
│  ├─ unit/calc.test.ts
│  ├─ integration/api.test.ts
│  └─ functional/ui.spec.ts
├─ test-docs/
│  ├─ requirements.md
│  ├─ test-plan.md
│  ├─ test-cases.md
│  ├─ traceability.md
│  └─ report.md
├─ playwright.config.ts
├─ package.json
├─ tsconfig.json
└─ .gitignore
```

## Запуск
```bash
npm install
npm run dev
# відкрий http://localhost:3000
```

## Тести
```bash
# юніт
npm run test:unit
# інтеграційні
npm run test:integration
# всі тести та покриття
npm test
npm run coverage
# UI/функціональні (запустить локальний сервер)
npm run test:functional
npx playwright show-report
```

## Збірка
```bash
npm run build
npm start
```
