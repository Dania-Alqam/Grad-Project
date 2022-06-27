import "./post.css";
import "../share/share.css"
import { MoreVert } from "@material-ui/icons";
import { Users } from "../../dummyData";
import { useState } from "react";

export default function Post({ post }) {
  const [like,setLike] = useState(post.like)
  const [isLiked,setIsLiked] = useState(false)

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="shareProfileImg"
              src={Users.filter((u) => u.id === post?.userId)[0].profilePicture}
              alt=""
            />
            <span className="postUsername">
              {Users.filter((u) => u.id === post?.userId)[0].username}
            </span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img className="postImg" src={post.photo} alt="" />
        </div>

        <hr className="shareHr1" />

        <div className="postTop1">
          <div className="postTopLeft1">
            <img
              className="postProfileImg1"
              src={Users.filter((u) => u.id === post?.userId)[0].profilePicture}
              alt=""
            />
            <span className="postUsername1">
              {Users.filter((u) => u.id === post?.userId)[0].username}
            </span>
          </div>
        </div>
        <div className="postCenter1">
          <span className="postText1">{post?.desc}</span>
        </div>

        <div className="shareTop1">
          <img className="shareProfileImg" src="/assets/person/1.jpeg" alt="" />
          <input
            placeholder="اكتب تعليقًا .."
            className="shareInput1"
         
          />
        </div>
      </div>
    </div>
  );
}
