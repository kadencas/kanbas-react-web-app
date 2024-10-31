// enrollmentsSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { enrollments as initialEnrollments } from "./Database";

const initialState = {
  enrollments: initialEnrollments || [],
};

const enrollmentsSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    addEnrollment: (state, { payload: enrollment }) => {
      const newEnrollment = {
        _id: new Date().getTime().toString(),
        user: enrollment.user,
        course: enrollment.course,
      };
      state.enrollments = [...state.enrollments, newEnrollment];
    },
    deleteEnrollment: (state, { payload: enrollment }) => {
      state.enrollments = state.enrollments.filter(
        (e) => !(e.user === enrollment.user && e.course === enrollment.course)
      );
    },
    updateEnrollment: (state, { payload: enrollment }) => {
      state.enrollments = state.enrollments.map((e) =>
        e._id === enrollment._id ? enrollment : e
      );
    },
  },
});

export const { addEnrollment, deleteEnrollment, updateEnrollment } = enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;
