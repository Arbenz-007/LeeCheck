import { useEffect, useState } from "react";
import { getContestQuestion, getLastFiveContest, getUserInfo } from "./utils/api";
import ContestCard from "./Components/ContestCard";
import  Container  from "./Components/Container";

function App() {
  const [userName, setUserName] = useState(null);
  const [userInfo, setUserInfo] = useState(null);

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
  useEffect(() => {
    async function fetchUser() {
      const data = await getUserInfo();
      console.log("User info from GraphQL:", data);
      setUserInfo(data);
    }

    fetchUser();
  }, []);

  // Log when state updates
  useEffect(() => {
    console.log("Username from URL:", userName);
  }, [userName]);

  useEffect(() => {
    console.log("UserInfo state updated:", userInfo);
  }, [userInfo]);

  useEffect(()=>{
    async function testContests() {
      const contests = await getLastFiveContest("ARBENZ007")
      console.log("last 5 contests ",contests)
    }

    testContests()
  },[])

  useEffect(()=>{
    async function getQuestion() {
      const question = await getContestQuestion("weekly-contest-481")
      console.log(question);
    }

    getQuestion()
  },[])
  return (
    <>
    <Container/>
    {/* <ContestCard/> */}
    </>
  );
}

export default App;
