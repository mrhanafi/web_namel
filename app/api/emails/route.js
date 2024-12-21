import { sendEmail } from "@/app/utils/mail.utils"
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request){
    // console.log('asdasdaqd')
    try{
        const {email,subject,message} = await request.json();

    const transporter = nodemailer.createTransport({
        host: 'mail.namelsolutions.com',
        port: 465,
        secure: true,
        auth: {
            user: 'admin@namelsolutions.com',
            pass: process.env.MAIL_PASSWORD,
        }
    })
    

    const mailOption = {
        from: 'admin@namelsolutions.com',
        to: 'hanafi@namelsolutions.com',
        subject: subject,
        html: `
        <h3>Contact from: ${email}</h3>
        <p>A message from website: ${message}</p>
        `
    }

    await transporter.sendMail(mailOption);

    return NextResponse.json({message:'Email sent'},{status:200})
    }catch(error){
        return NextResponse.json({message: 'failed'},{status:500})
    }
    
    // const sender ={
    //     name: 'Website',
    //     address: 'no-reply@example.com'
    // }

    // const receipients = [{
    //     name: 'John Doe',
    //     address: 'john.doe@example.com'
    // }]

    // try{
    //     const result = await sendEmail({
    //         sender,
    //         receipients,
    //         subject: 'Welcome to our website!',
    //         message: 'You are welcome to our platform'
    //     });
    //     return Response.json({
    //         accepted: result.accepted
    //     })
    // }catch (error){
    //     return Response.json({message: 'Unable to send email'},{
    //         status: 500
    //     })
    // }
}