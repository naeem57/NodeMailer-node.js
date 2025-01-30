require ("dotenv").config();
const nodemailer = require ("nodemailer");


const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.Email_User,
        pass: process.env.Email_Password
    }
});

const mailOptions = {
    from: process.env.Email_User,
    to: `${process.env.Email_User}, ${process.env.Rec_Email}`,
    subject: "Test email from node.js!",
    text: "Hello, this is test mail from node.js using nodemailer",
};

transporter.sendMail(mailOptions, (error, info) => {
    if(error){
        return console.log("Error occured:", error);
        
    }
    console.log("Email sent successfully!", info.response);
})