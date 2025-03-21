import { loginRequest } from "@/services/auth";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";

interface UserState {
  loading: boolean;
  user: any;
  error: any;
}

// export const loginUser = createAsyncThunk(
//   "user/loginUser",
//   async (userCredentials) => {
//     const request = await axios.post(`${api}/auth/login`, userCredentials);
//     const response = await request.data.data;
//     localStorage.setItem("user", JSON.stringify(response));
//     return response;
//   }
// );

interface User {
  id: number;
  username: string;
  name: string;
  token: string;
}

export const loginUser = createAsyncThunk<
  User,
  { username: string; password: string },
  { rejectValue: string }
>("user/loginUser", async (userCredentials, { rejectWithValue }) => {
  try {
    const { username, password } = userCredentials;
    const userData = await loginRequest(username, password); 
    return userData;
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});

export const logoutUser = createAsyncThunk(
  "user/logoutUser",
  async (_, { rejectWithValue }) => {
    try {
      localStorage.removeItem("user");
      Cookies.remove("token");
      return true;
    } catch (error) {
      return rejectWithValue("Logout failed");
    }
  }
);

const initialState: UserState = {
  loading: false,
  user: null,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Login failed";
      })
      .addCase(logoutUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.loading = false;
        state.user = null;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Logout failed";
      });
  },
});

export default userSlice.reducer;
