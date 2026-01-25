import { combineReducers } from "@reduxjs/toolkit";

import posts from "./posts.jsx";
import auth from "./auth.jsx";
export default combineReducers({ posts , auth});