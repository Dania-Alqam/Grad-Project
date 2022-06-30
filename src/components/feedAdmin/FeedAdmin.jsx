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

  const [posts, setposts] = useState([]);

  const handleDelete = (postkey) => {
    setposts(posts.filter((post) => post.postID != postkey));
    console.log(postkey);
  };

  var token = localStorage.getItem("token");
  useEffect(() => {
    (async () => {
      const response = await axios.post(
        "http://localhost:5000/posts/0",
        { admin_access_token: token },
        {
          credentials: "include",
        }
      );
      // const response = await data.json();
      setposts(response.data);
    })();
  }, []);

  if (posts === null) {
    return null;
  }
  return (
    <div>
      {posts.length > 0 ? (
        posts.map((post) => (
          <Post key={post.postID} post={post} handleDelete={handleDelete} />
        ))
      ) : (
        <p>No posts</p>
      )}
    </div>
  );

  // );
}
