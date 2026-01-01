import React, { useState } from "react";
import { X } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { getContestQuestion } from "../utils/api";
import { setContestQuestions } from "../utils/contestSlice";

const ContestCard = ({ onClose }) => {
  const contests = useSelector((store) => store.contests.list);
  const dispatch = useDispatch();

  const [openSlug, setOpenSlug] = useState(null);
  const [loadingSlug, setLoadingSlug] = useState(null);

  const handleContestClick = async (contestItem) => {
    const slug = contestItem.contest.titleSlug;

    setOpenSlug((prev) => (prev === slug ? null : slug));

    if (!contestItem.questionsLoaded) {
      setLoadingSlug(slug);

      const questions = await getContestQuestion(slug);
      console.log("question");
      console.log(questions);

      dispatch(
        setContestQuestions({
          contestSlug: slug,
          questions,
        })
      );

      setLoadingSlug(null);
    }
  };

  return (
    <div className="flex flex-col max-h-[600px] bg-gray-200 p-5 rounded-xl shadow-2xl overflow-hidden">
      
      {/* Header */}
      <div className="mb-5 flex justify-between items-start">
        <h2 className="font-bold text-2xl text-gray-800">LeeCheck</h2>
        <button onClick={onClose}>
          <X size={20} />
        </button>
      </div>

      {/* Contest List */}
      <div className="space-y-3 overflow-y-auto pr-1">
        {contests.length === 0 ? (
          <p className="text-sm text-gray-500">No contests found</p>
        ) : (
          contests.map((contestItem) => (
            <div key={contestItem.contest.titleSlug}>
              <RedDetailRow
                contestName={contestItem.contest.title}
                result={`Rank: ${contestItem.ranking}`}
                onClick={() => handleContestClick(contestItem)}
              />

              {openSlug === contestItem.contest.titleSlug && (
                <div className="mt-2 ml-2 text-sm">
                  {loadingSlug === contestItem.contest.titleSlug && (
                    <p className="text-black">Loading questions...</p>
                  )}

                  {contestItem.questions.map((q) => (
                    <div className="text-black " key={q.titleSlug}>
                      • {q.title}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

const RedDetailRow = ({ contestName, result, onClick }) => (
  <div
    onClick={onClick}
    className="flex justify-between items-center p-4 bg-[#d9534f] text-white rounded-lg text-sm font-semibold shadow-sm cursor-pointer"
  >
    <span>{contestName}</span>
    <span>{result}</span>
  </div>
);

export default ContestCard;
