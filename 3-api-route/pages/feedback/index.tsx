import { GetStaticProps } from "next";
import { buildFeedbackPath, extractFeedback } from "../api/feedback";

interface FeedBackProps {
  feedbackItems: { id: string; email: string; text: string }[];
}

const FeedBackPage = (props: FeedBackProps) => {
  return (
    <ul>
      {props.feedbackItems.map((item) => (
        <li key={item.id}>{item.text}</li>
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
