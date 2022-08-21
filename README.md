# 🧾 Kanban

## 📌 Skills

- React(CRA with TypeScript), Recoil, styled-components, react-beautiful-dnd

## 📌 Deploy URL

- [https://dingunote.github.io/kanban/](https://dingunote.github.io/kanban/)

## 📌 Issue

- ~~D&D할 때 연관이 없는 다른 요소들까지 모두 리렌더링 되기 때문에 지나치게 많은 리렌더링이 일어나는 문제가 있다.~~

## 📌 Refactoring

- D&D할 때 DraggableCard 컴포넌트의 연관이 없는 다른 요소들까지 모두 리렌더링 되기 때문에 지나치게 많은 리렌더링이 일어나는 문제가 있다. => React.memo()를 사용해서 prop이 변하지 않는 요소들은 리렌더링 되지 않게 수정

<!-- ## 📌 File Path

```bash
├── public                     Static Files
│
└── src
    ├── routes
    │   ├── Coins.tsx          Main Page
    │   ├── Coin.tsx           Detail Page
    │   ├── Chart.tsx          Detail/Chart Page
    │   └── Price.tsx          Detail/Price Page
    ├── api.tsx                API Source
    ├── App.tsx
    ├── index.tsx
    ├── GlobalStyle.tsx        Global Style Component
    ├── Router.tsx             Router Component
    └── theme.tsx             Theme Component
```

## 📌 Issue

- coin-paprika API가 유료화 되는 바람에 임시로 다른 API를 사용했지만 중간 중간 코인의 싱크가 맞지 않아 특정 코인의 차트와 가격 정보를 확인할 때 데이터가 없어서 에러 발생

## 📌 Features

- Dark Mode / Light Mode 기능 추가
  1. state를 사용하기 위해 기존에 `index.tsx`에서 Providing 하던 ThemeProvider와 theme를 App.tsx로 이동
  2. `theme.ts`에 Dark Theme, Light Theme 추가
  3. ApexCharts 라이브러리에도 Dark Mode, Light Mode 일 때 Chart 자체에 Dark, Light Mode 옵션을 사용하고 싶으나, Prop Drilling 발생
  4. `Recoil`을 사용해서 isDark Atom을 생성한 후 App 컴포넌트와 Chart 컴포넌트에서 상태 값을 가져와서 사용 -->
