

// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');

admin.initializeApp();

exports.sendEmailNotification = functions.database.ref('/ContactFormData').onCreate((snapshot, context) => {
    const item = snapshot.val();

    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'lulikwerner@gmail.com',
            pass: 'Lulilove1990'
        }
    });

    const mailOptions = {
        from: 'lulikwerner@gmail.com',
        to: 'lulikwerner@gmail.com',
        subject: 'New item added to database',
        text: `A new item with the following details has been added to the database: ${JSON.stringify(item)}`
    };

    return transporter.sendMail(mailOptions);
});
