import React from "react";
import "./Post.scss";
import SinglePost from "../SinglePost/SinglePost";

const Post = () => {
  const posts = [
    {
      id: 1,
      name: "Aaron Fang",
      userId: 1,
      profilePic:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSukKNPAL0Ve1qrT-dTGzwskJ5LHNzrPXdWRQ&usqp=CAU",
      desc: "Hello guys, welcome to the star war community",
      img: "https://thesmallscreensociety.files.wordpress.com/2021/05/star-wars-collage.jpg",
    },
    {
      id: 2,
      name: "Luke Skywalker",
      userId: 2,
      profilePic:
        "https://www.looper.com/img/gallery/a-luke-skywalker-disney-series-may-not-happen-but-one-big-fight-still-might/l-intro-1689608047.jpg",
      desc: "May the force be with you .",
      img: "https://media.wired.com/photos/59327dc7f682204f736963d9/master/pass/MSDEMST_EC002_H.jpg",
    },
    {
      id: 3,
      name: "Obi wan kenobi ",
      userId: 3,
      profilePic:
        "https://ew.com/thmb/SB6FWBPXLFn_vLXiRRhoLzJBMzk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/revenge-of-the-sith-2000-8a98ad56e8834130969bddf9350671c7.jpg",
      desc: "Hello there!",
      img: "https://i.redd.it/ordhe01sd2121.png",
    },
  ];
  return (
    <div className="posts">
      {posts.map((post) => (
        <SinglePost post={post} key={post.id} />
      ))}
    </div>
  );
};

export default Post;
