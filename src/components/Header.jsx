import { useNavigate } from "react-router";
import "./style/Header.module.css";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <header>
      <ul>
        <li>
          <button
            onClick={() => {
              navigate("/");
            }}
          >
            홈
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              navigate(-1);
            }}
          >
            뒤로가기
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              navigate("/scrollAnimations");
            }}
          >
            Experience 1
          </button>
        </li>
      </ul>
    </header>
  );
};
