import React, { useEffect, useState } from "react";

export const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [firstNameErr, setFirstNameErr] = useState(false);
  const [secondNameErr, setSecondNameErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [passwordErr, setPasswordErr] = useState(false);
  const [confirmPasswordErr, setConfirmPasswordErr] = useState(false);

  const signUpFormHandler = (e) => {
    e.preventDefault();

    if (password === confirmPassword) {
    } else {
      alert("Password is not matched");
    }

    if (firstName === "") {
      setFirstNameErr(true);
    }
    if (secondName === "") {
      setSecondNameErr(true);
    }
    if (email === "") {
      setEmailErr(true);
    }
    if (password === "") {
      setPasswordErr(true);
    }
    if (confirmPassword === "") {
      setConfirmPasswordErr(true);
    }

    console.log(firstName, secondName, email, password, confirmPassword);
    
    setFirstName("");
    setSecondName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  useEffect(() => {
    if (firstName !== "") {
      setFirstNameErr(false);
    }

    if (secondName !== "") {
      setSecondNameErr(false);
    }

    if (email !== "") {
      setEmailErr(false);
    }
    if (password !== "") {
      setPasswordErr(false);
    }
    if (confirmPassword !== "") {
      setConfirmPasswordErr(false);
    }
  }, [firstName, secondName, email, password, confirmPassword]);

  return (
    <>
      <div className="container">
        <div className="row justify-content-center mt-5">
          <div className="col-12 col-md-6 col-sm-8">
            <div className="bg-dark rounded-3 p-4">
              <div>
                <h5 class="text-center mt-4 fs-1 fw-medium text-success">
                  Sign Up
                </h5>
              </div> 
              <div className="card-body">
                <form onSubmit={signUpFormHandler}>
                  <div className="form-group my-3">
                    <label className="fs-3 fw-medium text-success">
                      First Name
                    </label>
                    <input
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      type="text"
                      class="form-control shadow"
                      placeholder="Enter your Name"
                    />
                    {firstNameErr && (
                      <p className="text-danger text-center mt-1">
                        First name is required!
                      </p>
                    )}
                  </div>
                  <div className="form-group my-3">
                    <label className="fs-3 fw-medium text-success">
                      Second Name
                    </label>
                    <input
                      value={secondName}
                      onChange={(e) => setSecondName(e.target.value)}
                      type="text"
                      class="form-control shadow"
                      id="userName"
                      placeholder="Enter your Name"
                    />
                    {secondNameErr && (
                      <p className="text-danger text-center mt-1">
                        Second name is required!
                      </p>
                    )}
                  </div>
                  <div className="form-group my-3">
                    <label className="fs-3 fw-medium text-success">Email</label>
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      class="form-control shadow"
                      id="userEmail"
                      placeholder="Enter your Email"
                    />
                    {emailErr && (
                      <p className="text-danger text-center mt-1">
                        Email is required!
                      </p>
                    )}
                  </div>
                  <div className="form-group my-3">
                    <label className="fs-2 fw-medium text-success">
                      Password
                    </label>
                    <input
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      type="password"
                      class="form-control shadow"
                      id="userPassword"
                      placeholder="Enter your password"
                    />
                    {passwordErr && (
                      <p className="text-danger text-center mt-1">
                        Password is required!
                      </p>
                    )}
                  </div>
                  <div className="form-group my-3">
                    <label className="fs-2 fw-medium text-success">
                      Confirm Password
                    </label>
                    <input
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      type="password"
                      class="form-control shadow"
                      id="userPassword"
                      placeholder="Enter your password"
                    />
                    {confirmPasswordErr && (
                      <p className="text-danger text-center mt-1">
                        Password is required!
                      </p>
                    )}
                  </div>
                  <button
                    type="submit"
                    class="btn bg-success form-control my-3"
                  >
                    Register
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
