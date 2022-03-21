import "./ChatWindowHeader.scss";

type ChatWindowHeaderProps = {};

export const ChatWindowHeader = (props: ChatWindowHeaderProps) => {
  return (
    <header className="chat-window-header">
      <div className="chatbot-image-div"></div>
      <p className="chatbot-title">Ember</p>
    </header>
  );
};
