import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Home 컴포넌트 입니다</h1>
      {/* <button
        onClick={() => {
          navigate("/detail");
        }}
      >
        디테일로 이동
      </button> */}
      <Link to="/detail">디테일 페이지로 이동</Link>
    </div>
  );
};

export default Home;
