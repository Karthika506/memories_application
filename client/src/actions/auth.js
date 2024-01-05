import { AUTH } from '../constants/actionTypes';
// import * as api from '../api/index';
import {signIn, signUp} from '../api/index'


export const signin = (formData, navigate) => async (dispatch) => {
    try {
        const { data } = await signIn(formData);

        dispatch({type: AUTH, data});

        navigate('/');
    } catch (error) {
        console.log("error");
    }
}

export const signup = (formData, navigate) => async (dispatch) => {
    try {
        const { data } = await signUp(formData);

        dispatch({type: AUTH, data});

        navigate('/');
    } catch (error) {
        console.log(error);
    }
}