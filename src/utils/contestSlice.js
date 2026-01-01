import { createSlice } from "@reduxjs/toolkit";

const contestSlice = createSlice({
  name: "contests",
  initialState: {
    list: [],
  },
  reducers: {
    setContests: (state, action) => {
      state.list = action.payload.map((contest) => ({
        ...contest,
        questions: [],
        questionsLoaded: false,
      }));
    },

    // Add questions to ONE contest
    setContestQuestions: (state, action) => {
      const { contestSlug, questions } = action.payload;

      const contest = state.list.find(
        (c) => c.contest.titleSlug === contestSlug
      );

      if (contest) {
        contest.questions = questions;
        contest.questionsLoaded = true;
      }
    },
  },
});

export const {
  setContests,
  setContestQuestions,
} = contestSlice.actions;

export default contestSlice.reducer;
