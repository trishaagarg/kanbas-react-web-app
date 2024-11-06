import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { users } from "../../Database"; // Import the users data from the database

interface User {
  _id: string;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  email: string;
  dob: string;
  role: string;
  loginId: string;
  section: string;
  lastActivity: string;
  totalActivity: string;
}

interface UsersState {
  users: User[];
  currentUser: User | null;
}

const initialState: UsersState = {
  users: users, // Load initial users from the database
  currentUser: null, // Initial value for currentUser is null
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setCurrentUser: (state, action: PayloadAction<string>) => {
      // Set current user based on userId (simulating a sign-in)
      state.currentUser = state.users.find(user => user._id === action.payload) || null;
    },
    logoutUser: (state) => {
      // Clear currentUser on logout
      state.currentUser = null;
    },
  },
});

export const { setCurrentUser, logoutUser } = usersSlice.actions;
export default usersSlice.reducer;