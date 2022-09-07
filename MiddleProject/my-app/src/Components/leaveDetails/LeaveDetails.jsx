import { Button, Input, TextField } from "@mui/material"
import {Formik} from "formik"
import * as Yup from "yup"
import "./LeaveDetails.css"
const LeaveDetails =() => {
 const schema= Yup.object().shape({
    email:Yup.string()
    .required("Plz enter name!!!"),

    password:Yup.string()
    .required("Plz enter password!!!")
    .min(8,'enterd vaild password should have 8 charcters')
    
})
    return(
        <div>
            <h1>NOW, LET'S TALK!</h1>
            <div className="LeaveDetailsSection">
             
            <Formik initialValues={{fullName:"", tel:"",cardNum:"",date:"",cvc:""}}
             onSubmit={(values)=>alert( JSON.stringify(values))}
             validationSchema={schema}>

                {({handleSubmit, handleChange,handleBlur,values,errors,touched})=>(
                <form action="" onSubmit= {handleSubmit} noValidate className="LeaveDetailsForm">
                <TextField 
                type="text"
                 name="fullName"
                placeholder="Full Name"
                onChange={handleChange}
                value={values.fullName}
                onBlur={handleBlur}
                />
                <Input 
                type="tel" 
                name="tel" 
                placeholder="Phone"
                onChange={handleChange}
                value={values.tel}
                />
                <Input 
                type="select" 
                name="tel" 
                placeholder="Phone"
                onChange={handleChange}
                value={values.tel}
                />
                <Input 
                type="text" 
                name="tel" 
                placeholder="Phone"
                onChange={handleChange}
                value={values.tel}
                />

                <Button type="submit" variant="contained">Login</Button>
                </form>
                )}
            </Formik>
            <div>Leave 
                Your 
                Detail
                <div>
                    
                </div>
            </div>
            
            </div>
        </div>
    )
}
export default LeaveDetails