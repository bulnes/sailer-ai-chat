export function ChatMessages() {
  return (
    <div className="flex-grow-1 p-3 overflow-auto bg-light">
      <div className="d-flex justify-content-start mb-2">
        <div className="border rounded p-2 text-white bg-primary">
          Hey! How are you?
        </div>
      </div>
      <div className="d-flex justify-content-end mb-2">
        <div className="border rounded p-2 bg-light">
          I'm good, thanks! And you?
        </div>
      </div>
      {/* Add more messages here */}
    </div>
  );
}
