
console.log({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    user: process.env.EMAIL_USER,
    passExists: !!process.env.EMAIL_PASS
});
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: Number(process.env.EMAIL_PORT),
    secure: false,

    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    },

    requireTLS: true,

    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 10000
});

transporter.verify((error, success) => {

    if (error) {

        console.error("SMTP ERROR:");
        console.error(error);

    } else {

        console.log("✅ SMTP Connected Successfully");

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