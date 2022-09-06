import { Button } from '@mui/material';
import * as Yup from "yup"
import TextField from '@mui/material/TextField';
import "./Payment.css"
import { Formik } from 'formik';


const schema= Yup.object().shape({
  name:Yup.string()
  .required("Plz enter name!!!")
  .min(3,'enterd vaild name should contain 3 charcters')
  ,

  id:Yup.number()
  .required("Plz enter Id!!!")
  .integer("A phone number can't include a decimal point")
  .positive("A phone number can't start with a minus")
  .min(100000000,'enterd vaild Id should contain 9 charcters')
  .max(999999999,"enterd vaild Id should contain 9 charcters not more"),

  cardNum:Yup.number()
  .required("Plz enter card number!!!")
  .min(1000000000000000,'enterd vaild card number should contain 16 charcters')
  .max(9999999999999999,"enterd vaild card number should contain 16 charcters not more"),

  date:Yup.string()
  .required("Plz enter date!!!"),

  cvc:Yup.string()
  .required("Plz enter cvc!!!")
  .min(3,'enterd vaild CVC should contain 3 charcters')
  .max(3,"enterd vaild CVC should contain 3 charcters not more"),

  tearms:Yup.boolean().oneOf([true],'agree the tearms')
  .required("agree the tearms")
})
function Payment() {

    return (
      <div className="Payment">

        <div className="h-40 my-4 bg-white rounded-md paymentForm">
        <h1>Payment</h1>
            <Formik initialValues={{name:"", id:"",cardNum:"",date:"",cvc:"",tearms:""}}
             onSubmit={(values)=>alert( JSON.stringify(values))}
             validationSchema={schema}
             className="paymentForm"
             >
                {({handleSubmit, handleChange,handleBlur,values,errors,touched})=>(
                <form action="" onSubmit= {handleSubmit} noValidate>
                <TextField
                type="text"
                 name="name"
                placeholder="Card holder name"
                onChange={handleChange}
                value={values.name}
                onBlur={handleBlur}
                />
                <p>{errors.name && touched.name && errors.name}</p>
                <TextField 
                type="number" 
                name="id" 
                placeholder="ID"
                onChange={handleChange}
                value={values.id}
                className="numbers"
                />
               <p style={{color:"red"}}>{errors.id && touched.id && errors.id}</p>
 
               <TextField  
                type="number" 
                name="cardNum" 
                placeholder="Card number"
                onChange={handleChange}
                value={values.cardNum}
                />
               <p style={{color:"red"}}>{errors.cardNum && touched.cardNum && errors.cardNum}</p>

               <TextField 
                type="month" 
                name="date" 
                placeholder="Date"
                onChange={handleChange}
                value={values.date}
                className="date"
                />
               <p style={{color:"red"}}>{errors.date && touched.date && errors.date}</p>
                
            
               <TextField 
                type="number" 
                name="cvc" 
                placeholder="CVC"
                onChange={handleChange}
                value={values.cvc}
                max="999"
                min="100"
                />
               <p style={{color:"red"}}>{errors.cvc && touched.cvc && errors.cvc}</p>

               <div className='agreetearms'>
                <TextField type="checkBox" name="tearms" onChange={handleChange} value={values.tearms}/>
                <h5>agree to all tearms</h5>
               </div>
               <p>{errors.tearms && touched.tearms && errors.tearms}</p>



                <Button type="submit">Login</Button>
                </form>
                )}
            </Formik>
          
        </div>

  


      </div>
    );
  }
  
  export default Payment;

  