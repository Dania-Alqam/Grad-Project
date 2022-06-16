import "./rightbar.css";
document.dir = "rtl";

export default function Rightbar({ profile }) {
  const HomeRightbar = () => {
    return <></>;
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">المعلومات الشخصية</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">الدولة : </span>
            <span className="rightbarInfoValue">فلسطين </span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">الدائرة : </span>
            <span className="rightbarInfoValue">
              الهندسة وتكنولوجيا المعلومات
            </span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">التخصص : </span>
            <span className="rightbarInfoValue">علم حاسوب </span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">المدينة : </span>
            <span className="rightbarInfoValue">سلفيت</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">الحالة الاجتماعية : </span>
            <span className="rightbarInfoValue">هعهع سنجل</span>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}
