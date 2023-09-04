import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "@/utils/dbConnect";
import FormData from "@/models/FormData";
import sanitizeHtml from "sanitize-html";
import fs from "fs";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { method } = req;

  dbConnect();

  switch (method) {
    case "GET":
      try {
        if (
          req?.query?.username !== process.env.USERNAME ||
          req?.query?.password !== process.env.PASSWORD
        ) {
          return res.status(404).end();
        }

        const data = await FormData.find({}).select("-__v -_id").lean();

        if (!data) {
          return res.status(400).json({ message: "No data found" });
        }

        const headers = Object.keys(data[0]).toString();
        const main = data.map((item) => {
          return Object.values(item).toString();
        });

        const now = new Date();
        const timestamp = `${now.getFullYear()}${(now.getMonth() + 1)
          .toString()
          .padStart(2, "0")}${now.getDate().toString().padStart(2, "0")}_${now
          .getHours()
          .toString()
          .padStart(2, "0")}${now.getMinutes().toString().padStart(2, "0")}${now
          .getSeconds()
          .toString()
          .padStart(2, "0")}`;

        const csv = [headers, ...main].join("\n");
        fs.mkdirSync("csvFiles", { recursive: true });
        fs.writeFileSync(`csvFiles/data_${timestamp}.csv`, csv);

        res.setHeader("Content-Type", "text/csv");
        res.setHeader("charset", "utf-8");
        res.setHeader(
          "Content-Disposition",
          `attachment; filename=data_${timestamp}.csv`,
        );
        res.status(200).send(csv);
      } catch (error: any) {
        res.status(400).json({ message: error.message });
      }
      break;
    case "POST":
      try {
        const data = {
          name: sanitizeHtml(req.body.name),
          email: sanitizeHtml(req.body.email),
          phone: sanitizeHtml(req.body.phone),
          privacyPolicy: req.body.privacyPolicy,
        };
        const formData = await FormData.create(data);
        res.status(201).json({ success: true, message: "Data created" });
      } catch (error: any) {
        res.status(400).json({ message: error.message });
      }
      break;

    default:
      res.status(400).json({ message: "Method not allowed" });
      break;
  }
}
