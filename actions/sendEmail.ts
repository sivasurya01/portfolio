"use server";
import React from "react";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";
import nodemailer from "nodemailer";

const key = "dlwbpknwpfcetlza";
const Owneremail = "sivasuryapgm@gmail.com";
console.log(key, Owneremail);
export const sendEmail = async (formData: any) => {
  const { senderEmail, message } = formData;
  const smtpHost = "sivasuryapgm@gmail.com";
  const smtpPort = 465;

  // simple server-side validation
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }
  const transporter = nodemailer.createTransport({
    host: smtpHost,
    service: "gmail",
    secure: false, // false for TLS
    port: smtpPort,
    auth: {
      user: Owneremail,
      pass: key,
    },
    tls: {
      // do not fail on invalid certs
      rejectUnauthorized: false,
    },
  });
  const mailoption = {
    from: senderEmail,
    to: Owneremail,
    subject: "New Email From my Portfolio",
    html: `<p>${message}</p>`,
  };
  console.log(mailoption, "mail");
  const info = await transporter.sendMail(mailoption);
  console.log("Email sent:", info.messageId);
};
