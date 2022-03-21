export enum ChatMessageType {
  message,
  reply,
}

export class ChatMessage {
  type?: ChatMessageType;
  data?: string;
  timestamp?: string;
}
