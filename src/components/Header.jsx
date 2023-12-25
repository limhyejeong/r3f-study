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
              navigate("/r3f-study/");
            }}
          >
            Home
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              navigate(-1);
            }}
          >
            Back
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              navigate("/r3f-study/scroll-animations");
            }}
          >
            Experience 1
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              navigate("/r3f-study/monster-stage");
            }}
          >
            Experience 2
          </button>
        </li>
      </ul>
    </header>
  );
};
