import { NextApiRequest, NextApiResponse } from "next";
import { buildFeedbackPath, extractFeedback } from "./feedback";

export interface FeedbackItem {
  id: string;
  email: string;
  text: string;
}

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const feedbackId = req.query.feedbackId;
  const filepath = buildFeedbackPath();
  const feedbackData = extractFeedback(filepath);
  const selectedFeedback = feedbackData.find(
    (feedback: FeedbackItem) => feedback.id === feedbackId
  );
  res.status(200).json({ feedback: selectedFeedback });
};

export default handler;
