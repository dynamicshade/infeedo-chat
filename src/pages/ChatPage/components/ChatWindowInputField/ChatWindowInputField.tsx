import { faPaperPlane } from "@fortawesome/free-solid-svg-icons/faPaperPlane";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  ChatMessage,
  ChatMessageType,
} from "../../../../models/chat-message.model";
import { formattedCurrentTime } from "../../../../utility/formatted_current_time";
import "./ChatWindowInputField.scss";

type ChatWindowInputFieldProps = {
  onInput(message: ChatMessage): void;
};

export const ChatWindowInputField = (props: ChatWindowInputFieldProps) => {
  const storeUserMessage = () => {
    let chatMessage: ChatMessage = new ChatMessage();
    let inputFieldElement: any = document.getElementById("chat-message");
    if (inputFieldElement.value) {
      chatMessage.data = inputFieldElement.value;
      chatMessage.type = ChatMessageType.message;
      chatMessage.timestamp = formattedCurrentTime();
      inputFieldElement.value = "";
      props.onInput(chatMessage);
      let sendBtnElement = document.getElementsByClassName("send-btn-icon")[0];
      sendBtnElement.classList.remove("send-btn-icon-bordered");
    }
  };

  return (
    <div className="chatbot-window-input-field-div">
      <input
        type="text"
        name="chat-message"
        autoComplete="off"
        id="chat-message"
        placeholder="Write a message"
        onChange={(e) => {
          let sendBtnElement =
            document.getElementsByClassName("send-btn-icon")[0];
          if ((e.target as any).value) {
            sendBtnElement.classList.add("send-btn-icon-bordered");
          } else {
            sendBtnElement.classList.remove("send-btn-icon-bordered");
          }
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            storeUserMessage();
          }
        }}
      />
      <button
        type="submit"
        onClick={(e) => {
          storeUserMessage();
        }}
      >
        <FontAwesomeIcon className="send-btn-icon" icon={faPaperPlane} />
      </button>
    </div>
  );
};
