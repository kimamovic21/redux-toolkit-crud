import axios from "axios";
import { toast } from "react-toastify";
import { ADD_USER, DELETE_USER, FAIL_REQUEST, GET_USER_LIST, GET_USER_OBJ, MAKE_REQUEST, UPDATE_USER } from "./actionType";

export const makeRequest = () => {
    return {
        type:MAKE_REQUEST
    };
};

export const failRequest = (error) => {
    return {
        type:FAIL_REQUEST,
        payload:error
    };
};

export const getUserList = (data) => {
    return {
        type:GET_USER_LIST,
        payload:data
    };
};

export const addUser = () => {
    return {
        type: ADD_USER
    };
};

export const updateUser = () => {
    return {
        type: UPDATE_USER
    };
};

export const getUserObj = (data) => {
    return {
        type: GET_USER_OBJ,
        payload: data
    };
};

export const deleteUser = () => {
    return {
        type: DELETE_USER,
    };
};

export const fetchUserList = () => {
    return (dispatch) => {
        dispatch(makeRequest());
        axios
            .get(`http://localhost:8000/user`)
            .then((res) => {
                const userList = res.data;
                dispatch(getUserList(userList))
            })
            .catch((error) => {
                dispatch(failRequest(error.message));
            })
    }    
}

export const createUser = (data) => {
    return (dispatch) => {
        dispatch(makeRequest());
        axios
            .post(`http://localhost:8000/user/`, data)
            .then((res) => {
                dispatch(addUser());
                toast.success('User added successfully!');
            })
            .catch((error) => {
                dispatch(failRequest(error.message));
            })
    }    
}

export const editUser = (data, code) => {
    return (dispatch) => {
        dispatch(makeRequest());
        axios
            .put(`http://localhost:8000/user/${code}`, data)
            .then((res) => {
                dispatch(updateUser());
                toast.success('User updated successfully!');
            })
            .catch((error) => {
                dispatch(failRequest(error.message));
            })
    }    
}

export const removeUser = (code) => {
    return (dispatch) => {
        dispatch(makeRequest());
        axios
            .delete(`http://localhost:8000/user/${code}`)
            .then((res) => {
                dispatch(deleteUser())
            })
            .catch((error) => {
                dispatch(failRequest(error.message));
            })
    }    
}

export const fetchUserObj = (code) => {
    return (dispatch) => {
        dispatch(makeRequest());
        axios
            .get(`http://localhost:8000/user/${code}`)
            .then((res) => {
                const userList = res.data;
                dispatch(getUserObj(userList))
            })
            .catch((error) => {
                dispatch(failRequest(error.message));
            })
    }    
}
