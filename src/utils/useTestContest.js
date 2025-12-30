import React, { useEffect, useState } from "react";
import { getLastFiveContest } from "./api";

const useTestContest = (username) => {
  const [contestData, setContestData] = useState([]);
  useEffect(() => {
    async function testContests() {
      const contests = await getLastFiveContest(username);
      console.log("useTest hook called")
      console.log("last 5 contests ", contests);
      setContestData(contests);
    }

    testContests();
  }, [username]);

  return contestData;
};

export default useTestContest;
