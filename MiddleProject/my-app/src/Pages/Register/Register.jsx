import { Formik, Field } from "formik";
import * as Yup from "yup";
import './Register.css'

function Register() {
  const schema = Yup.object().shape({
    Username: Yup.string()
      .required("Username is required!")
      .min(6, "The username should have atleast 6 characters"),

    Password: Yup.string()
      .required("Password is required!")
      .min(8, "the password should have atleast 8 characters"),

    ConfirmPassword: Yup.string()
      .required("Confirming is required!")
      .oneOf([Yup.ref("password"), null], "Passwords must match"),

    Mail: Yup.string()
      .required("Mail is required!")
      .email("Must be a vaild mail!")
      .max(255),

    PhoneNumber: Yup.string()
      .required("Phone number is required!")
      .min(10, "The phone number isn't long enough!"),

    Date: Yup.string()
      .required("Date is required!"),
      

    Checkbox: Yup.bool().oneOf(
      [true, null],
      "You need to accept the terms and conditions"
    ),
  });

  return (
    <div className="Register">
      <h1>Register</h1>
      <Formik
        initialValues={{
          Username: "",
          Password: "",
          ConfirmPassword: "",
          Mail: "",
          PhoneNumber: "",
          Date: "",
          Checkbox: false,
        }}
        validationSchema={schema}
      >
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          values,
          errors,
          touched,
        }) => (
          <form onSubmit={handleSubmit} noValidate>
            <label for="username">
              {" "}
              <b>Username</b>
            </label>
            <input
              id="username"
              type="text"
              name="Username"
              placeholder="Username"
              onChange={handleChange}
              value={values.Username}
              onBlur={handleBlur}
            />
            <p style={{ color: "red" }}>
              {errors.Username && touched.Username && errors.Username}
            </p>
            <label for="psw">
              {" "}
              <b>Password</b>
            </label>
            <input
              id="psw"
              type="password"
              name="Password"
              placeholder="Password"
              onChange={handleChange}
              value={values.Password}
              onBlur={handleBlur}
            />
            <p style={{ color: "red" }}>
              {errors.Password && touched.Password && errors.Password}
            </p>
            <label for="psw-repeat">
              <b>Confirm Password</b>
            </label>
            <input
              id="psw-repeat"
              type="password"
              name="ConfirmPassword"
              placeholder="Confirm Password"
              onChange={handleChange}
              value={values.ConfirmPassword}
              onBlur={handleBlur}
            />
            <p style={{ color: "red" }}>
              {errors.ConfirmPassword &&
                touched.ConfirmPassword &&
                errors.ConfirmPassword}
            </p>
            <label for="mail">
              {" "}
              <b>Mail</b>
            </label>
            <input
              id="mail"
              type="email"
              name="Mail"
              placeholder="Mail"
              onChange={handleChange}
              value={values.Mail}
              onBlur={handleBlur}
            />
            <p style={{ color: "red" }}>
              {errors.Mail && touched.Mail && errors.Mail}
            </p>
            <label for="phone-number">
              {" "}
              <b>Phone Number</b>
            </label>
            <input
              id="phone-number"
              type="number"
              name="PhoneNumber"
              placeholder="Phone Number"
              onChange={handleChange}
              value={values.PhoneNumber}
              onBlur={handleBlur}
            />
            <p style={{ color: "red" }}>
              {errors.PhoneNumber && touched.PhoneNumber && errors.PhoneNumber}
            </p>
            <label for="date">
              {" "}
              <b>Date</b>
            </label>
            <input
              id="phone-number"
              type="date"
              name="Date"
              placeholder="Date"
              onChange={handleChange}
              value={values.Date}
              onBlur={handleBlur}
            />
            <p style={{ color: "red" }}>
              {errors.Date && touched.Date && errors.Date}
            </p>
            <div className="checkbox">
              <label for="checkbox">
                <b>I agree to the terms and conditions</b>
              </label>
              <Field
                id="checkbox"
                type="checkbox"
                name="Checkbox"
                onChange={handleChange}
              />{" "}
              <br />
            </div>
            <p style={{ color: "red" }}>
              {errors.Checkbox && touched.Checkbox && errors.Checkbox}
            </p>
            <button className="registerbtn" type="submit">
              Register
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default Register;
