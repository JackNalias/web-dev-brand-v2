"use server";

import { ContactUsFormData } from "@/components/contact-us";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "zespraburner@gmail.com",
    pass: process.env.ZESPRA_BURNER_PASSWORD,
  },
});

const sendEmail = async (data: ContactUsFormData) => {
  const mailOptions = {
    from: data.email,
    to: "business@zespra.com",
    subject: data.subject,
    text: data.message + "\n \n from: " + data.firstName + " " + data.lastName,
  };
  const result = await transporter.sendMail(mailOptions);
  return result;
};

export default sendEmail;
