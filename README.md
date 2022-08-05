## 🎉 프로젝트 실행

```bash
> npm start // 클라이언트와 서버가 실행됩니다.
```

---

## 🚀 Login / SignUp

- 이메일 조건 체크는 정규표현식을 사용했습니다.

- 토큰 유효성 검사는 validator 패키지의 isJWT 메소드를 사용했습니다.

- 리다이렉트 방식은 각각 다른 방식을 사용했습니다. (reload, useNavigate)

## 🔥 Todo List

- axios를 사용해서 todo 생성, 삭제, 수정 기능을 구현했습니다.

- axios를 이용했을때 에러가 나면 사용자한테 에러 내용을 알려줍니다.

- 각각 todo를 동적 라우팅을 사용해 새로고침은 데이터 유지 뒤로가기시 이전 데이터를 보여줍니다.

---

## 📝 Login / SignUp 체크 리스트

- /auth 경로에 로그인 / 회원가입 기능을 개발합니다
  - 로그인, 회원가입을 별도의 경로로 분리해도 무방합니다
  - [x] 최소한 이메일, 비밀번호 input, 제출 button을 갖도록 구성해주세요
- 이메일과 비밀번호의 유효성을 확인합니다
  - [x] 이메일 조건 : 최소 `@`, `.` 포함
  - [x] 비밀번호 조건 : 8자 이상 입력
  - [x] 이메일과 비밀번호가 모두 입력되어 있고, 조건을 만족해야 제출 버튼이 활성화 되도록 해주세요
- 로그인 API를 호출하고, 올바른 응답을 받았을 때 루트 경로로 이동시켜주세요
  - [x] 응답으로 받은 토큰은 로컬 스토리지에 저장해주세요
  - [x] 다음 번에 로그인 시 토큰이 존재한다면 루트 경로로 리다이렉트 시켜주세요
  - [x] 어떤 경우든 토큰이 유효하지 않다면 사용자에게 알리고 로그인 페이지로 리다이렉트 시켜주세요

## 📝 Todo List 체크 리스트

- Todo List API를 호출하여 Todo List CRUD 기능을 구현해주세요
  - [x] 목록 / 상세 영역으로 나누어 구현해주세요
  - [x] Todo 목록을 볼 수 있습니다.
  - [x] Todo 추가 버튼을 클릭하면 할 일이 추가 됩니다.
  - [x] Todo 수정 버튼을 클릭하면 수정 모드를 활성화하고, 수정 내용을 제출하거나 취소할 수 있습니다.
  - [x] Todo 삭제 버튼을 클릭하면 해당 Todo를 삭제할 수 있습니다.
- 한 화면 내에서 Todo List와 개별 Todo의 상세를 확인할 수 있도록 해주세요.
  - [x] 새로고침을 했을 때 현재 상태가 유지되어야 합니다.
  - [x] 개별 Todo를 조회 순서에 따라 페이지 뒤로가기를 통하여 조회할 수 있도록 해주세요.
- 한 페이지 내에서 새로고침 없이 데이터가 정합성을 갖추도록 구현해주세요

  - [x] 수정되는 Todo의 내용이 목록에서도 실시간으로 반영되어야 합니다

---

## 🎄 Project Tree

```
wanted-pre-onboarding-challenge-fe-1
├─ package-lock.json
├─ .gitignore
├─ package.json
├─ README.md
├─ server
│  ├─ package-lock.json
│  ├─ services
│  │  ├─ userService.ts
│  │  └─ todoService.ts
│  ├─ routes
│  │  ├─ todoRouter.ts
│  │  └─ userRouter.ts
│  ├─ types
│  │  ├─ users.ts
│  │  ├─ todos.ts
│  │  └─ auth.ts
│  ├─ .gitignore
│  ├─ package.json
│  ├─ db
│  │  └─ db.json
│  ├─ controllers
│  │  ├─ todoController.ts
│  │  └─ authController.ts
│  ├─ utils
│  │  ├─ responseUtils.ts
│  │  ├─ validator.ts
│  │  └─ authorizeUtils.ts
│  ├─ middleware
│  │  └─ validateToken.ts
│  ├─ app.ts
│  ├─ models
│  │  └─ db.ts
│  ├─ yarn-error.log
│  ├─ yarn.lock
│  └─ index.ts
├─ tsconfig.json
└─ client
   ├─ package-lock.json
   ├─ src
   │  ├─ react-app-env.d.ts
   │  ├─ reportWebVitals.ts
   │  ├─ setupTests.ts
   │  ├─ components
   │  │  ├─ AuthForm.tsx
   │  │  ├─ TodoForm.tsx
   │  │  ├─ TodoDetail.tsx
   │  │  └─ TodoList.tsx
   │  ├─ index.tsx
   │  ├─ App.tsx
   │  └─ router
   │     ├─ Auth.tsx
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
