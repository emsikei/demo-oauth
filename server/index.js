import express, { response } from "express";
import axios from "axios";

const CLIENT_SECRET = "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";
const CLIENT_ID = "72077841259-naqli9572qehlso0cfclkefndk7lgj3s.apps.googleusercontent.com"

const app = express();

app.get('/google', async (req, res) => {
    const {code} = req.query;


    // https://developers.google.com/google-ads/api/docs/best-practices/common-errors
    try {
        const url = `https://www.googleapis.com/oauth2/v3/token?code=${code}&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&grant_type=authorization_code&redirect_uri=${encodeURIComponent('http://localhost:8080/google')}`;
        
        const response = await axios.post(url) 

        console.log(response.data);

        const userInfo = await axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${response.data.access_token}`)

        console.log(userInfo.data)

    } catch (error) {
        console.log(error.response)
    }
})

async function main() {  
    app.listen(8080, () => {
        console.log('SERVER STARTED ON PORT: 3000')
    })
  }
  
main()