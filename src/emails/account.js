const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'ayushsrivastava1897@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Hello ${name}. We are happy to serve you.`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'ayushsrivastava1897@gmail.com',
        subject: 'Sorry to see you go!',
        text: `Goodbye, ${name}. We hope to see you again.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}