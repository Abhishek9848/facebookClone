const nodemailer = require('nodemailer')
const {google} = require('googleapis')
const auth_link = "https://developers.google.com/oauthplayground"
const {OAuth2} = google.auth;
const { EMAIL, MAILING_ID, MAILING_SECRET, MAILING_REFRESH } = process.env;
const auth = new OAuth2(MAILING_ID, MAILING_SECRET, MAILING_REFRESH, auth_link)
const fs = require("fs").promises;
const path = require("path");
const handlebars = require("handlebars");
const relativeTemplatePath = "../email.html";

exports.sendVerificationEmail = async (email, name, url) =>{
    const templatePath = path.join(__dirname, relativeTemplatePath);
    const templateFile = await fs.readFile(templatePath, 'utf-8');
    const template = handlebars.compile(templateFile);
    const replacements = {
        username: name,
        url
    };
    const finalHtml = template(replacements);
    auth.setCredentials({
        refresh_token:MAILING_REFRESH,
    })
    const accessToken = auth.getAccessToken();
    const smtp = nodemailer.createTransport({
        service:"gmail",
        auth:{
            type:"OAUTH2",
            user:EMAIL,
            clientId:MAILING_ID,
            clientSecret:MAILING_SECRET,
            refreshToken:MAILING_REFRESH,
            accessToken:accessToken
        }
    });
    const mailOptions = {
        from:EMAIL,
        to:"abhis4892@gmail.com",
        subject:"Social media email verification",
        html:finalHtml,
    }
    smtp.sendMail(mailOptions , (err, res)=>{
        if(err) return err;
        return res;
    })
}