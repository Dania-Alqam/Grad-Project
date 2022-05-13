import "./post.css";
import { MoreVert } from "@material-ui/icons";
import { Users } from "../../dummyData";
import { useState } from "react";

export default function Post({ post }) {
  const [like,setLike] = useState(post.like)
  const [isLiked,setIsLiked] = useState(false)

  const likeHandler =()=>{
    setLike(isLiked ? like-1 : like+1)
    setIsLiked(!isLiked)
  }
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
          <MoreVert />
          </div>
          <div className="postTopRight">
          <span className="postUsername">
              {Users.filter((u) => u.id === post?.userId)[0].username}
          </span>
          <span className="postDate">{post.date}</span>
          
            <img
              className="postProfileImg"
              src={Users.filter((u) => u.id === post?.userId)[0].profilePicture}
              alt=""
            />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img className="postImg" src={post.photo} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
          <span className="postCommentText">{post.comment} التعليقات</span>
            
          </div>
          <div className="postBottomRight">
          <span className="postLikeCounter">{like} أعجب به</span>
          <img className="likeIcon" src="public/assets/like.png" onClick={likeHandler} alt="" />
          <img className="likeIcon" src="assets/heart.png" onClick={likeHandler} alt="" />
            
          </div>
        </div>
      </div>
    </div>
  );
}
