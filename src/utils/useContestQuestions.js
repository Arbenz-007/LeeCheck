import React, { useEffect, useState } from "react";
import { getContestQuestion } from "./api";

const useContestQuestions = (contestSlug) => {

    const [question,setQuestion]=useState([])
  useEffect(() => {
    async function getQuestion() {
      const data = await getContestQuestion(contestSlug);
      console.log(data);
      setQuestion(data);
    }

    getQuestion();
  }, [contestSlug]);
  return question;
};

export default useContestQuestions;
