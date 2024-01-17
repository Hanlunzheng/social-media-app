import React from "react";
import "./Stories.scss";

const Stories = () => {
  const stories = [
    {
      id: 1,
      name: "Aaron Fang",
      img: "https://media.istockphoto.com/id/1459952195/photo/beautiful-spring-garden-with-flowers-and-lawn-grass-3d-illustration.jpg?b=1&s=612x612&w=0&k=20&c=tvDJ4XlL1GBSdQkYu9z8yqEPy_udE5Ceob8xpHJOwMM=",
    },
    {
      id: 2,
      name: "Aaron fang",
      img: "https://images.unsplash.com/photo-1533561797500-4fad4750814e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5zdGFncmFtJTIwc3Rvcmllc3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 3,
      name: "Aaron fang",
      img: "https://img.freepik.com/premium-photo/dock-with-mountain-background_865967-28763.jpg",
    },
    {
      id: 4,
      name: "Aaron fang",
      img: "https://st2.depositphotos.com/2001755/5408/i/950/depositphotos_54081723-stock-photo-beautiful-nature-landscape.jpg",
    },
  ];
  return (
    <div className="stories">
      <div className="story" key={stories.id}>
        <img
          src="https://images.unsplash.com/photo-1615912844755-bd8b6dd6789e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW5zdGFncmFtJTIwc3Rvcmllc3xlbnwwfHwwfHx8MA%3D%3D"
          alt=""
        />

        <span> story</span>
        <button>+</button>
      </div>
      {stories.map((item) => (
        <div className="story" key={item.id}>
          <img src={item.img} alt="" />
          <span>{item.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Stories;
