import { useNavigate } from "react-router-dom";
import { addData } from "../../Store/InputSlice";
import { useDispatch } from "react-redux";
import React from "react";
import {
  Grid,
  makeStyles,
  Card,
  CardContent,
  MenuItem,
  InputLabel,
  Select,
  CardActions,
  Button,
  CardHeader,
  FormControl,
} from "@material-ui/core";

import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { TextField } from "formik-material-ui";

const useStyle = makeStyles((theme) => ({
  padding: {
    margin: "0px 10px"
  },
  button: {
    margin: theme.spacing(1),
  },
  background: {
    backgroundImage: "linear-gradient(to right, #EF9A9A, #EEEEE2, #EF9A9A)",
    height: "100vh",
    display: "flex",
    alignItems: "center",
  },
}));

//Data
const initialValues = {
  username: "",
  following: "",
  phoneNumber: "",
  pswRepeat: "",
  email: "",
  password: "",
};

const options = [
  { label: "None", value: "none" },
  { label: "Facebook", value: "Facebook" },
  { label: "Snapchat", value: "snapchat" },
  { label: "Instagram", value: "instagram" },
];

//password validation
const lowercaseRegEx = /(?=.*[a-z])/;
const uppercaseRegEx = /(?=.*[A-Z])/;
const numericRegEx = /(?=.*[0-9])/;
const lengthRegEx = /(?=.{6,})/;

//validation schema
let schema = Yup.object().shape({
  username: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .matches(
      lowercaseRegEx,
      "Must contain one lowercase alphabetical character!"
    )
    .matches(
      uppercaseRegEx,
      "Must contain one uppercase alphabetical character!"
    )
    .matches(numericRegEx, "Must contain one numeric character!")
    .matches(lengthRegEx, "Must contain 6 characters!")
    .required("Required!"),
  pswRepeat: Yup.string()
    .required("Required!")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
  phoneNumber: Yup.string().required("Required"),
});

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const Redirection = (values) => {
    dispatch(addData(values));
    navigate("/");
  };
  const classes = useStyle();
  return (
      <div className={classes.background}>
        <Grid container justifyContent="center" spacing={1}>
          <Grid item md={6}>
            <Card className={classes.padding}>
              <CardHeader title="REGISTER"></CardHeader>
              <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={Redirection}
              >
                {({ dirty, isValid, values, handleChange, handleBlur }) => {
                  return (
                    <Form>
                      <CardContent>
                        <Grid
                          item
                          container
                          spacing={1}
                          justifyContent="center"
                        >
                          <Grid item xs={9} sm={6} md={6}>
                            <Field
                              label="Username"
                              variant="outlined"
                              fullWidth
                              type="text"
                              name="username"
                              value={values.username}
                              component={TextField}
                            />
                          </Grid>

                          <Grid item xs={9} sm={6} md={12}>
                            <FormControl fullWidth variant="outlined">
                              <InputLabel id="demo-simple-select-outlined-label">
                                Following?
                              </InputLabel>
                              <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                label="Following"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.following}
                                name="following"
                              >
                                {options.map((item) => (
                                  <MenuItem key={item.value} value={item.value}>
                                    {item.label}
                                  </MenuItem>
                                ))}
                              </Select>
                            </FormControl>
                          </Grid>
                          <Grid item xs={9} sm={6} md={6}>
                            <Field
                              label="Phone Number"
                              variant="outlined"
                              fullWidth
                              name="phoneNumber"
                              value={values.phoneNumber}
                              component={TextField}
                            />
                          </Grid>
                          <Grid item xs={9} sm={6} md={6}>
                            <Field
                              label="Email"
                              variant="outlined"
                              fullWidth
                              name="email"
                              value={values.email}
                              component={TextField}
                            />
                          </Grid>
                          <Grid item xs={9} sm={6} md={6}>
                            <Field
                              label="Password"
                              variant="outlined"
                              fullWidth
                              name="password"
                              value={values.password}
                              type="password"
                              component={TextField}
                            />
                          </Grid>
                          <Grid item xs={9} sm={6} md={6}>
                            <Field
                              label="Confirm Password"
                              variant="outlined"
                              fullWidth
                              name="pswRepeat"
                              type="password"
                              value={values.pswRepeat}
                              component={TextField}
                            />
                          </Grid>
                        </Grid>
                      </CardContent>
                      <CardActions>
                        <Button
                          disabled={!dirty || !isValid}
                          variant="contained"
                          color="primary"
                          type="Submit"
                          className={classes.button}
                        >
                          REGISTER
                        </Button>
                      </CardActions>
                    </Form>
                  );
                }}
              </Formik>
            </Card>
          </Grid>
        </Grid>
      </div>
  );
};

export default Register;
