import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";

export default function Profile() {
    return (
        <>
            <Topbar />
            <div className="profile">
                <Sidebar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img
                                className="profileCoverImg"
                                src="https://pilbox.themuse.com/image.png?url=https%3A%2F%2Fassets.themuse.com%2Fuploaded%2Fattachments%2F18595.png%3Fv%3Da520579c81d937c9277f3f3714fcd8f7d6570d12cc80a11772af0fac18269e1c&prog=1&w=780"
                                alt=""
                            />
                            <img
                                className="profileUserImg"
                                src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/d54a51105791269.5f80b1b5e44ee.png"
                                alt=""
                            />
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">Roy Chon</h4>
                            <p className="profileDesc">adsl;fjaksld</p>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed />
                        <Rightbar profile={true} />
                    </div>
                </div>
            </div>
        </>
    );
}
