"use server";
import React from "react";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";
import nodemailer from "nodemailer"


const key = 'cwxelbviidkxbzwv'
const Owneremail = 'sivasuryawahmi@gmail.com'
console.log(key,Owneremail)
export const sendEmail = async (formData:any) => {
  const { senderEmail, message } = formData;
  const smtpHost = 'smtp.gmail.com';
  const smtpPort = 587;
  
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
    service:'gmail',
    port:smtpPort,
    auth:{
      user:Owneremail,
      pass:key
    }
  })
const mailoption = {
  from:Owneremail,
  to:senderEmail,
  subject:'New Email From my Portfolio',
  html:`<p>${message}</p>`
}
console.log(mailoption,"mail")
await transporter.sendMail(mailoption,function(err,info){
  if(err){
    console.log(err)
  }else{
    console.log('email sended')
  }
})
};
