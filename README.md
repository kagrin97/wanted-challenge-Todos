## 1. 😎 최종 구현 영상

---

- ### 1-1) Login / SignUp / Check Token

  ***

  **/auth : 로그인, 회원가입, 토큰 생성, 삭제, 검사**

  <video controls width="470" src="https://user-images.githubusercontent.com/75124028/185750990-4984390c-ea51-48a4-a009-f217c15f1f53.mp4" ></video>

- ### 1-2) Todo 추가, Todo 상세 정보

  ***

  **/todo/:todoId : todo추가및 상세정보를 보여줍니다.**

  <video controls width="470" src="https://user-images.githubusercontent.com/75124028/185751538-0e478b0f-d0e0-4ce0-ae45-cf78bb93ae5a.mp4"></video>

- ### 1-3) Todo 수정, Todo 삭제

  ***

  **/todo/:todoId : todo수정 및 삭제합니다.**

  <video controls width="470" src="https://user-images.githubusercontent.com/75124028/185751578-9cd6019d-6e8f-44e9-8b85-18f35bace3a9.mp4"></video>

- ### 1-4) 반응형 디자인

  ***

  **todo 리스트와 상세 정보를 스크린사이즈 690을 기준으로 바뀝니다.**

  <video controls width="470" src="https://user-images.githubusercontent.com/75124028/185751615-6baed515-6950-47a4-9705-b1a1cfe565a6.mp4"></video>

## 2. 🎉 설치, 환경설정, 실행방법

---

- ### 2-1) 설치, 환경 설정

  ***

  ```bash
  > git clone https://github.com/kagrin97/wanted-pre-onboarding-challenge-fe-1.git

  > npm run setting // git clone후 처음 딱 한번 실행하는 script입니다.
  ```

- ### 2-2) 실행

  ***

  ```bash
  > npm run start // 클라이언트와 서버가 실행됩니다.
  ```

## 3. 🚀 구현된 기능 목록

---

- ### 3-1) Login / SignUp

  ***

  - [x] 이메일과 비밀번호가 모두 입력되어 있고, 조건을 만족해야 제출 버튼이 활성화 됩니다.

    - 이메일 조건 : 최소 @, . 포함
    - 비밀번호 조건 : 8자 이상 입력

  - [x] 회원가입이나 로그인에 성공했을시 응답으로 토큰을 받고 로컬스토리지에 저장합니다.

  - [x] 로그아웃시 토큰을 삭제합니다.

  - [x] 로그인 시 토큰이 존재한다면 루트 경로로 리다이렉트 됩니다.

  - [x] 어떤 경우든 토큰이 유효하지 않거나 존재하지 않으면 로그인 페이지로 리다이렉트 됩니다.

- ### 3-2) Todo List

  ***

  - [x] 목록 / 상세 영역으로 나누어 구현됩니다.

    - screen width가 690 아래일 경우 루트 경로에서는 상세 정보칸이 사라지고 todo경로일경우 목록과 상세 영역이 합쳐집니다.

  - [x] Todo 추가 버튼을 클릭하면 할 일이 추가 됩니다.

  - [x] Todo 수정 버튼을 클릭하면 수정 모드를 활성화하고, 수정 내용을 제출하거나 취소할 수 있습니다.

  - [x] Todo 쓰레기통 버튼을 클릭하면 해당 Todo를 삭제할 수 있습니다.

  - [x] 동적 라우팅으로 새로고침을 했을 때 현재 상태가 유지됩니다.

  - [x] 동적 라우팅으로 개별 Todo를 조회 순서에 따라 페이지 뒤로가기를 통하여 조회할 수 있습니다.

  - [x] 수정되는 Todo의 내용이 목록에서도 실시간으로 반영됩니다.

  - [x] Todo 리스트와 상세 정보창에 skeleton ui를 적용했습니다.

## 4. 🎨 사용한 프레임워크및 라이브러리

---

```json

/* client/package.json */

"dependencies": {
    "@emotion/react": "^11.10.0",
    "@emotion/styled": "^11.10.0",
    "@mui/icons-material": "^5.8.4",
    "@mui/material": "^5.10.1",                // mui를 사용해서 간단한 스타일링을 했습니다.
    "@testing-library/jest-dom": "^5.16.4",
    "@testing-library/react": "^13.3.0",
    "@testing-library/user-event": "^13.5.0",
    "@types/jest": "^27.5.2",
    "@types/node": "^16.11.47",
    "@types/react": "^18.0.15",
    "@types/react-dom": "^18.0.6",
    "@types/validator": "^13.7.5",
    "axios": "^0.27.2",                        // axios를 사용해 api를 사용합니다.
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-query": "^3.39.2",                  // react-query로 Server-State를 관리합니다.
    "react-router-dom": "^6.3.0",
    "react-scripts": "5.0.1",
    "typescript": "^4.7.4",
    "validator": "^13.7.0",                    // validator.isJWT 를사용해 토큰을 검사합니다.
    "web-vitals": "^2.1.4",
    "zustand": "^4.0.0"                        // zustand로 Client-State를 관리합니다.
  },
```

