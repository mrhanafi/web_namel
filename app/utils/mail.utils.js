import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secure: process.env.NODE_ENV !== 'development',
    auth: {
        user: process.env.MAIL_USER,
        password: process.env.MAIL_PASSWORD,
    }
});

export const sendEmail = async ({sender,receipients,subject,message}) => {
    return await transport.sendMail({
        from: sender,
        to: receipients,
        html: message,
        text: message,
        subject: subject
    })
}