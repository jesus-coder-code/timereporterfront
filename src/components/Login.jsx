import React, { useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import Select from "react-select"

export default function Login(props) {
  const [rol, setRol] = useState({ value: '' });
  const Rol = [{ value: 'admin', label: 'Admin' }, { value: 'employee', label: 'Employee' }]
  const refUser = useRef(null);
  const refPass = useRef(null);
  let navigate = useNavigate();

  const onClick = () => {
    navigate("/register");
  };
  const handleLogin = (value) => {
    if (rol.value === 'admin') {
      navigate("/projects")
    }
    else {
      navigate("/entries")
    }
  };

  const select = (e) => {
    setRol({ ...rol, value: e.value });
  }

  return (
    <div className="login">
      <div className="row">
        <div className="col-sm-4 offset-4 mt-5">
          <div className="card">
            <div className="card-header">Login</div>
            <div className="card-body">
              <div className="mb-3">
                <Select onChange={select} options={Rol}></Select>
              </div>

              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  @
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  ref={refUser}
                  required
                />
              </div>

              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  @
                </span>
                <input
                  type="password"
                  className="form-control"
                  placeholder="password"
                  aria-label="password"
                  aria-describedby="basic-addon2"
                  ref={refPass}
                  required
                />
              </div>

              <button
                className="btn btn-info btn-lg btn-block"
                onClick={handleLogin}
              >
                Login
              </button>
              <button className="btn btn-link" onClick={onClick}>
                Sign up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}
