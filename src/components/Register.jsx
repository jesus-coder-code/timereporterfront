import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Select from "react-select";


export default function Register(props) {
  const Rol = [{ value: 'admin', label: 'Admin' }, { value: 'employee', label: 'Employee' }]
  const refName = useRef(null);
  const refUser = useRef(null);
  const refPass = useRef(null);
  let navigate = useNavigate();

  const handleRegister = () => {
    const data = {
      name: refName.current.value,
      user: refUser.current.value,
      password: refPass.current.value,
    };
    console.log(data);
  };

  //para dropdowns
  //const [dropdown, setDropdown] = useState(false);

  /*const OpenCloseDropdown = () => {
    setDropdown(!dropdown);
  };*/

  const onClick = () => {
    navigate("/login");
  }

  return (
    <div className="Register">
      <div className="row">
        <div className="col-sm-4 offset-4 mt-5">
          <div className="card">
            <div className="card-header">Register</div>
            <div className="card-body">

              <div>
                <Select className="mb-3" options={Rol}>
                </Select>
              </div>

              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  @
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="name"
                  aria-label="name"
                  aria-describedby="basic-addon2"
                  ref={refName}
                  required
                />
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
                onClick={handleRegister}
              >
                Sign up
              </button>
              <button className="btn btn-link" onClick={onClick}>
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
