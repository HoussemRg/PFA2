import axios from 'axios';
import Url from '../utils/url';
import { authActions } from '../slices/authSlice';
import {toast} from 'react-toastify'

const loginUser=(user)=>{
    return async (dispatch)=>{
        try{
            const res=await axios.post(`${Url}/api/auth/login`,user);
            dispatch(authActions.login(res.data));
            toast.success("user logged in")
        }catch(err){
            console.log(err);
        }
    }
}

export {loginUser};