import "./rightbar.css";
import { Users } from "../../../dummyData";
import Online from "../online/Online";
import { useEffect, useState } from "react";
import axios from "axios";
// import { Profiler } from "react";
export default function Rightbar({ user }) {
    const [friends, setFriends] = useState([]);
    // fetching user followings
    useEffect(() => {
        const getFriends = async () => {
            try {
                const friendList = await axios.get(
                    "http://localhost:8800/api/users/friends/" + user._id
                );
                setFriends(friendList.data);
            } catch (error) {
                console.log(error);
            }
        };
        getFriends();
    }, [user?._id]);

    const HomeRightbar = () => {
        return (
            <>
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendList">
                    {Users.map((u) => (
                        <Online key={u.id} user={u} />
                    ))}
                </ul>
            </>
        );
    };

    const ProfileRightbar = () => {
        return (
            <>
                <h4 className="rightbarTitle">User Information</h4>
                <div className="rightbarInfo">
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">City: </span>
                        <span className="rightbarInfoValue">{user.city}</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">From: </span>
                        <span className="rightbarInfoValue">{user.from} </span>
                    </div>
                </div>
                <h4 className="rightbarTitle">User friends</h4>
                <div className="rightbarFollowings">
                    {friends.map((friend) => (
                        <div className="rightbarFollowing">
                            <img
                                src={friend.profilePicture}
                                alt=""
                                className="rightbarFollowingImg"
                            />
                            <span className="rightbarFollowingName">
                                {friend.username}
                            </span>
                        </div>
                    ))}
                </div>
            </>
        );
    };
    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                {user ? <ProfileRightbar /> : <HomeRightbar />}
            </div>
        </div>
    );
}
