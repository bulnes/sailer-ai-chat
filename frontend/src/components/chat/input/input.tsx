export function ChatInput() {
  return (
    <div className="border-top p-3 bg-light">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Type a message..."
        />
        <button className="btn btn-light" type="button">
          Send
        </button>
      </div>
    </div>
  );
}
