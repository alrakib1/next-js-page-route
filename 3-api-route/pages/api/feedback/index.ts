import fs from "fs";
import path from "path";

import { NextApiRequest, NextApiResponse } from "next";

export const buildFeedbackPath = () => {
  return path.join(process.cwd(), "data", "feedback.json");
};

export const extractFeedback = (filePath: string) => {
  const fileData = fs.readFileSync(filePath);
  const data = JSON.parse(fileData.toString());
  return data;
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const email = req.body.email;
    const feedback = req.body.text;

    const newFeedback = { id: Math.random().toString(), email, text: feedback };
    const filePath = buildFeedbackPath();
    const data = extractFeedback(filePath);

    data.push(newFeedback);
    fs.writeFileSync(filePath, JSON.stringify(data));
    return res.status(201).json({ message: "Success!", feedback: newFeedback });
  } else {
    const filePath = buildFeedbackPath();
    const data = extractFeedback(filePath);
    return res.status(200).json({ feedback: data });
  }
};

export default handler;
