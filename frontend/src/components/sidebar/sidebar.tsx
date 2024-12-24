export function Sidebar() {
  return (
    <div className="col-12 col-md-4 border-end overflow-auto d-md-block d-none p-0 bg-light">
      <div className="list-group rounded-0">
        <a
          href="#"
          className="list-group-item list-group-item-action d-flex align-items-center"
        >
          <img
            src="https://via.placeholder.com/40"
            className="rounded-circle me-3"
            alt="User"
          />
          <div>
            <h6 className="mb-0">John Doe</h6>
            <small className="text-muted">Hey! What's up?</small>
          </div>
        </a>
        <a
          href="#"
          className="list-group-item list-group-item-action d-flex align-items-center"
        >
          <img
            src="https://via.placeholder.com/40"
            className="rounded-circle me-3"
            alt="User"
          />
          <div>
            <h6 className="mb-0">Jane Smith</h6>
            <small className="text-muted">See you tomorrow!</small>
          </div>
        </a>
        {/* Add more contacts here */}
      </div>
    </div>
  );
}
