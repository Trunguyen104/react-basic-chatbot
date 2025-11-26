import RobotProfileImage from "../assets/robot-1.png";
import UserProfileImage from "../assets/khowf.jpg";
import './ChatMessage.css';
import dayjs from "dayjs";

export function ChatMessage({ message, sender, time }) {
    return (
        <div
            className={sender === "user" ? "chat-message-user" : "chat-message-robot"}
        >
            {sender === "robot" && (
                <img src={RobotProfileImage} className="chat-message-profile" />
            )}
            <div className="chat-message-text">
                {message}
                {time && (
                    <div className="chat-message-time">
                        {dayjs(time).format('HH:mm')}
                    </div>
                )}
            </div>
            {sender === "user" && (
                <img src={UserProfileImage} className="chat-message-profile" />
            )}
        </div>
    );
}