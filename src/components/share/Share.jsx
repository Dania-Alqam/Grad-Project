import swal from "sweetalert";
import "./share.css";
import { PermMedia, Label, Room, EmojiEmotions } from "@material-ui/icons";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Share() {
  const [content, setContent] = useState("");

  const [userInfo, setuserInfo] = useState({
    file: [],
    filepreview: null,
  });

  const handleInputChange = (event) => {
    setuserInfo({
      ...userInfo,
      file: event.target.files[0],
      filepreview: URL.createObjectURL(event.target.files[0]),
    });
  };

  const AddPost = () => {
    const token = localStorage.getItem("token");
    const formdata = new FormData();
    formdata.append("content", content);
    formdata.append("avatar", userInfo.file);
    formdata.append("access_token", token);
    axios
      .post("http://localhost:5000/api/Posts/Add", formdata, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((response) => {
        if (response.status === 201) {
          console.log("Image upload successfully");
          window.alert("Post Added Succesfully!");
        } else {
          console.log("Error");
        }
      });
  };

  const [imgPath, setimgPath] = useState("");

  useEffect(() => {
    console.log("inside share");
    const token = localStorage.getItem("token");
    console.log("token : " + token);

    axios
      .post(`http://localhost:5000/currentStudent`, { access_token: token })
      .then((res) => {
        setimgPath(res.data.imgPath);
      });
  }, []);

  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            className="shareProfileImg"
            src={"http://localhost:5000/imgs/" + { imgPath }}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "http://localhost:5000/imgs/default.jpg";
            }}
            alt=""
          />
          <input
            placeholder="ماذا يجول في خاطرك ؟"
            className="shareInput"
            onChange={(e) => {
              setContent(e.target.value);
            }}
          />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <button onClick={() => AddPost()} className="shareButton">
            انشر
          </button>{" "}
          <input
            type="file"
            className="form-control"
            name="upload_file"
            onChange={handleInputChange}
          />
        </div>
      </div>
    </div>
  );
}
