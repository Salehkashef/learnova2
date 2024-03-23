import { useLocation, useNavigate } from "react-router-dom";
import axiosInstance from "../../Axios/interceptor";
import { useForm } from "react-hook-form";
import style from './UpdateProfile.module.css'; // Import CSS file for custom styles

function UpdateProfile() {
  const navigate = useNavigate();

  const location = useLocation();
  const userID = location.state;
  console.log(userID);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function UpdateProfile(data) {
    console.log(data);
    const formData = new FormData();
    formData.append("fullName", data.fullName);
    formData.append("Email", data.Email);
    formData.append("Password", data.Password);
    formData.append("age", data.age);
    formData.append("phone", data.phone);
    formData.append("nationalId", data.nationalId);
    formData.append("gender", data.gender);

    try {
      const response = await axiosInstance.put(
        `http://localhost:4000/user/update/${userID}`,
        data
      );

      alert(response.data.message);
      navigate("/profile");
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className={style.card}>
            <div className="card-body">
              <h1 className={style.cardtitle}>Update Profile</h1>
              <form onSubmit={handleSubmit(UpdateProfile)}>
                <div className="mb-3">
                  <label htmlFor="fullName" className={style.formlabel}>
                    Name
                  </label>
                  <input
                    {...register("fullName", {
                      required: {
                        value: true,
                        message: "user name is required",
                      },
                      minLength: {
                        value: 8,
                        message: "invalid user name",
                      },
                    })}
                    className="form-control"
                    id="fullName"
                    type="text"
                  />
                  <p className={style.textdanger}>{errors.fullName?.message}</p>
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className={style.formlabel}>
                    Your email
                  </label>
                  <input
                    {...register("Email", {
                      required: {
                        value: true,
                        message: "Email is required",
                      },
                    })}
                    className="form-control"
                    id="email"
                    type="email"
                  />
                  <p className={style.textdanger}>{errors.Email?.message}</p>
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className={style.formlabel}>
                    Password
                  </label>
                  <input
                    {...register("Password", {
                      required: {
                        value: true,
                        message: "Password is required",
                      },
                      minLength: {
                        value: 8,
                        message: "invalid user name",
                      },
                    })}
                    className="form-control"
                    id="password"
                    type="password"
                  />
                  <p className={style.textdanger}>{errors.Password?.message}</p>
                </div>
                <div className="mb-3">
                  <label htmlFor="age" className={style.formlabel}>
                    Age
                  </label>
                  <input
                    {...register("age", {
                      required: {
                        value: true,
                        message: "Age is required",
                      },
                    })}
                    className="form-control"
                    id="age"
                    type="number"
                  />
                  <p className={style.textdanger}>{errors.age?.message}</p>
                </div>
                <div className="mb-3">
                  <label htmlFor="phone" className={style.formlabel}>
                    Phone
                  </label>
                  <input
                    className="form-control"
                    id="phone"
                    type="text"
                    {...register("phone", {
                      required: {
                        value: true,
                        message: "user name is required",
                      },
                      minLength: {
                        value: 11,
                        message: "phone number must be 11 number",
                      },
                      maxLength: {
                        value: 11,
                        message: "phone number must be 11 number",
                      },
                    })}
                  />
                  <p className={style.textdanger}>{errors.phone?.message}</p>
                </div>
                <div className="mb-3">
                  <label htmlFor="nationalId" className={style.formlabel}>
                    National ID
                  </label>
                  <input
                    {...register("nationalId", {
                      required: {
                        value: true,
                        message: "nationalId is required",
                      },
                      minLength: {
                        value: 14,
                        message: "must Be 14 number",
                      },
                    })}
                    className="form-control"
                    id="nationalId"
                    name="nationalId"
                    required
                    type="text"
                  />
                  <p className={style.textdanger}>{errors.nationalId?.message}</p>
                </div>
                <div className="mb-3">
                  <label htmlFor="gender" className={style.formlabel}>
                    Gender
                  </label>
                  <select
                    {...register("gender", {
                      required: {
                        value: true,
                        message: "Gender is required",
                      },
                    })}
                    className="form-control"
                    id="gender"
                  >
                    <option value="">Choose Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                  <p className={style.textdanger}>{errors.gender?.message}</p>
                </div>
                <button
                  className="btn btn-primary"
                  type="submit"
                >
                  Update Profile
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateProfile;
