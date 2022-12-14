const sgMail = require("@sendgrid/mail");

const sendgridAPIKey = process.env.SENDGRID_API_KEY;

sgMail.setApiKey(sendgridAPIKey);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "yashmehtatem@gmail.com",
    subject: "Welcome to Task Manager App",
    text: `${name} Welcome to Task Manager Application`,
  });
};

const sendGoodByeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "yashmehtatem@gmail.com",
    subject: `Goodbye ${name}`,
    text: `We are sorry to see you go!`,
  });
};

module.exports = {
  sendWelcomeEmail,
  sendGoodByeEmail,
};
