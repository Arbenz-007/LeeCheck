const GRAPHQL_URL = "https://leetcode.com/graphql";

async function leetCodeQuery(query, variables) {
  const response = await fetch(GRAPHQL_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query, variables }),
  });

  return response.json();
}

export async function getUserInfo() {
  const query = `
    query userStatus {
      userStatus {
        username
        realName
      }
    }
  `;

  const data = await leetCodeQuery(query, {});
  return data?.data?.userStatus || null;
}

export const getLastFiveContest = async (username) => {
  const query = `
        query userContestRankingInfo($username:String!){
            userContestRankingHistory(username:$username){
                attended
                contest{
                    title
                    titleSlug
                }
                ranking
            }
        }
    `;

  const data = await leetCodeQuery(query, { username });

  return data.data.userContestRankingHistory
    .filter((c) => c.attended)
    .reverse()
    .slice(0, 5);
};

export async function getContestQuestion(contestSlug) {
  const query = `
    query contestQuestionList($contestSlug:String!){
     contestQuestionList(contestSlug: $contestSlug) {
        title
        titleSlug
        questionId}}`;

        console.log("FEtching Question for :", contestSlug);

        const data = await leetCodeQuery(query,{contestSlug});

        if(data.errors){
            console.error("API issue", data.errors);
            throw new Error("Leetcode error");
        }
        return data.data.contestQuestionList;
}


export async function getReplayEvents(username, contestSlug, questionSlug) {
  const query = `
    query UserContestReplayEvents($contestSlug: String!, $questionSlug: String!, $username: String) {
      userContestReplayEvents(
        contestSlug: $contestSlug
        questionSlug: $questionSlug
        username: $username
      ) {
        eventType
        eventData
        timestamp
      }
    }
  `;
  const data = await leetCodeQuery(query, { contestSlug, questionSlug, username });
  return data.data.userContestReplayEvents || [];
}