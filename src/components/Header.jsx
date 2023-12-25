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
              navigate("/scroll-animations");
            }}
          >
            Experience 1
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              navigate("/monster-stage");
            }}
          >
            Experience 2
          </button>
        </li>
      </ul>
    </header>
  );
};
