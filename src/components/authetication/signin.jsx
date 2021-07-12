import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import "./authentication.scss";
import { useHistory } from "react-router";
import { login } from "../../api/auth";

export const SignIn = () => {
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("dddd", data);
    // history.push("/users");
    login(data)
      .then((res) => {
        localStorage.setItem("authToken", res.access_token);
        history.push("/users");
      })
      .then((err) => {
        console.log(err);
      });
    //
  };

  useEffect(() => {
    // debugger;
    // document.getElementsByClassName("mainContainer")[0].style.display = "none";
    // document.getElementById("desktopVerticalBar").style.display = "none";
    // document.getElementById("headerBar").style.display = "none";
  }, []);

  return (
    <div className="signIn">
      <h3>Login</h3>
      <div className="signInBox shadow bg-white rounded">
        <div className="loginIcon">
          <img
            src={`${process.env.PUBLIC_URL}./logo.png`}
            width="150"
            height="150"
            alt="logo"
          />
        </div>
        <div className="loginForm">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="eachRow">
              <label>
                <b>Email</b>
              </label>
              <input
                {...register("email", { required: true })}
                type="email"
                className="form-control"
                placeholder="Email"
              />
              {errors.email && <p className="errorMsg">Email is required.</p>}
            </div>
            <div className="eachRow">
              <label>
                <b>Password</b>
              </label>
              <input
                {...register("password", { required: true })}
                className="form-control"
                placeholder="Password"
                type="password"
              />
              {errors.password && (
                <p className="errorMsg">Password is required.</p>
              )}
            </div>
            <button type="submit" className="loginButton">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
