import { GetStaticProps } from "next";
import { buildFeedbackPath, extractFeedback } from "../api/feedback";
import { FeedbackItem } from "../api/[feedbackId]";
import { useState } from "react";

interface FeedBackProps {
  feedbackItems: FeedbackItem[];
}

const FeedBackPage = (props: FeedBackProps) => {
  const [feedbackData, setfeedbackData] = useState<FeedbackItem>();

  const loadFeedbackHandler = (id: string) => {
    fetch(`/api/${id}`)
      .then((response) => response.json())
      .then((data) => setfeedbackData(data.feedback));
  };

  return (
    <>
      {feedbackData && (
        <p className="text-xl bg-red-700 font-bold">{feedbackData.email}</p>
      )}
      <ul>
        {props.feedbackItems.map((item) => (
          <li key={item.id}>
            {item.text}{" "}
            <button
              className="bg-yellow-300 px-2 py-1"
              onClick={loadFeedbackHandler.bind(null, item.id)}
            >
              Show details
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default FeedBackPage;

export const getStaticProps: GetStaticProps = (ctx) => {
  const filepath = buildFeedbackPath();
  const data = extractFeedback(filepath);
  return {
    props: {
      feedbackItems: data,
    },
  };
};
