const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.post("/api/contact", async (req, res) => {
    console.log("Incoming body:", req.body);
    const {nombre, email, message} = req.body;

    if(!nombre || !email || !message){
        return res.status(400).json({ error: "All fields are required." });
    }

    const transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS,
        },
    });

    const mailOptions = {
        from: email,
        to: process.env.MAIL_USER,
        subject: "Contact Form Message",
        text: `Name: ${nombre}\nEmail: ${email}\nMessage:\n${message}`,
    };
    
    try{
        await transporter.sendMail(mailOptions);
        return res.json({ success: true, message: "Message sent successfully!" });
    }catch(err){
        console.error(err);
        return res.status(500).json({ success: false, error: "Message failed to send." });
    }

});

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`)
});