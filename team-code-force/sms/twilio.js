require('dotenv').config();
const accountSid = process.env.TWILIO_SID;
const authToken = process.env.TWILIO_TOKEN;

const client = require('twilio')(accountSid, authToken);

const sendNotification = (message, phoneNum) => {
      client.messages
            .create({body: message, from: '+18043749153' /*<--- Sender number*/, to: phoneNum /*<--- Recipiant number*/})
            .then((message) => {
                  console.log(message.sid);
                  return message.sid;
            });
};

module.exports = {
      sendNotification,
};