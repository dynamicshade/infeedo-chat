import {
  ChatMessage as ChatMessageInterface,
  ChatMessageType,
} from "../../../../models/chat-message.model";
import "./ChatMessage.scss";

type ChatMessageProps = {
  message: ChatMessageInterface;
};

export const ChatMessage = (props: ChatMessageProps) => {
  const { message } = props;
  return (
    <div
      className="chat-message-column"
      style={{
        marginRight: message.type === ChatMessageType.message ? 24 : 8,
        marginLeft: message.type === ChatMessageType.message ? 8 : 24,
      }}
    >
      <div
        className="message-owner-name-div"
        style={{
          alignSelf:
            props.message.type === ChatMessageType.message
              ? "flex-end"
              : "flex-start",
        }}
      >
        {props.message.type === ChatMessageType.message ? "You" : "Bot"}
      </div>
      <div
        className="chat-message-row"
        style={{
          justifyContent:
            message.type === ChatMessageType.message
              ? "flex-end"
              : "flex-start",
        }}
      >
        <p
          className={`message ${
            message.type === ChatMessageType.message
              ? "user-message"
              : "chatbot-reply-message"
          }`}
        >
          {message.data}
        </p>
      </div>
      <div
        className={`chat-timestamp ${
          props.message.type === ChatMessageType.message
            ? "user-chat-timestamp"
            : "chatbot-chat-timestamp"
        }`}
      >
        {props.message.timestamp}
      </div>
    </div>
  );
};
