import axios from "axios";
import Cookies from "js-cookie";


const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
      "Content-Type": "application/json",
    },
  });


interface User {
  id: number;
  username: string;
  name: string;
  token: string;
}


export const loginRequest = async (username: string, password: string): Promise<User> => {
  try {
    const response = await api.post(`/login`, { username, password });

    const userData = response.data; 

    console.log(userData)
    localStorage.setItem("user", JSON.stringify(userData));
    Cookies.set("token", userData.token, { expires: 7 });

    return userData;
  } catch (error: any) {
   
    if (error.response && error.response.data.message) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error("Login failed. Please try again.");
    }
  }
};

