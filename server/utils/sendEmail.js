const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: Number(process.env.EMAIL_PORT),
    secure: false,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

transporter.verify(function (error, success) {

    if (error) {

        console.error("SMTP ERROR:");
        console.error(error);

    } else {

        console.log("SMTP READY");

    }

});

async function sendEmail({ to, subject, html }) {

    console.log("Sending email...");

    await transporter.sendMail({
        from: `"CodeFolio Portfolio" <${process.env.EMAIL_USER}>`,
        to,
        subject,
        html
    });

    console.log("Email sent.");

}

module.exports = sendEmail;