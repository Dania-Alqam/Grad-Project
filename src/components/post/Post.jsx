import "./post.css";
import "../share/share.css";
import { MoreVert } from "@material-ui/icons";
import { Users } from "../../dummyData";
import { useState } from "react";
import axios from "axios";

export default function Post(props) {
  console.log(props);
  const post = props.post;
  const [postID, setPostID] = useState("");

  const token = localStorage.getItem("token");

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="shareProfileImg"
              src={"http://localhost:5000/imgs/" + post.studentImage}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "http://localhost:5000/imgs/default.jpg";
              }}
              alt=""
            />
            <span className="postUsername">
              {post.firstName} {post.lastName}
            </span>
            <span className="postDate">{post.time}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>

        <div className="postCenter">
          <span className="postText">{post.content}</span>
          <img
            className="postImg"
            src={"http://localhost:5000/imgs/" + post.postImage}
            alt=""
          />
        </div>

        <hr className="shareHr1" />

        <div className="postTop1">
          <div className="postTopLeft1">
            <img
              className="postProfileImg1"
              src={"http://localhost:5000/imgs/" + post.studentImage}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "http://localhost:5000/imgs/default.jpg";
              }}
              alt=""
            />
            <span className="postUsername1">
            {post.firstName} {post.lastName}
            </span>
          </div>
        </div>

        <div className="postCenter1">
          <span className="postText1">{post.content}</span>
        </div>

        <div className="shareTop1">
          <img className="shareProfileImg" src="/assets/person/1.jpeg" alt="" />
          <input placeholder="اكتب تعليقًا .." className="shareInput1" />
        </div>
      </div>
    </div>
  );
}
