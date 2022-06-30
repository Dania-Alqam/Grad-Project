import "./postAdmin.css";
import { MoreVert } from "@material-ui/icons";
// import { Users } from "../../dummyData";
import { useState } from "react";
import axios from "axios";

export default function Post(props) {


  console.log(props);
  const post = props.post;
  
  const token = localStorage.getItem("token");
  const [adminID, setAdminID] = useState("");
  const [postID, setPostID] = useState("");
  const approvePost = () => {
    setPostID(post.postID);
    console.log(post.postID)
    axios
      .post(
        "http://localhost:5000/approve/" + post.postID,
        {admin_access_token: token,}
      )
      .then((response) => {
        console.log("o34234234");
        console.log(response.status);
        // props.handleDelete(postID);
        window.location.reload(true);

        if (response.status === 200) {
          console.log(response.message);
          console.log(token);
          // window.alert(response.data.message);
        }
        if (response.status === 403) {
          console.log(response.message);
          // window.alert(response.data.message);
        }
        if (response.status === 400) {
          console.log(response.message);
          // window.alert(response.data.message);
        }
        if (response.status === 401) {
          console.log(response.message);
          // window.alert(response.data.message);
        }
      });
  };
 

  const [content, setcontent] = useState("");
  const [postImage, setPostImage] = useState("");
  const [posts, setposts] = useState(null);

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
            // onError={(e) => {
            //   e.target.onerror = null;
            //   e.target.src = "http://localhost:5000/imgs/default.jpg";
            // }}
            alt=""
          />
        </div>
        <button class="button1" onClick={() => approvePost()}>Approve</button>
        <button class="button2">Decline</button>
      </div>
    </div>
  );
}
