import React from "react";
import "./Profile.scss";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Post from "../../components/post/Post";
//import { Place } from "@mui/icons-material";
// import Posts from "../../components/posts/Posts";

const Profile = () => {
  return (
    <div className="profile">
      <div className="images">
        <img
          src="https://images.pexels.com/photos/13440765/pexels-photo-13440765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          className="cover"
        />
        <img
          src="https://images.pexels.com/photos/14028501/pexels-photo-14028501.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
          alt=""
          className="profilePic"
        />
      </div>

      <div className="container">
        <div className="userinfo">
          <div className="left">
            <a href="http://facebook.com">
              <FacebookTwoToneIcon
                style={{
                  width: "30px",
                  height: "30px",
                  color: "rgb(79, 149, 172)",
                }}
              />
            </a>
            <a href="https://instagram.com/">
              <InstagramIcon
                style={{
                  width: "30px",
                  height: "30px",
                  color: "rgb(79, 149, 172)",
                }}
              />
            </a>
            <a href="https://twitter.com/">
              <TwitterIcon
                style={{
                  width: "30px",
                  height: "30px",
                  color: "rgb(79, 149, 172)",
                }}
              />
            </a>
            <a href="https://www.linkedin.com/">
              <LinkedInIcon
                style={{
                  width: "30px",
                  height: "30px",
                  color: "rgb(79, 149, 172)",
                }}
              />
            </a>
            <a href="http://facebook.com">
              <PinterestIcon
                style={{
                  width: "30px",
                  height: "30px",
                  color: "rgb(79, 149, 172)",
                }}
              />
            </a>
          </div>
          <div className="center">
            <span className="user">Aaron fang</span>
            <div className="info">
              <div className="item">
                <PlaceIcon />
                <span>USA</span>
              </div>
              <div className="item">
                <LanguageIcon />
                <span>English</span>
              </div>
            </div>
            <button>Follow</button>
          </div>
          <div className="right">
            <MoreVertIcon />
            <EmailOutlinedIcon />
          </div>
        </div>
        <Post />
      </div>
    </div>
  );
};

export default Profile;
