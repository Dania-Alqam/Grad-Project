import Post from "../postAdmin/PostAdmin";
import Share from "../share/Share";
import "./feedAdmin.css";
// import { Posts } from "../../dummyData";
import { ResponsiveEmbed } from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";

export default function FeedAdmin() {
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
  var token = localStorage.getItem("token");
  useEffect(() => {
    (async () => {
      const response = await axios.post('http://localhost:5000/posts/0', {admin_access_token:token},{
        credentials: 'include'
      });
      // const response = await data.json();
      setposts(response.data);
    })();
  }, []);

  if (posts === null) {
    return null;
  }
  
  // return (
    // <div className="feed">
    //   <div className="feedWrapper">
    //     {/* <Share /> */}
    //     {posts.map((p) => (
    //       <Post key={p.postID} post={p} />
    //     ))}
    //   </div>
    // </div>
    return (
  <div>
    {posts.length > 0 ? (
      posts.map(post => (
        <Post key={post.postID}  post={post} />
      ))
    ) : (
      <p>No posts</p>
    )}
  </div>
);

  // );
}
