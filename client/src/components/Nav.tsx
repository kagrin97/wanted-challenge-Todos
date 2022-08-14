import { Link } from "react-router-dom";

export default function Nav() {
  // localStorage의 login-token을 삭제후 새로고침하는 로그아웃 함수
  const onLogOut = () => {
    localStorage.removeItem("login-token");
    alert("로그아웃 되었습니다.");
    window.location.reload();
  };

  return (
    <nav>
      <Link to="/">홈</Link>
      <Link
        to={`/auth`}
        style={{ marginRight: "10px", textDecoration: "none" }}
      >
        로그인
      </Link>
      <button onClick={onLogOut} style={{ cursor: "pointer" }}>
        로그아웃
      </button>
    </nav>
  );
}
