import { ReactNode, useState } from "react";
import { ChatContext } from "./chat-context";

export const ChatProvider = ({ children }: { children: ReactNode }) => {
  const [participants, setParticipants] = useState<string[]>([]);

  return (
    <ChatContext.Provider value={{ participants, setParticipants }}>
      {children}
    </ChatContext.Provider>
  );
};
