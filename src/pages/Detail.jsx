import React from "react";
import { Link, useParams } from "react-router-dom";

const Detail = () => {
  const params = useParams();
  // console.log(params);

  const data = [
    {
      id: 1,
      todo: "연습1 데이터입니다",
    },
    {
      id: 2,
      todo: "연습2 데이터입니다",
    },
    {
      id: 3,
      todo: "연습3 데이터입니다",
    },
    {
      id: 4,
      todo: "연습4 데이터입니다",
    },
  ];

  return (
    <div>
      <h1>Detail 컴포넌트 입니다</h1>
      {data.map((work) => {
        return (
          <div key={work.id}>
            <div>할일 : {work.id}</div>
            <Link to={`/detail/${work.id}`}>
              <span>Go to {work.todo}</span>
            </Link>
          </div>
        );
      })}
      <Link to={"/"}>Home으로 이동</Link>
    </div>
  );
};

export default Detail;
