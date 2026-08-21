import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD
    }
});

transporter.verify((error, success) => {
    if (error) {
        console.log("SMTP VERIFY ERROR:", error);
    } else {
        console.log("SMTP SERVER IS READY");
    }
});

export default transporter;
