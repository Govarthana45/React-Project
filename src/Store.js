import { configureStore } from "@reduxjs/toolkit";
import tasksreducer from "./Taskslice";

export const store = configureStore({
  reducer: {
    tasks: tasksreducer,
  },
});
