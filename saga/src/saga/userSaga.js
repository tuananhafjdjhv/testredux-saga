import  * as userService  from "../api/userService";
import { act_user_success } from "../redux/actions";
import { USER_SUCCESS } from "../redux/constants/actionTypes";
import { call,put } from "redux-saga/effects";

// các saga làm việc với 
export const USER_SAGA_GET = function* () {
    let listUser = yield call(userService.USER_GET_SERVICE);
    try {
        
        yield put(act_user_success(USER_SUCCESS, listUser))
    } catch(error) {
        console.log(error);
    }
   
}
export const USER_SAGA_POST = function* (action) {
    try {
        // them oi thanh cong
        
        yield call(userService.USER_POST_SERVICE, action.payload);
       yield USER_SAGA_GET();
    } catch (error) {
        console.log(error);
    }
}