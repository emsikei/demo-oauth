import express, { response } from "express";
import axios from "axios";

const GOOGLE_CLIENT_SECRET = "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";
const GOOGLE_CLIENT_ID = "72077841259-naqli9572qehlso0cfclkefndk7lgj3s.apps.googleusercontent.com"

const FACEBOOK_CLIENT_ID = "1246606399427378";
const FACEBOOK_CLIENT_SECRET = "2b4b5cb882c060ef1f70aac44b324e81";

const app = express();

app.get('/google', async (req, res) => {
    const {code} = req.query;

    // https://developers.google.com/google-ads/api/docs/best-practices/common-errors
    try {
        const url = `https://www.googleapis.com/oauth2/v3/token?code=${code}&client_id=${GOOGLE_CLIENT_ID}&client_secret=${GOOGLE_CLIENT_SECRET}&grant_type=authorization_code&redirect_uri=${encodeURIComponent('http://localhost:8080/google')}`;
        
        const response = await axios.post(url) 

        const userInfo = await axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${response.data.access_token}`)

        console.log(userInfo.data)

        res.redirect("http://localhost:3000")

    } catch (error) {
        console.log(error.response)
    }
})

app.get('/facebook', async (req, res) => {
    const {code} = req.query;

    try {
        const response = await axios.post(
            "https://graph.facebook.com/v15.0/oauth/access_token",
            {},
            {
              params: {
                code,
                client_id: FACEBOOK_CLIENT_ID,
                client_secret: FACEBOOK_CLIENT_SECRET,
                redirect_uri: 'http://localhost:8080/facebook'
              }
            }
          )

        const userId = await axios.get('https://graph.facebook.com/me', {
            params: {
                access_token: response.data.access_token
            }
        })

        const userInfo = await axios.get(`https://graph.facebook.com/${userId.data.id}`, {
            params: {
                access_token: response.data.access_token,
                fields: "id,name,email"
            }
        })

        console.log(userInfo.data);

    } catch (error) {
        console.log(error.message);
    }

    res.redirect('http://localhost:3000/')
})

async function main() {  
    app.listen(8080, () => {
        console.log('SERVER STARTED ON PORT: 3000')
    })
  }
  
main()