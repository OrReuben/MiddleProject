import { Button } from '@mui/material';
import * as Yup from "yup"
import TextField from '@mui/material/TextField';
import "./Payment.css"
import { Formik, Field } from 'formik';
import { PaymentInputsWrapper, usePaymentInputs } from 'react-payment-inputs';

const schema= Yup.object().shape({
  name:Yup.string()
  .required("Plz enter name!!!")
  .min(3,'enterd vaild name should have 3 charcters'),

  id:Yup.number()
  .required("Plz enter Id!!!")
  .integer("A phone number can't include a decimal point")
  .positive("A phone number can't start with a minus")
  .min(100000000,'enterd vaild Id should have 9 charcters')
  .max(999999999,"enterd vaild Id should have 9 charcters not more"),
})
function Payment() {
  const {
    meta,
    getCardNumberProps,
    getExpiryDateProps,
    getCVCProps,
    wrapperProps
  } = usePaymentInputs();
    return (
      <div className="Payment">
    Payment
   
        <div className="h-40 my-4 bg-white rounded-md paymentForm">
        <h1>Payment</h1>
            <Formik initialValues={{name:"", id:"",cardNum:"",date:"",cardNumber: '',expiryDate: '',cvc: ''}}
             onSubmit={(values)=>alert( JSON.stringify(values))}
             validationSchema={schema}
             className="paymentForm"
             validate={() => {
              let errors = {};
              if (meta.erroredInputs.cardNumber) {
                errors.cardNumber = meta.erroredInputs.cardNumber;
              }
              if (meta.erroredInputs.expiryDate) {
                errors.expiryDate = meta.erroredInputs.expiryDate;
              }
              if (meta.erroredInputs.cvc) {
                errors.cvc = meta.erroredInputs.cvc;
              }
              return errors;
            }}
             >

                {({handleSubmit, handleChange,handleBlur,values,errors,touched})=>(
                <form action="" onSubmit= {handleSubmit} noValidate>
                <TextField
                type="text"
                 name="name"
                placeholder="Card holder name"
                onChange={  handleChange}
                value={values.name}
                onBlur={handleBlur}
                 className="fields"
                />
                <p>{errors.name && touched.name && errors.name}</p>
                <TextField 
                type="number" 
                name="id" 
                placeholder="ID"
                onChange={handleChange}
                value={values.id}
                className="fields"
                />
               <p style={{color:"red"}}>{errors.id && touched.id && errors.id}</p>
 
               <div >
            <PaymentInputsWrapper {...wrapperProps} className="fields">
                
              <Field name="cardNumber">
                {({ field }) => (
                  <input {...getCardNumberProps({ onBlur: field.onBlur, onChange: field.onChange })} />
                )}
              </Field>
                <div>

              <Field name="expiryDate">
                {({ field }) => (
                  <input {...getExpiryDateProps({ onBlur: field.onBlur, onChange: field.onChange })} />
                )}
              </Field>
              <Field name="cvc">
                {({ field }) => <input {...getCVCProps({ onBlur: field.onBlur, onChange: field.onChange })} />}
              </Field>
                </div>
            </PaymentInputsWrapper>
          </div>
                <Button type="submit" className="fields">Login</Button>
                </form>
                )}
            </Formik>
          
        </div>

  


      </div>
    );
  }
  
  export default Payment;

  