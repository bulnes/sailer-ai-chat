import { ReactNode, useState } from "react";
import { ChatContext } from "./chat-context";

export const ChatProvider = ({ children }: { children: ReactNode }) => {
  const [currentParticipant, setCurrentParticipant] = useState<string>("");
  const [participants, setParticipants] = useState<string[]>([]);

  return (
    <ChatContext.Provider
      value={{
        currentParticipant,
        setCurrentParticipant,
        participants,
        setParticipants,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};
