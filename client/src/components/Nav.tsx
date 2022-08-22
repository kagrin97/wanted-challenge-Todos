import { Link } from "react-router-dom";

import { Button } from "@mui/material";

/**
 * 네비게이션을 구성하는 컴포넌트
 */
export default function Nav() {
  // localStorage의 login-token을 삭제후 새로고침하는 로그아웃 함수
  const onLogOut = () => {
    localStorage.removeItem("login-token");
    alert("로그아웃 되었습니다.");
    window.location.reload();
  };

  return (
    <nav>
      <Link
        to={`/auth`}
        style={{ marginRight: "1rem", textDecoration: "none" }}
      >
        로그인
      </Link>

      <Button onClick={onLogOut} variant="text" sx={{ fontSize: "1rem" }}>
        로그아웃
      </Button>
    </nav>
  );
}
