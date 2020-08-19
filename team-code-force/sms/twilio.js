require('dotenv').config();
const accountSid = process.env.TWILIO_SID;
const authToken = process.env.TWILIO_TOKEN;

const client = require('twilio')(accountSid, authToken);

client.messages
      .create({body: 'Hi there!', from: '+18043749153' /*<--- Sender number*/, to: '+15558675310' /*<--- Recipiant number*/})
      .then(message => console.log(message.sid));