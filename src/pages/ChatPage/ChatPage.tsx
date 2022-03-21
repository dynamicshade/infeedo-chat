import { useEffect, useState } from "react";
import { ChatMessage, ChatMessageType } from "../../models/chat-message.model";
import { formattedCurrentTime } from "../../utility/formatted_current_time";
import "./ChatPage.scss";
import { ChatDisplayWindow } from "./components/ChatDisplayWindow/ChatDisplayWindow";
import { ChatWindowHeader } from "./components/ChatWindowHeader/ChatWindowHeader";
import { ChatWindowInputField } from "./components/ChatWindowInputField/ChatWindowInputField";

type ChatPageProps = {};

export const ChatPage = (props: ChatPageProps) => {
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>(() => {
    if (localStorage.getItem("chat_history")) {
      return JSON.parse(localStorage.getItem("chat_history")!);
    }
    return [];
  });

  useEffect(() => {
    document
      .getElementsByClassName("chat-display-window-div")[0]
      .scrollTo(
        0,
        document.getElementsByClassName("chat-display-window-div")[0]
          .scrollHeight
      );
  }, [chatHistory]);

  return (
    <div className="chat-page">
      <ChatWindowHeader />
      <ChatDisplayWindow messages={chatHistory} />
      <ChatWindowInputField
        onInput={(chatMessage) => {
          let chatBotReply: ChatMessage = new ChatMessage();
          chatBotReply.data = chatMessage.data;
          chatBotReply.timestamp = formattedCurrentTime();
          chatBotReply.type = ChatMessageType.reply;
          let newChatHistory = [...chatHistory, chatMessage, chatBotReply];
          setChatHistory(newChatHistory);
          localStorage.setItem("chat_history", JSON.stringify(newChatHistory));
          document
            .getElementsByClassName("chat-display-window-div")[0]
            .scrollTo(
              0,
              document.getElementsByClassName("chat-display-window-div")[0]
                .scrollHeight
            );
        }}
      />
    </div>
  );
};

export default ChatPage;
