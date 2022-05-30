import express from 'express';
import line from '@line/bot-sdk';

//dotnev
import dotenv from 'dotenv';
import line_router from './line.js';

dotenv.config();ß
l
const app = express()
const port = process.env.PORT
const client = new line.Client({
    channelAccessToken: process.env.LCH_ACCESS
});

app.use(express.json());
app.use('/line', express.static('line-public'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/line', line_router);

app.post('/web/checkin', (req, res, next) => {
    console.log(req.body);
    client.pushMessage(req.body.lid, {
        type: 'text',
        text: `${req.body.name} へのチェックインを確認しました！\n\n写真をどうぞ`
    })
    res.status(200);
    res.json({ok: 200});
    res.end();
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

