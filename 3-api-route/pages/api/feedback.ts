import fs from "fs";
import path from "path";

import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const email = req.body.email;
    const feedback = req.body.text;

    const newFeedback = { id: new Date().toString(), email, text: feedback };
    const filePath = path.join(process.cwd(), "data", "feedback.json");
    const fileData = fs.readFileSync(filePath);
    let data;
    if (fileData.toString().trim() === '') {
      data = [];
    } else {
      data = JSON.parse(fileData.toString());
    }
    data.push(newFeedback);
    fs.writeFileSync(filePath, JSON.stringify(data));
    return res.status(201).json({ message: "Success!", feedback: newFeedback });
  }
  return res.status(200).json({ message: "This is a GET request" });
};

export default handler;