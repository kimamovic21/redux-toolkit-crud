import { createSlice } from "@reduxjs/toolkit";
import { userList } from '../data/userList';

const userSlice = createSlice({
    name: 'user',
    initialState: userList,
    reducers: {
        addUser: (state, action) => {
            console.log(action);
            state.push(action.payload);
        },

        editUser: (state, action) => {
            const { id, name, email } = action.payload;
            let updatedUser = state.find((user) => user.id == id);
            if (updatedUser) {
                updatedUser.name = name;
                updatedUser.email = email;
            }
        },

        deleteUser: (state, action) => {
            const { id } = action.payload;
            const deletedUser = state.find((user) => user.id == id);
            if (deletedUser) {
                return state.filter(user => user.id !== id);
            }
        },
    },
});

export const { addUser, editUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
