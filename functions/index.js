const functions = require('firebase-functions');
const admin = require("firebase-admin");
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
const serviceAccount = require('./servicekey.json');
const adminConfig = JSON.parse(process.env.FIREBASE_CONFIG);
console.log(adminConfig)


const express = require("express");
const cors = require("cors");
const api = express();
const api2 = express();
adminConfig.credential = admin.credential.cert(serviceAccount);
admin.initializeApp(adminConfig);




console.log('executed in shell')


api.use(
  cors({
    origin: "*",
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Content-Length",
      "X-Requested-With",
      "Accept"
    ],
    methods: ["GET", "PUT", "POST", "DELETE", "OPTIONS"],
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  })
);

api2.use(
    cors({
      origin: "*",
      allowedHeaders: [
        "Content-Type",
        "Authorization",
        "Content-Length",
        "X-Requested-With",
        "Accept"
      ],
      methods: ["GET", "PUT", "POST", "DELETE", "OPTIONS"],
      optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
    })
  );

api.get("/", (req, res) => {
        const getwtf = () => {
            return "wtf is this shitt"
        }

    Promise.all([
        //     getImages(),
        //     getCustomers(),
        //     getBusinesses(),
        //     getAccounts()
        getwtf()
    ]).then(result => {
            var obj = {};
            result.map((e) => {
              console.log(e)
            });
            res.status(200).send(result);
          });
});

exports.helloWorld = functions.region("asia-northeast1").https.onRequest(api);



api2.get("/", (req, res) => {
    const getwtf2 = () => {
        return "wDo something else"
    }

Promise.all([
    //     getImages(),
    //     getCustomers(),
    //     getBusinesses(),
    //     getAccounts()
    getwtf2()
]).then(result => {
        var obj = {};
        result.map((e) => {
          console.log(e)
        });
        res.status(200).send(obj);
      });
});

exports.helloWorld2 = functions.region("asia-northeast1").https.onRequest(api2);

