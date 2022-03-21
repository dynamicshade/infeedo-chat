import { v4 as uuid } from "uuid";
import { ChatMessage as ChatMessageInterface } from "../../../../models/chat-message.model";
import { ChatMessage } from "../ChatMessage/ChatMessage";
import "./ChatDisplayWindow.scss";

type ChatDisplayWindowProps = {
  messages: ChatMessageInterface[];
};

export const ChatDisplayWindow = (props: ChatDisplayWindowProps) => {
  return (
    <div className="chat-display-window-div">
      {props.messages.map((message) => {
        const unique_id = uuid();
        return <ChatMessage key={unique_id} message={message} />;
      })}
    </div>
  );
};
