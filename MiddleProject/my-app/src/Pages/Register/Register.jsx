import { useSelector, useDispatch } from "react-redux";
import {incrament, decrament, selectInput} from "../../Store/InputSlice"

function Register() {
  const dispatch = useDispatch()
  const select = useSelector(selectInput)

    return (
      <div className="Register">
        <h1>Register</h1>
        <button onClick={() => dispatch(incrament())}>Click</button>
        <button onClick={() => dispatch(decrament())}>Click2</button>
        {select}
      </div>
    );
  }
  
  export default Register;