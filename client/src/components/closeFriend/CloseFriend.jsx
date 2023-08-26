import "./closeFriend.css";
export default function CloseFriend({ user }) {
    return (
        <li className="sidebarFriend">
            <img
                className="sidebarFriendImg"
                src={user.profilePicture}
                alt="friend profile picture"
            />
            <span className="sidebarFriendName">{user.username}</span>
        </li>
    );
}
