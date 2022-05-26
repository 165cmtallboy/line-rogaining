import express from 'express';
import dotenv from 'dotenv';
import line from '@line/bot-sdk';

dotenv.config();

const client = new line.Client({
    channelAccessToken: process.env.LCH_ACCESS
});
const router = express.Router();

router.post('/wh', (req, res, next) => {
    console.log(req.body);
    req.body.events.forEach((event) => {
        if(event.type == 'message'){
            if(event.message.type == 'image'){
                // client.getMessageContent(event.message.id);
                client.replyMessage(event.replyToken, {
                    type: 'text',
                    text: 'チェックインが成立しました！'
                })
            }
            if(event.message.type == 'text' && event.message.text == 'チェックイン'){
                const buttonMsg = {
                    "type": "template",
                    "altText": "This is a buttons template",
                    "template": {
                        "type": "buttons",
                        "title": "チェックイン",
                        "text": "ブラウザーが起動します！位置情報をONにしてあることを確認してください。",
                        "actions": [
                            {
                              "type": "uri",
                              "label": "チェックイン",
                              "uri":  "https://d033-240d-1a-ee-2f00-f0a8-1f2b-63b7-b7bc.jp.ngrok.io/?lid="+event.source.userId
                            }
                        ]
                    }
                  }
                client.replyMessage(event.replyToken, buttonMsg)
            }
        }
        console.log(event);
    })
    res.json({status: true});
    res.status(200);
    return;
})



export default router;