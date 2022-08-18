## 프리온보딩 일지

<a href="https://kagrin97-blog.vercel.app/blog/other-%ED%94%84%EB%A6%AC%EC%98%A8%EB%B3%B4%EB%94%A98%EC%9B%94%EC%B1%8C%EB%A6%B0%EC%A7%80[1-1]" target='_blank'>원티드 프리온보딩 8월 챌린지 [1-1] 일지</a>

<a href="https://kagrin97-blog.vercel.app/blog/other-%ED%94%84%EB%A6%AC%EC%98%A8%EB%B3%B4%EB%94%A98%EC%9B%94%EC%B1%8C%EB%A6%B0%EC%A7%80[1-2]" target='_blank'>원티드 프리온보딩 8월 챌린지 [1-2] 일지</a>

<a href="https://kagrin97-blog.vercel.app/blog/other-%ED%94%84%EB%A6%AC%EC%98%A8%EB%B3%B4%EB%94%A98%EC%9B%94%EC%B1%8C%EB%A6%B0%EC%A7%80[2-1]" target='_blank'>원티드 프리온보딩 8월 챌린지 [2-1] 일지</a>

## 🎉 프로젝트 실행

```bash
> npm start // 클라이언트와 서버가 실행됩니다.
```

## 🚀🚀🚀🚀🚀🚀media-query시 리스트와 상세정보가 별로 나이스하지않음

## 🚀 리팩토링 Before -> After

- typescript의 any를 남발하던 프로젝트에서 any를 모두 삭제 했습니다.

- 반복되는 타입은 type폴더에 따로 타입파일을 만들었습니다.

- 사용처를 알아보기 힘든 Boolean 타입 변수 이름을 is- 를 붙여 명확히 구분 했습니다.

- 자주사용하는 변수를 자식 컴포넌트에 props로 5개씩 전달 하다가 zustand를 사용해서 store에 저장해 사용했습니다.

- 한가지 함수에 여러가지 비슷한 기능을 넣었는데 기능 별로 함수들을 구분해 만들었습니다.

- 기존에 컴포넌트에서 서버와 api통신을 하는 함수를 api 폴더에 기능별로 파일을 만들어 사용했습니다.

- 서버와 통신하는 파일들을 useGetTodos 같은 커스텀훅안에서 react-query 사용해 커스텀훅을 사용해 데이터를 CRUD 합니다.

---

# 🎄 Project Tree || Before -> After

## 리팩토링전 Before Tree

```
wanted-pre-onboarding-challenge-fe-1
├─ package-lock.json
├─ .gitignore
├─ package.json
├─ README.md
├─ server (간략)
└─ client
   ├─ package-lock.json
   ├─ src
   │  ├─ react-app-env.d.ts
   │  ├─ reportWebVitals.ts
   │  ├─ setupTests.ts
   │  ├─ components
   │  │  ├─ AuthForm.tsx
   │  │  ├─ TodoForm.tsx
   │  │  ├─ Nav.tsx
   │  │  ├─ TodoDetail.tsx
   │  │  └─ TodoList.tsx
   │  ├─ index.tsx
   │  ├─ App.tsx
   │  └─ router
   │     ├─ Auth.tsx
   │     ├─ Detail.tsx
   │     └─ Home.tsx
   ├─ .gitignore
   ├─ package.json
   ├─ tsconfig.json
   └─ public
      ├─ robots.txt
      ├─ logo192.png
      ├─ logo512.png
      ├─ favicon.ico
      ├─ index.html
      └─ manifest.json

```

## 리팩토링후 After Tree

```
wanted-pre-onboarding-challenge-fe-1
├─ package-lock.json
├─ .gitignore
├─ package.json
├─ README.md
├─ server (간략)
└─ client
   ├─ package-lock.json
   ├─ src
   │  ├─ react-app-env.d.ts
   │  ├─ types
   │  │  └─ todo.ts
   │  ├─ reportWebVitals.ts
   │  ├─ store
   │  │  ├─ useDetailTodoStore.ts
   │  │  ├─ useEditTodoStore.ts
   │  │  ├─ useRenderStore.ts
   │  │  └─ useNullTodoStore.ts
   │  ├─ hooks
   │  │  ├─ useDeleteTodo.ts
   │  │  ├─ useUpdateTodo.ts
   │  │  ├─ useAddTodo.ts
   │  │  ├─ useGetDetail.ts
   │  │  └─ useGetTodos.ts
   │  ├─ setupTests.ts
   │  ├─ components
   │  │  ├─ AuthForm.tsx
   │  │  ├─ TodoForm.tsx
   │  │  ├─ Nav.tsx
   │  │  ├─ TodoDetail.tsx
   │  │  └─ TodoList.tsx
   │  ├─ index.tsx
   │  ├─ App.tsx
   │  ├─ router
   │  │  ├─ Auth.tsx
   │  │  ├─ Detail.tsx
   │  │  └─ Home.tsx
   │  └─ api
   │     ├─ auth
   │     │  └─ AuthApi.ts
   │     └─ todo
   │        ├─ TodoDeleteApi.ts
   │        ├─ TodoDetailsApi.ts
   │        ├─ TodoAddApi.ts
   │        ├─ TodoGetApi.ts
   │        └─ TodoUpdateApi.ts
   ├─ .gitignore
   ├─ package.json
   ├─ tsconfig.json
   └─ public
      ├─ robots.txt
      ├─ logo192.png
      ├─ logo512.png
      ├─ favicon.ico
      ├─ index.html
      └─ manifest.json

```
