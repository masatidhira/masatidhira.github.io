import { createSlice } from "@reduxjs/toolkit";

export const chatboxSlice = createSlice({
  name: "chatbox",
  initialState: {
    isOpen: false,
  },
  reducers: {
    openChatbox: (state) => {
      state.isOpen = true;
    },
    closeChatbox: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openChatbox, closeChatbox } = chatboxSlice.actions;

export default chatboxSlice.reducer;
