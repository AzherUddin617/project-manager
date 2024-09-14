import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface InitialStateTypes {
  isSidebarCollapsed: boolean;
  isDarkMode: boolean;
}

const initialState: InitialStateTypes = {
  isSidebarCollapsed: false,
  isDarkMode: false,
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setIsSidebarCollapsed: (state, actions: PayloadAction<boolean>) => {
      state.isSidebarCollapsed = actions.payload;
    },
    setIsDarkMode: (state, actions: PayloadAction<boolean>) => {
      state.isDarkMode = actions.payload;
    },
  },
});

export const { setIsSidebarCollapsed, setIsDarkMode } = globalSlice.actions;
export default globalSlice.reducer;
