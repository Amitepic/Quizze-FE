

export default function() {
  return (
    <div className="loginform">
      <div className="formitem">
        <div className="label">Name</div>
        <input type="text" className="" />
      </div>
      <div className="formitem">
        <div className="label">Email</div>
        <input type="text" className="" />
      </div>
      <div className="formitem">
        <div className="label">Password</div>
        <input type="password" className="" />
      </div>
      <div className="formitem">
        <div className="label cnf">Confirm</div>
        <input type="password" className="" />
      </div>
      <button className="submit">Sign up</button>
    </div>
  );
};


