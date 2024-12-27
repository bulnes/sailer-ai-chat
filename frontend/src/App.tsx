import { Auth } from "./components/auth/auth";
import { Chat } from "./components/chat/chat";
import { ResponsiveSidebarToggle, Sidebar } from "./components/sidebar";

export function App() {
  return (
    <>
      <div className="container-fluid vh-100 d-flex flex-column">
        <div className="row flex-grow-1 overflow-hidden">
          <Sidebar />
          <Chat />
        </div>

        <ResponsiveSidebarToggle />
      </div>

      <Auth />
    </>
  );
}
