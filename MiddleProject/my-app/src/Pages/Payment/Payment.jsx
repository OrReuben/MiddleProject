import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import './Payment.css'
import React from "react";
import {
  Grid,
  makeStyles,
  Card,
  CardContent,
  CardActions,
  Button,
  CardHeader,
} from "@material-ui/core";

import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { TextField } from "formik-material-ui";
import { addCard } from "../../Store/InputSlice";

const useStyle = makeStyles((theme) => ({
  padding: {
    padding: theme.spacing(3),
    margin: "0px 10px",
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
  cardName: "",
  cardNumber: "",
  expDate: "",
  cvv: "",
};

//validation schema
let schema = Yup.object().shape({
  cardName: Yup.string()
    .required("Required")
    .min(6, "Must contain 6 characters!"),
  cardNumber: Yup.string().required("Required").min(16, "Invalid card!"),
  expDate: Yup.string().required("Required").max(4, "Invalid date!"),
  cvv: Yup.string().required("Required").max(3, "Invalid CVV!"),
});

const Payment = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const Redirection = (values) => {
    dispatch(addCard(values));
    navigate("/");
  };
  const classes = useStyle();
  return (
    <div className={classes.background}>
      <Grid container justifyContent="center" spacing={1}>
        <Grid item md={6}>
          <Card className={classes.padding}>
            <CardHeader title="PAYMENT"></CardHeader>
            <Formik
              initialValues={initialValues}
              validationSchema={schema}
              onSubmit={Redirection}
            >
              {({ dirty, isValid, values, handleChange, handleBlur }) => {
                return (
                  <Form>
                    <CardContent>
                      <Grid item container spacing={1} justifyContent="center">
                        <Grid item xs={12} sm={12} md={12}>
                          <Field
                            label="Card Name"
                            variant="outlined"
                            fullWidth
                            name="cardName"
                            value={values.cardName}
                            component={TextField}
                          />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12}>
                          <Field
                            label="Card Number"
                            variant="outlined"
                            fullWidth
                            name="cardNumber"
                            value={values.cardNumber}
                            component={TextField}
                            type="number"
                          />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12}>
                          <Field
                            label="Expiration Date"
                            variant="outlined"
                            fullWidth
                            name="expDate"
                            value={values.expDate}
                            component={TextField}
                            type="number"
                          />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12}>
                          <Field
                            label="CVV"
                            variant="outlined"
                            fullWidth
                            name="cvv"
                            helperText="3 numbers behind your card"
                            value={values.cvv}
                            component={TextField}
                            type="number"
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
                        Confirm
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

export default Payment;
