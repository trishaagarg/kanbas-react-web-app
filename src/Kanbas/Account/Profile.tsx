export default function Profile() {
  return (
    <div className="container mt-5">
      <h1 className="mb-4">Profile</h1>
      <input className="form-control mb-3" defaultValue="alice" />
      <input className="form-control mb-3" defaultValue="123" />
      <input className="form-control mb-3" defaultValue="Alice" />
      <input className="form-control mb-3" defaultValue="Wonderland" />

      <input
        type="date"
        className="form-control mb-3"
        defaultValue="2000-01-01"
      />

      <input
        className="form-control mb-3"
        defaultValue="alice@wonderland.com"
      />
      <input className="form-control mb-3" defaultValue="User" />
      <button className="btn btn-danger w-100">Signout</button>
    </div>
  );
}
