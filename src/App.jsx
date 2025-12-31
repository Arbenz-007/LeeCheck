import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setContests } from "./utils/contestSlice";
import useTestContest from "./utils/useTestContest";
import Container from "./Components/Container";

function App() {
  const [userName, setUserName] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const parts = window.location.pathname.split("/");
    if (parts[1] === "u" && parts[2]) {
      setUserName(parts[2]);
    }
  }, []);

  const contestData = useTestContest(userName);

  useEffect(() => {
    if (contestData.length > 0) {
      dispatch(setContests(contestData));
    }
  }, [contestData, dispatch]);

  return <Container />;
}

export default App;
