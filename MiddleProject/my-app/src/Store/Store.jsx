import {configureStore} from '@reduxjs/toolkit'
import InputReducer from './InputSlice'
export default configureStore ({
    reducer : {
     input:InputReducer
    }
})