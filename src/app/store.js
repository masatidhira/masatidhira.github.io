import { configureStore } from "@reduxjs/toolkit";
import chatboxReducer from "../features/chatbox/chatboxSlice";

export default configureStore({
  reducer: {
    chatbox: chatboxReducer,
  },
});
