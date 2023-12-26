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
              navigate("/scroll-office");
            }}
          >
            Scroll office
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              navigate("/monster-stage");
            }}
          >
            Moster stage
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              navigate("/animate-model");
            }}
          >
            Animate model
          </button>
        </li>
      </ul>
    </header>
  );
};
