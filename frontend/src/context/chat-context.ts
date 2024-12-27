import { createContext } from "react";
import { ChatContextInterface } from "../types/chat-context";

export const ChatContext = createContext<ChatContextInterface>({
  participants: [],
  setParticipants: () => { },
});