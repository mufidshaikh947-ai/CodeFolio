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

async function sendEmail({

    to,

    subject,

    html

}) {

    await transporter.sendMail({

        from: `"CodeFolio Portfolio" <${process.env.EMAIL_USER}>`,

        to,

        subject,

        html

    });

}

module.exports = sendEmail;