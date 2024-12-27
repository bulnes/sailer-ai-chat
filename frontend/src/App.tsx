import { useEffect } from "react";
import { Chat } from "./components/chat/chat";
import { ResponsiveSidebarToggle, Sidebar } from "./components/sidebar";
import { listAllChats } from "./services/chat.services";

export function App() {
  useEffect(() => {
    listAllChats();
  }, []);

  return (
    <div className="container-fluid vh-100 d-flex flex-column">
      <div className="row flex-grow-1 overflow-hidden">
        <Sidebar />
        <Chat />
      </div>

      <ResponsiveSidebarToggle />
    </div>
  );
}
