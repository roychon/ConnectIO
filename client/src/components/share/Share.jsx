import "./share.css";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import MoodIcon from "@mui/icons-material/Mood";
import { useContext, useRef, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import { DataArrayTwoTone, DataObject } from "@mui/icons-material";
export default function Share() {
    const { user } = useContext(AuthContext);
    const [file, setFile] = useState(null);
    const desc = useRef();

    const submitHandler = async (e) => {
        e.preventDefault();
        const newPost = {
            userId: user._id,
            desc: desc.current.value,
        };

        const data = new FormData();
        const fileName = file.name;
        data.append("file", file);
        data.append("name", fileName);
        newPost.img = fileName;
        try {
            await axios.post("http://localhost:8800/api/upload", data);
        } catch (error) {}

        try {
            await axios.post("http://localhost:8800/api/posts", newPost);
            window.location.reload();
        } catch (error) {}
    };
    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img
                        className="shareProfileImg"
                        src={user.profilePicture}
                        alt=""
                    />
                    <input
                        placeholder="What's in your mind?"
                        className="shareInput"
                        ref={desc}
                    />
                </div>
                <hr className="shareHr" />
                <form className="shareBottom" onSubmit={submitHandler}>
                    <div className="shareOptions">
                        <label htmlFor="file" className="shareOption">
                            <AddPhotoAlternateIcon
                                htmlColor="tomato"
                                className="shareIcon"
                            />
                            <span className="shareOptionText">
                                Photo or Video
                            </span>
                            <input
                                type="file"
                                id="file"
                                name="file"
                                accept=".png,.jpeg,.jpg"
                                onChange={(e) => setFile(e.target.files[0])}
                                style={{ display: "none" }}
                            />
                        </label>
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
                    <button className="shareButton" type="submit">
                        Share
                    </button>
                </form>
            </div>
        </div>
    );
}
