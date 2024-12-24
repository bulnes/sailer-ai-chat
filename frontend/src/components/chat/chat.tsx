import { ChatHeader, ChatInput, ChatMessages } from "./";

export function Chat() {
  return (
    <div className="col-12 col-md-8 d-flex flex-column p-0">
      <ChatHeader />
      <ChatMessages />
      <ChatInput />
    </div>
  );
}
