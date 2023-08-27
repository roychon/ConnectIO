import "./post.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { format } from "timeago.js";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

export default function Post({ post }) {
    const [like, setLike] = useState(post.likes.length);
    const [isLiked, setIsLiked] = useState(false);
    const [user, setUser] = useState({});
    const { user: currentUser } = useContext(AuthContext);

    useEffect(() => {
        setIsLiked(post.likes.includes(currentUser._id));
    }, [currentUser._id, post.likes]);

    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get(
                `http://localhost:8800/api/users?userId=${post.userId}`
            );
            setUser(res.data);
        };
        fetchUser();
    }, [post.userId]);

    const likeHandler = async () => {
        try {
            await axios.put(
                "http://localhost:8800/api/posts/" + post._id + "/like",
                {
                    userId: currentUser._id,
                }
            );
        } catch (e) {}
        setLike(isLiked ? like - 1 : like + 1);
        setIsLiked((prev) => !prev);
    };

    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <Link to={`profile/${user.username}`}>
                            <img
                                className="postProfileImg"
                                src={
                                    user.profilePicture
                                    // ? "http://localhost:8800/images/" +
                                    //   user.profilePicture
                                    // : "http://localhost:8800/images/" +
                                    //   "person/noAvatar.png"
                                }
                                alt=""
                            />
                        </Link>
                        <span className="postUsername">{user.username}</span>
                        <span className="postDate">
                            {format(post.createdAt)}
                        </span>
                    </div>
                    <div className="postTopRight">
                        <MoreVertIcon />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post.desc}</span>
                    <img
                        src={"http://localhost:8800/images/" + post.img}
                        alt=""
                        className="postImg"
                    />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <FavoriteBorderIcon
                            onClick={likeHandler}
                            className="likeButton"
                        />
                        <span className="postLikeCounter">{like}</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">
                            {post.comment} comments
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
