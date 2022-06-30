import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
// import { Posts } from "../../dummyData";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Feed() {
  const [posts, setposts] = useState([]);

  var token = localStorage.getItem("token");
  useEffect(() => {
    (async () => {
      const response = await axios.post(
        "http://localhost:5000/posts/1",
        { access_token: token },
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
    <div className="feed">
      <div className="feedWrapper">
        <Share />

        {posts.length > 0 ? (
       posts.map((post) => (
              <Post key={post.postID} post={post} />
              ))
              ) : (
                <p>No posts</p>
              )}
      </div>
    </div>
  );
}
