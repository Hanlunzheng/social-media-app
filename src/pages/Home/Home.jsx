import React from "react";
import "./Home.scss";
import Stories from "../../components/stories/Stories";
import Post from "../../components/post/Post";

//TEMPORARY stories data

const Home = () => {
  return (
    <div className="home">
      <Stories />
      <Post />
    </div>
  );
};

export default Home;
