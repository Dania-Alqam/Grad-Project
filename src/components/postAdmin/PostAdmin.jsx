import "./postAdmin.css";
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

  const [content, setcontent] = useState("");
  const [postImage, setPostImage] = useState("");
  const [posts, setposts] = useState(null)

  // useEffect(() => {
  //   var token = localStorage.getItem("token");
  //   axios
  //     .post("http://localhost:5000/posts/0", {admin_access_token:token}, {

  //   })
  //     .then((response) => {
  //       setposts(response.data);
  //       // then print response status
  //       console.log(response);
  //       console.log(posts)
      
  //     });
  // }, []);

  //  var token = localStorage.getItem("token");
  // useEffect(() => {

  //   (async () => {
  //     const data = await fetch('http://localhost:5000/posts/0', {admin_access_token:token},{
  //       credentials: 'include'
  //     });
  //     const response = await data.json();
  //     setposts(response);
  //   })();
  // }, []);
  return (
    
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
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
        <button>approve</button>
        <button>decline</button>

      </div>
    </div>
  );
}
