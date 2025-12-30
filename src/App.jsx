import { useEffect, useState } from "react";
import { getContestQuestion, getLastFiveContest, getUserInfo } from "./utils/api";
import ContestCard from "./Components/ContestCard";
import  Container  from "./Components/Container";
import useTestContest from "./utils/useTestContest";
import useContestQuestions from "./utils/useContestQuestions";

function App() {
  const [userName, setUserName] = useState(null);

  // URL-based username detection
  useEffect(() => {
    const pathParts = window.location.pathname.split("/");

    if (pathParts[1] === "u" && pathParts[2]) {
      setUserName(pathParts[2]);
    } else {
      setUserName(null);
    }

    console.log("checkUser ran");
  }, []);

  // Fetch logged-in user info via GraphQL

  const contestData = useTestContest(userName);
  console.log("contest data:-")
  console.log(contestData)

  const questions = useContestQuestions("weekly-contest-481");
  console.log(questions)

  // Log when state updates
  useEffect(() => {
    console.log("Username from URL:", userName);
  }, [userName]);


  return (
    <>
    <Container/>
    </>
  );
}

export default App;
