import { GetStaticProps } from "next";
import { buildFeedbackPath, extractFeedback } from "../api/feedback";
import { FeedbackItem } from "../api/[feedbackId]";

interface FeedBackProps {
  feedbackItems: FeedbackItem[];
}

const FeedBackPage = (props: FeedBackProps) => {
  return (
    <ul>
      {props.feedbackItems.map((item) => (
        <li key={item.id}>
          {item.text}{" "}
          <button className="bg-yellow-300 px-2 py-1">Show details</button>
        </li>
      ))}
    </ul>
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
