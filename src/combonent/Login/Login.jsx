// import React from "react";
import { useForm } from "react-hook-form";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import img from '../../assets/img/Rectangle77.jpg'
import { axiosInstance } from "../../Axios/interceptor";
import { AuthContext } from "../context/AxiosProvider";
import { useContext, useEffect, useState } from "react";
function LoginForm() {
  const { login, isAuthenticated, UserID  } = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState("");
//  useEffect(() => {
//    if (isAuthenticated && UserID ) {
//      navigate("/inst/profile");
//    }
//  }, [isAuthenticated, UserID, navigate]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    axiosInstance
      .post("http://localhost:4000/user/login", data)
      .then((response) => {
        console.log(response);
        localStorage.setItem("userID", response.data.data.user._id);
        login(response.data.data.user);
        const role = response.data.data.user.role;
        if (role == "instructor") {
          navigate("/profile", { state: response.data.data.user });
        } else if(role == "student") {

          navigate("/user-profile");

        }
      })
      .catch((error) => {
        setError("Invalid credentials. Please try again.");
        console.error("Error sending form data:", error);
      });
  };

  return (
    <div className="body">
      <div className=" row row-col-2 p-20px g-30px">
        {/* left */}
        <div className="loginImg container col-6">
          <img
            src={img}
            alt=""
          />
        </div>

        {/* right */}
        <div className=" right col-6 container ">
          <div className="loginInfo">
            <p>
              Welcome To{" "}
              <span style={{ color: "#49BBBD", fontSize: "20px" }}>
                {" "}
                Learnova{" "}
              </span>
            </p>
            <div className="switch">
              <ul>
                <li className="loginButton active">
                  <Link to="/Login">Login</Link>
                </li>
                <li className=" active">
                  <Link to="/Register">Register</Link>
                </li>
              </ul>
            </div>
            <p className="tx">
              With{" "}
              <span style={{ color: "#49BBBD", fontSiz: "20px" }}>
                {" "}
                Learnova ...{" "}
              </span>
              Explore boundless learning opportunities tailored just for you.
            </p>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="inputBox">
                <label htmlFor="email">Email</label>

                <input
                  className="input"
                  type="email"
                  id="email"
                  {...register("Email", {
                    required: true,
                    pattern: /^\S+@\S+$/i,
                  })}
                />
                {errors.Email && errors.Email.type === "required" && (
                  <span className="error">This field is required</span>
                )}
                {errors.Email && errors.Email.type === "pattern" && (
                  <span className="error">Invalid email format</span>
                )}
              </div>

              <div className="inputBox">
                <label htmlFor="Password">Password</label>
                <input
                  type="password"
                  {...register("Password", {
                    required: "Password is required",
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters",
                    },
                  })}
                />
                {errors.Password && (
                  <p className="error">{errors.Password.message}</p>
                )}
              </div>

              <div className="forgot">
                <a rel="#" href="#">
                  Forgot Password ?
                </a>
              </div>

              <button type="submit" className="login">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
