const sgMail = require("@sendgrid/mail");

async function sendEmail({
    to,
    subject,
    html
}) {

    const apiKey = process.env.SENDGRID_API_KEY;
    const from = process.env.SENDGRID_FROM_EMAIL;

    if (!apiKey || !from) {

        throw new Error("SendGrid email configuration is missing.");

    }

    sgMail.setApiKey(apiKey);

    await sgMail.send({

        to,

        from: `CodeFolio Portfolio <${from}>`,

        subject,

        html

    });

}

module.exports = sendEmail;