## 5. 📚 폴더 구조

---

- ### 5-1) 폴더 구조 설명

  ***

  자주 쓰이는 파일을 파일의 성질에 따라서 각각 폴더별로 구분을 했습니다.

  - **router** : 한 페이지를 구성하는 루트 파일입니다.

  - **components** : 페이지 안에서 자주 쓰이는 컴포넌트를 모아 놓았습니다.

  - **api** : axios로 api통신을 하는 함수를 모아놓은 폴더입니다.

  - **hooks** : React-query를 사용해 CRUD를 수행하는 hook을 모아놓은 폴더입니다.

  - **store** : 자주 쓰이는 변수와 함수를 모아놓은 폴더입니다.

  - **types** : 자주 쓰이는 타입을 모아놓은 폴더입니다.

- ### 5-2) 폴더 구조 tree

  ***

  ```
  wanted-pre-onboarding-challenge-fe-1
  ├─ package-lock.json
  ├─ .gitignore
  ├─ package.json
  ├─ README.md
  ├─ server
  ├─ tsconfig.json
  └─ client
  ├─ package-lock.json
  ├─ src
  │  ├─ react-app-env.d.ts
  │  ├─ types
  │  │  └─ todo.ts
  │  ├─ reportWebVitals.ts
  │  ├─ store
  │  ├─ hooks
  │  │  ├─ auth
  │  │  └─ todo
  │  ├─ setupTests.ts
  │  ├─ components
  │  ├─ index.tsx
  │  ├─ App.tsx
  │  ├─ router
  │  └─ api
  │     ├─ auth
  │     ├─ api.ts
  │     └─ todo
  ├─ .gitignore
  ├─ package.json
  ├─ tsconfig.json
  ```

## 6. 🤔 과제 진행 시 주안점

---

제 초기 과제 코드는 router와 components 딱 둘만 있는 분리와 추상화가 전혀 되어있지않은

두개의 폴더 파일안에 모든 기능이 집중이 되어있는 매우 지저분한 코드였습니다.

하지만 다른 분들의 코드를 본 결과 매우 세세하게 기능별로 폴더를 분리 한것을 보고

어떻게하면 분리와 추상화를 잘 할수 있을까 고민하면서 폴더를 구분 했습니다.

components 폴더의 파일을 todo, auth별로 폴더를 또 만들까 하다가 아직 그 정도로 분리가

필요하다고 생각이 들지 않아서 세세하게 분리하지 않았습니다. (추후 큰 프로젝트시 더 분리할 듯)

보통 제 router폴더를 pages라는 이름으로 대부분이 사용하시더라구요

다음 프로젝트에서는 pages라는 이름으로 사용할 예정입니다.

## 7. 🔥 한계점 및 개선 사항

---

상세정보 화면에서 수정 버튼을 누르면 모달창이 나와서 수정할수있는 기능을 구현하고

싶었지만 기능 요구 사항중에 뒤로가기시 이전 데이터를 보여줘야하는 기능을 구현하느라

모달창을 구현하지 못했습니다. 😥 (다른 좋은 방법이 있을까요? 🤔)

## 8. 📝 프리온보딩 일지

---

- <a href="https://kagrin97-blog.vercel.app/blog/other-%ED%94%84%EB%A6%AC%EC%98%A8%EB%B3%B4%EB%94%A98%EC%9B%94%EC%B1%8C%EB%A6%B0%EC%A7%80[1-1]">원티드 프리온보딩 8월 챌린지 [1-1] 일지</a>

- <a href="https://kagrin97-blog.vercel.app/blog/other-%ED%94%84%EB%A6%AC%EC%98%A8%EB%B3%B4%EB%94%A98%EC%9B%94%EC%B1%8C%EB%A6%B0%EC%A7%80[1-2]">원티드 프리온보딩 8월 챌린지 [1-2] 일지</a>

- <a href="https://kagrin97-blog.vercel.app/blog/other-%ED%94%84%EB%A6%AC%EC%98%A8%EB%B3%B4%EB%94%A98%EC%9B%94%EC%B1%8C%EB%A6%B0%EC%A7%80[2-1]">원티드 프리온보딩 8월 챌린지 [2-1] 일지</a>
