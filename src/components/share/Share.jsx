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

    console.log("&&&&&&&&&&&&&&&&");
    const formdata = new FormData();
    formdata.append("content", content);

    formdata.append("avatar", userInfo.file);

    console.log(token);
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

  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg" src="/assets/person/1.jpeg" alt="" />
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
