import "./share.css";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import MoodIcon from "@mui/icons-material/Mood";
export default function Share() {
    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img
                        className="shareProfileImg"
                        src="/assets/person/1.jpeg"
                        alt=""
                    />
                    <input
                        placeholder="What's in your mind?"
                        className="shareInput"
                    />
                </div>
                <hr className="shareHr" />
                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <AddPhotoAlternateIcon
                                htmlColor="tomato"
                                className="shareIcon"
                            />
                            <span className="shareOptionText">
                                Photo or Video
                            </span>
                        </div>
                        <div className="shareOption">
                            <BookmarkBorderIcon
                                htmlColor="blue"
                                className="shareIcon"
                            />
                            <span className="shareOptionText">Tag</span>
                        </div>
                        <div className="shareOption">
                            <AddLocationAltIcon
                                htmlColor="green"
                                className="shareIcon"
                            />
                            <span className="shareOptionText">Location</span>
                        </div>
                        <div className="shareOption">
                            <MoodIcon
                                htmlColor="goldenrod"
                                className="shareIcon"
                            />
                            <span className="shareOptionText">Feelings</span>
                        </div>
                    </div>
                    <button className="shareButton">Share</button>
                </div>
            </div>
        </div>
    );
}
