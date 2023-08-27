const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const { MessagingResponse } = require('twilio').twiml;
const app = express();
const keys = require('./config/keys');

const accountSid = keys.twilioAccountSid;
const authToken = keys.twilioAuthToken;

app.use(bodyParser.urlencoded({ extended: false }));

const client = require('twilio')(accountSid, authToken);

app.post('/sms', (req, res) => {
  const twiml = new MessagingResponse();

  console.log('Here is the info that we have gotten: ', req);
  let messageFrom = req.body.From;
  let messageBody = req.body.Body;
  console.log('RB', req.body);
  console.log('MF', messageFrom, 'MB', messageBody);
  twiml.message('The Robots are coming! Head for the hills!');

  res.type('text/xml').send(twiml.toString());
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5005;

console.log('Port listneing on: ', PORT);
app.listen(PORT);
serverStartUpMessage();

function serverStartUpMessage() {
  console.log('Trying to send out text');
  client.messages
    .create({
      body: 'Server Has Booted Up',
      to: '+19186884907',
      from: '+16282673937',
    })
    .then((message) => console.log(message))
    .catch((error) => console.log(error));
}
