import "./share.css";
import {PermMedia, Label,Room, EmojiEmotions} from "@material-ui/icons"

export default function Share() {
  return (

    <div className="share">
    <div className="shareWrapper">
      <div className="shareTop">
        <img className="shareProfileImg" src="/assets/person/1.jpeg" alt="" />
        <input
          placeholder="انشر بما تفكر ...."
          className="shareInput"
        />
      </div>
      <hr className="shareHr"/>
      <div className="shareBottom">
          <div className="shareOptions">
          <button className="shareButton">أنشر</button>
          </div>
          <div className="shareOption">
          <span className="shareOptionText">صورة أو فيديو
          </span>
                  <PermMedia htmlColor="tomato" className="shareIcon"/>
              </div>
      </div>
    </div>
  </div>
  );
}
